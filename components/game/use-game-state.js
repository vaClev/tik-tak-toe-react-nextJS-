import { useState } from "react";
import { GAME_SYMBOLS } from "../../game/constants.js";
import { checkWinner} from "./check-winner.js";
import { getNextMove } from "./get-next-move.js";



export function useGameState(playersCount)
{
    const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(() => ({
        cells: new Array(19 * 19).fill(null),
        currentMove: GAME_SYMBOLS.CROSS,
        playersTimeOver:[],
    }));
    const winnerSequence = checkWinner(cells);
    const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);
    const winnerSymbol = nextMove===currentMove? currentMove : cells[winnerSequence?.[0]];

    const handleCellClick = (index) => {
      setGameState((lastGameState) => {
        if (lastGameState.cells[index])
        {
          return lastGameState;
        }
        return {
          ...lastGameState,
          currentMove: getNextMove(lastGameState.currentMove, playersCount, lastGameState.playersTimeOver),
          cells: lastGameState.cells.map((cell, i) =>
            i === index ? lastGameState.currentMove : cell,
          ),
        };
      });
    }

    const handlePlayerTimeIsOver=(symbol)=>{
      setGameState((lastGameState) => {
        return {
          ...lastGameState,
          playersTimeOver: [...lastGameState.playersTimeOver, symbol],
          currentMove: getNextMove(lastGameState.currentMove, playersCount, lastGameState.playersTimeOver),
        };
      });
    }

    //мой тест 
    const resetGame =()=>{
      setGameState((lastGameState) => {
        return {
          cells: new Array(19 * 19).fill(null),
          playersTimeOver: [],
          currentMove: GAME_SYMBOLS.CROSS,
        };
      });
    }
    //конец моего теста 
    
    return {cells, 
        currentMove, 
        nextMove, 
        handleCellClick, 
        handlePlayerTimeIsOver,
        winnerSequence,
        winnerSymbol,
        resetGame
      };
}

