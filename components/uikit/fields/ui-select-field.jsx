/**
 * @param {{
 * label?: string,
 * required: boolean,
 * options: object,
 * helperText?: string,
 * errorText?: string,
 * className: string,
 *
 * }} props
 */

import { UiFieldLabel } from "./ui-field-label";
import { UiFieldMessage } from "./ui-field-message";
import { UiSelect } from "./ui-select";
import { UiSuperSelect } from "./ui-superSelectHEADLESS";

export function UiSelectField({
  className,
  label,
  required,
  helperText,
  errorText,
  options,
}) {
  return (
    <div className={className}>
      <UiFieldLabel label={label} required={required} />
      <UiSuperSelect options={options} />
      <UiFieldMessage errorText={errorText} helperText={helperText} />
    </div>
  );
}
