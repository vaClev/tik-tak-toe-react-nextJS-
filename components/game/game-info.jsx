import clsx from "clsx";
import { Profile } from "./profile";
import { GameSymbol } from "./game-symbol";
import { GAME_SYMBOLS } from "./constants";
import avatarSrc1 from "./ui/images/avatar-1.png";
import avatarSrc2 from "./ui/images/avatar-2.png";
import avatarSrc3 from "./ui/images/avatar-3.png";
import avatarSrc4 from "./ui/images/avatar-4.png";
import { useEffect, useState } from "react";

const players = [
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
export function GameInfo({
  className,
  playersCount,
  currentMove,
  isWinner,
  onPlayerTimeOver,
}) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 justify-between grid grid-cols-2 gap-2",
      )}
    >
      {players.slice(0, playersCount).map((player, index) => {
        return (
          <PlayerInfo
            PlayerInfo={player}
            key={player.id}
            isRight={index % 2 === 1}
            isTimerRunning={currentMove === player.symbol && !isWinner}
            onTimeOver={() => onPlayerTimeOver(player.symbol)}
          />
        );
      })}
    </div>
  );
}

function PlayerInfo({ PlayerInfo, isRight, isTimerRunning, onTimeOver }) {
  const [seconds, setSeconds] = useState(60);
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0"); //padStart добавит в начало строки символы "0" чтоб длина строки стала 2 символа
  const secondsString = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds < 10;
  useEffect(() => {
    //функция эффекта (при изменении данных в массиве зависимостей)
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((seconds) => Math.max(seconds - 1, 0));
      }, 1000);
      //функция очистки вызывается перед следующим срабатыванием эффекта
      return () => {
        clearInterval(interval);
        setSeconds(60);
      };
    }
  }, [
    //массив зависимостей
    isTimerRunning,
  ]);

  useEffect(() => {
    if (seconds == 0) {
      onTimeOver();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }
    return "text-slate-200";
  };
  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className="w-44"
          name={PlayerInfo.name}
          rating={PlayerInfo.rating}
          avatar={PlayerInfo.avatar}
        />
        <div className="bg-white absolute w-5 h-5 rounded-full shadow -left-1 -top-1 flex items-center justify-center">
          <GameSymbol symbol={PlayerInfo.symbol} />
        </div>
      </div>
      <div className={clsx("w-px bg-slate-200 h-6", isRight && "order-2")} />
      <div
        className={clsx(
          "text-lg font-semibold w-[60px]",
          isRight && "order-1",
          getTimerColor(),
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
