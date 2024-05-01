import { HistoryIcon, StarIcon, UserIcon } from "./icons";

export function GameInfo({ playersCount, isRatingGame, timeMode }) {
  return (
    <div className="flex items-center gap-3 text-xs text-slate-400">
      {isRatingGame && <StarIcon />}
      <div className="flex items-center gap-1">
        <UserIcon />
        <p>{playersCount}</p>
      </div>
      <div className="flex items-center gap-1">
        <HistoryIcon />
        {timeMode}
      </div>
    </div>
  );
}
