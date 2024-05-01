import { CrossIcon, NullIcon, SquareIcon, TriangleIcon } from "./icons";
import { GAME_SYMBOLS } from "../constants.js";

export function GameSymbol({ symbol, className }) {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: CrossIcon,
      [GAME_SYMBOLS.ZERO]: NullIcon,
      [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
      [GAME_SYMBOLS.SQUARE]: SquareIcon,
    }[symbol] ?? CrossIcon;
  return <Icon className={className} />;
}
