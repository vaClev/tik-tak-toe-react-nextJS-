/**
 * @param {{
 * label?: string,
 * required: boolean,
 * helperText?: string,
 * errorText?: string,
 * className: string,
 * } & import ('react').HTMLAttributes<HTMLInputElement>} props
 */

import { UiFieldInput } from "./ui-field-input";
import { UiFieldLabel } from "./ui-field-label";
import { UiFieldMessage } from "./ui-field-message";

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
      <UiFieldLabel label={label} required={required} />
      <UiFieldInput errorText={errorText} {...inputProps} />
      <UiFieldMessage errorText={errorText} helperText={helperText} />
    </div>
  );
}
