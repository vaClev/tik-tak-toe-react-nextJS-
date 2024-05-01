import clsx from "clsx";
import { GameSymbol } from "./game-symbol";
import { memo } from "react";

export const GameCell = memo(function GameCell({
  onClick,
  index,
  isWinner,
  disabled,
  symbol,
}) {
  //console.log(symbol);
  return (
    <button
      disabled={disabled}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center hover:bg-lime-100",
        isWinner && "bg-orange-600/10",
      )}
      onClick={() => onClick(index)}
    >
      {symbol && <GameSymbol className="w-5 h-5" symbol={symbol} />}
    </button>
  );
});
