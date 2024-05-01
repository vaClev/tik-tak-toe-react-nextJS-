import { GameTitle } from "./ui/game-title";
import { BackLink } from "./ui/back-link";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { PLAYERS, PLAYERS_COUNT } from "./constants";
import { PlayerInfo } from "./ui/player-info";
import { GameMoveInfo } from "./ui/gameMoveInfo";
import { GameCell } from "./ui/game-cell";
import { GameOverModal } from "./ui/game-over-modal";
import {
  GAME_STATE_ACTIONS,
  gameStateReducer,
  initGameState,
} from "./model/game-state-reducer";
import { useCallback, useMemo, useReducer } from "react";
import { checkWinner } from "./model/check-winner";
import { getNextMove } from "./model/get-next-move";
import { computeWinnerSymbol } from "./model/compute-winner-symbol";
import { computePlayerTimer } from "./model/compute-player-timer";
import { useInterval } from "../lib/timers";

export function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    {
      playersCount: PLAYERS_COUNT,
      defaultTimer: 60000,
      currentMoveStart: Date.now(),
    },
    initGameState,
  );

  useInterval(
    1000,
    !!gameState.currentMoveStart,
    useCallback(() => {
      dispatch({
        type: GAME_STATE_ACTIONS.TICK,
        now: Date.now(),
      });
    }, []),
  );

  const winnerSequence = useMemo(() => checkWinner(gameState), [gameState]); //оптимизация пересчет победителя только после изменения состояния, а не каждые 100мс
  const nextMove = getNextMove(gameState);
  const winnerSymbol = computeWinnerSymbol(gameState, {
    winnerSequence,
    nextMove,
  });

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

  //console.log("GameRender");
  const handleCellClick = useCallback((index) => {
    dispatch({
      type: GAME_STATE_ACTIONS.CELL_CLICK,
      index,
      now: Date.now(),
    });
  }, []);

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo
            isRatingGame
            playersCount={PLAYERS_COUNT}
            timeMode={"1 мин. на ход"}
          />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
          const { timer, timerStartAt } = computePlayerTimer(
            gameState,
            player.symbol,
          );
          return (
            <PlayerInfo
              key={player.id}
              isRight={index % 2 != 0}
              avatar={player.avatar}
              name={player.name}
              rating={player.rating}
              symbol={player.symbol}
              isTimerRunning={false}
              timer={timer}
              timerStartAt={timerStartAt}
            />
          );
        })}
        gameMoveInfo={
          <GameMoveInfo
            currentMove={gameState.currentMove}
            nextMove={nextMove}
          />
        }
        gameCells={gameState.cells.map((symbol, index) => (
          <GameCell
            key={index}
            index={index}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
            onClick={handleCellClick}
            symbol={symbol}
          />
        ))}
      ></GameLayout>
      <GameOverModal
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            isRight={index % 2 != 0}
            avatar={player.avatar}
            name={player.name}
            rating={player.rating}
            symbol={player.symbol}
            isTimerRunning={false}
            timer={gameState.timers[player.symbol]}
          />
        ))}
        winnerName={winnerPlayer?.name}
        onClose={dispatch}
      />
    </>
  );
}
