import { Select } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

export function UiSelect({ options }) {
  return (
    <div className="relative">
      <Select
        className={clsx([
          `block w-full shadow-sm
          border border-slate-200
          mt-1 px-1 py-2 appearance-none rounded-lg
          text-gray-500 leading-tight
          marker:disabled:bg-gray-50 disabled:text-gray-500
          focus:outline-none first-line:focus:border-teal-600 focus:ring focus:ring-teal-600/20`,
        ])}
      >
        {options?.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </Select>
      <ChevronDownIcon
        className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-slate-500"
        aria-hidden="true"
      />
    </div>
  );
}
