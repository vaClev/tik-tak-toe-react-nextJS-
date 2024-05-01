import clsx from "clsx";
import { UiButton } from "../uikit/ui-button";
import { GameSymbol } from "./game-symbol";

export function GameField({
  className,
  cells,
  currentMove,
  nextMove,
  handleCellClick,
  winnerSequence,
  winnerSymbol,
}) {
  const actions = (
    <>
      <UiButton size="md" variant="primary">
        Ничья
      </UiButton>
      <UiButton size="md" variant="outline">
        Сдаться
      </UiButton>
    </>
  );
  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            onClick={() => {
              handleCellClick(index);
            }}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
          >
            {symbol && <GameSymbol className="w-5 h-5" symbol={symbol} />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
}

/*GameField Layout --- GameMoveInfo  --- grid---- gameCell*/
function GameFieldLayout({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7",
      )}
    >
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="mr-auto">
        <div className="flex items-center gap-1 text-xl leading-tight font-semibold">
          <p>Ход:</p>
          <GameSymbol symbol={currentMove} className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-1 text-xs text-slate-400">
          <p>Следующий:</p>
          <GameSymbol symbol={nextMove} className="w-3 h-3" />
        </div>
      </div>
      {actions}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="mt-3 grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px">
      {children}
    </div>
  );
}

function GameCell({ children, onClick, isWinner, disabled }) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-orange-600/10",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
