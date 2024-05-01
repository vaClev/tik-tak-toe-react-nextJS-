import avatarSrc1 from "./ui/images/avatar-1.png";
import avatarSrc2 from "./ui/images/avatar-2.png";
import avatarSrc3 from "./ui/images/avatar-3.png";
import avatarSrc4 from "./ui/images/avatar-4.png";

export const PLAYERS_COUNT = 2; // сколько игроков пока константа

export const GAME_SYMBOLS = {
    ZERO: "zero",
    CROSS: "cross",
    TRIANGLE: "triangle",
    SQUARE: "square",
  };
export const MOVE_ORDER = [
    GAME_SYMBOLS.CROSS,
    GAME_SYMBOLS.ZERO,
    GAME_SYMBOLS.TRIANGLE,
    GAME_SYMBOLS.SQUARE,
  ];

export const PLAYERS = [
    {
      id: 1,
      name: "VasilevOl",
      rating: 1230,
      avatar: avatarSrc1,
      symbol: GAME_SYMBOLS.CROSS,
    },
    {
      id: 2,
      name: "NektoWomanLONG LONG MANE",
      rating: 1039,
      avatar: avatarSrc2,
      symbol: GAME_SYMBOLS.ZERO,
    },
    {
      id: 3,
      name: "Chelovek",
      rating: 1530,
      avatar: avatarSrc3,
      symbol: GAME_SYMBOLS.TRIANGLE,
    },
    {
      id: 4,
      name: "Rotob",
      rating: 1256,
      avatar: avatarSrc4,
      symbol: GAME_SYMBOLS.SQUARE,
    },
  ];
