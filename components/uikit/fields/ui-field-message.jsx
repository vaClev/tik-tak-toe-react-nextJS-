import clsx from "clsx";
/**
 * @param {{
 * helperText?: string,
 * errorText?: string,
 * }} props
 */
export function UiFieldMessage({ helperText, errorText }) {
  if (!helperText && !errorText) return null;
  return (
    <p
      className={clsx(
        "mt-1 text-sm",
        errorText ? "text-orange-600" : "text-slate-400",
      )}
    >
      {errorText ?? helperText} {/* errorText ? errorText : helperText */}
    </p>
  );
}
