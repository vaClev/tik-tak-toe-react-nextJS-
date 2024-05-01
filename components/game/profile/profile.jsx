import Image from "next/image";
import Avatar from "./avatar.png";
import clsx from "clsx";
export function Profile({ className, name, rating, avatar = Avatar }) {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 text-start text-teal-600",
        className,
      )}
    >
      <Image src={avatar} alt="player's avatar" className="w-12" unoptimized />
      <div className="overflow-hidden">
        <div className="text-lg leading-tight truncate ">{name}</div>
        <div className="text-slate-400 text-xs leading-tight">
          Рейтинг: {rating}
        </div>
      </div>
    </div>
  );
}
