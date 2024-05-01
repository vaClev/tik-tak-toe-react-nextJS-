import clsx from "clsx";
import { GameSymbol } from "./game-symbol";
import Image from "next/image";
import { useNow } from "../../lib/timers";

export function PlayerInfo({
  isRight,
  className,
  avatar,
  name,
  rating,
  symbol,
  timer,
  timerStartAt,
}) {
  //console.log(`player info render${symbol}`);
  const now = useNow(1000, timerStartAt);
  const mils = Math.max(now ? timer - (now - timerStartAt) : timer, 0);
  const seconds = Math.ceil(mils / 1000); // передается изначально в милисекундах
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0"); //padStart добавит в начало строки символы "0" чтоб длина строки стала 2 символа
  const secondsString = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds < 10;

  const getTimerColor = () => {
    if (timerStartAt) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }
    return "text-slate-200";
  };
  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <div className="flex items-center gap-2 text-start text-teal-600 w-44">
          <Image
            src={avatar}
            alt="player's avatar"
            className="w-12"
            unoptimized
          />
          <div className="overflow-hidden">
            <div className="text-lg leading-tight truncate ">{name}</div>
            <div className="text-slate-400 text-xs leading-tight">
              Рейтинг: {rating}
            </div>
          </div>
        </div>

        <div className="bg-white absolute w-5 h-5 rounded-full shadow -left-1 -top-1 flex items-center justify-center">
          <GameSymbol symbol={symbol} />
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
