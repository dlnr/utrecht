import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode, useId } from 'react';
import { Checkbox } from './Checkbox';
import type { FormFieldProps } from './FormField';
import { FormField } from './FormField';
import { FormFieldDescription } from './FormFieldDescription';
import { FormFieldErrorMessage } from './FormFieldErrorMessage';
import { FormLabel } from './FormLabel';

export interface FormFieldCheckboxProps extends FormFieldProps {
  // Making `name` required seems like a good nudge towards a working radio button group
  name: string;
  invalid?: boolean;
  disabled?: boolean;
  label: ReactNode;
  errorMessage?: ReactNode;
  description?: ReactNode;
  status?: ReactNode;
  required?: boolean;
  value?: string | number;
  defaultValue?: string;
}

export const FormFieldCheckbox = forwardRef(
  (
    {
      name,
      invalid,
      disabled,
      label,
      errorMessage,
      description,
      status,
      required,
      value,
      onChange,
      onInput,
      onFocus,
      onBlur,
      defaultValue,
      children,
      ...props
    }: PropsWithChildren<FormFieldCheckboxProps>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const inputId = useId();
    const descriptionId = useId();
    const statusId = useId();
    const errorMessageId = useId();

    return (
      <FormField invalid={invalid} {...props}>
        <FormLabel className="utrecht-form-field__label" htmlFor={inputId}>
          {label}
        </FormLabel>
        {description && (
          <FormFieldDescription className="utrecht-form-field__description" id={descriptionId}>
            {description}
          </FormFieldDescription>
        )}
        {invalid && errorMessage && (
          <FormFieldErrorMessage className="utrecht-form-field__error-message" id={errorMessageId}>
            {errorMessage}
          </FormFieldErrorMessage>
        )}
        <Checkbox
          ref={ref}
          id={inputId}
          name={name}
          className="utrecht-form-field__input"
          aria-describedby={
            clsx({
              [descriptionId]: description,
              [errorMessageId]: invalid,
              [statusId]: status,
            }) || undefined
          }
          invalid={invalid}
          disabled={disabled}
          aria-required={required}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          onInput={onInput}
          onChange={onChange}
          defaultValue={defaultValue}
        />
        {status && (
          <div className="utrecht-form-field__status" id={statusId}>
            {status}
          </div>
        )}
        {children}
      </FormField>
    );
  },
);

FormFieldCheckbox.displayName = 'FormFieldCheckbox';
