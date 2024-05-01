import Link from "next/link";
import {
  ArrowLeftIcon,
  StarIcon,
  UserIcon,
  HistoryIcon,
} from "../game-new/ui/icons";

export function GameTitle({ playersCount }) {
  return (
    <div className="pl-2">
      <Link
        href="#"
        className="flex items-center gap-2 text-xs text-teal-600 -mb-0.5"
      >
        <ArrowLeftIcon />
        На главную
      </Link>
      <h1 className="text-4xl leading-tight">Крестики нолики</h1>
      <div className="flex items-center gap-3 text-xs text-slate-400">
        <StarIcon />
        <div className="flex items-center gap-1">
          <UserIcon />
          <p>{playersCount}</p>
        </div>
        <div className="flex items-center gap-1">
          <HistoryIcon />
          <p>1 мин на ход</p>
        </div>
      </div>
    </div>
  );
}
