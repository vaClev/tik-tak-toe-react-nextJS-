import Link from "next/link";
import { ArrowLeftIcon } from "./icons";

export function BackLink() {
  //console.log("backlink rendered");
  return (
    <Link
      href="#"
      className="flex items-center gap-2 text-xs text-teal-600 -mb-0.5"
    >
      <ArrowLeftIcon />
      На главную
    </Link>
  );
}
