import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

export function UiSuperSelect({ options }) {
  const [selected, setSelected] = useState(options[1]);
  
  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className={clsx(
            "relative block w-full rounded-lg py-1.5 pl-1 text-left  text-gray-500",
            "shadow-sm border border-slate-200 bg-white",
            "first-line:focus:border-teal-600 focus:ring focus:ring-teal-600/20",
          )}
        >
          {selected}
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-slate-500"
            aria-hidden="true"
          />
        </ListboxButton>

        <ListboxOptions
          anchor="bottom"
          className="w-[var(--button-width)] rounded-xl border border-slate-200 bg-white p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none"
        >
          {options.map((item) => (
            <ListboxOption
              key={item}
              value={item}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-slate-100 "
            >
              <CheckIcon className="invisible size-4 fill-teal-600 group-data-[selected]:visible" />
              <div className="text-gray-500">{item}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
