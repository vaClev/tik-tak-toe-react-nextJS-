import { GameSymbol } from "./game-symbol";

export function GameMoveInfo({ currentMove, nextMove }) {
  return (
    <>
      <div className="flex items-center gap-1 text-xl leading-tight font-semibold">
        <p>Ход:</p>
        <GameSymbol symbol={currentMove} className="w-5 h-5" />
      </div>
      <div className="flex items-center gap-1 text-xs text-slate-400">
        <p>Следующий:</p>
        <GameSymbol symbol={nextMove} className="w-3 h-3" />
      </div>
    </>
  );
}
