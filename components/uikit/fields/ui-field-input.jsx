import clsx from "clsx";

/**
 * @param {{
 * errorText?: string,
 * } & import ('react').HTMLAttributes<HTMLInputElement>} props
 */
export function UiFieldInput({ errorText, ...inputProps }) {
  return (
    <>
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
    </>
  );
}
