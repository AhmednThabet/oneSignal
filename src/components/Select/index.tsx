import { useMemo } from "react";
import type { SelectType } from "components/types";

export const Select: SelectType = ({
  label,
  id,
  helperText,
  className,
  selectClassName,
  selectSize = "medium",
  options,
  placeholder,
  error = false,
  withoutHelperText = false,
  ...rest
}) => {
  const classNames = useMemo(() => {
    const classes = {
      selectContainer: `mb-2 relative text-gray-dark ${className ?? ""}`,
      label: "block mb-2",
      select: `block w-full px-4 border-gray focus:ring-0 focus:border-blue rounded-md ${
        selectClassName || ""
      }`,
      helperText: "inline-flex min-h-[20px] text-sm mt-1",
      placeholder: "text-gray-400",
    };

    if (selectSize === "large") {
      classes.select += " py-4";
      classes.selectContainer += " text-lg";
    } else if (selectSize === "small") {
      classes.select += " py-2";
      classes.selectContainer += " text-base";
    } else {
      classes.select += " py-3";
      classes.selectContainer += " text-base";
    }

    return classes;
  }, [className, selectClassName, selectSize]);

  return (
    <div className={classNames.selectContainer}>
      {label && (
        <label htmlFor={id} className={classNames.label}>
          {label}
        </label>
      )}
      <select id={id} className={classNames.select} {...rest}>
        {placeholder && (
          <option className={classNames.placeholder} value="">
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {!withoutHelperText && (
        <p className={classNames.helperText}>{helperText}</p>
      )}
    </div>
  );
};

export default Select;
