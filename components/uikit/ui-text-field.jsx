/**
 * @param {{
 * label?: string,
 * required: boolean,
 * helperText?: string,
 * errorText?: string,
 * className: string,
 * } & import ('react').HTMLAttributes<HTMLInputElement>} props
 */

import clsx from "clsx";

export function UiTextField({
  className,
  label,
  required,
  helperText,
  errorText,
  ...inputProps
}) {
  return (
    <div className={className}>
      <div>
        {!!label && (
          <label
            for="example2"
            className={clsx(
              required && "after:text-orange-600 after:content-['*']",
              "mb-1 block text-sm font-medium text-slate-900 after:ml-0.5",
            )}
          >
            {label}
          </label>
        )}

        <input
          type="email"
          id="example2"
          className={clsx([
            `
            block w-full rounded-md  shadow-sm
            px-1 py-2 leading-tight outline-0 border
            focus:ring-opacity-50 disabled:cursor-not-allowed marker:disabled:bg-gray-50 disabled:text-gray-500
            `,
            errorText
              ? `first-line:focus:border-orange-600 focus:ring focus:ring-orange-600/20 border-orange-600`
              : `first-line:focus:border-teal-600 focus:ring focus:ring-teal-600/20 border-slate-200`,
          ])}
          {...inputProps}
        />
        {(helperText || errorText) && (
          <p
            className={clsx(
              "mt-1 text-sm",
              errorText ? "text-orange-600" : "text-slate-400",
            )}
          >
            {errorText ?? helperText} {/* errorText ? errorText : helperText */}
          </p>
        )}
      </div>
    </div>
  );
}
