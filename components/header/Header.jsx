import logoSrc1 from "./logoX.svg";
import logoSrc2 from "./logoO.svg";
import Image from "next/image";
import { Profile } from "../game/profile";
import { ArrowDownIcon } from "./arrow-down-icon";
import { UiButton } from "../uikit/ui-button";

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc1} alt="logo" />
      <Image src={logoSrc2} alt="logo" />
      <p className="text-3xl">nline</p>
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <UiButton className="w-44" variant="primary" size="lg">
        Играть
      </UiButton>
      <button className="ml-auto flex items-center gap-2 text-start text-teal-600">
        <Profile name="Oleg Vasilev" rating="1502" />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
