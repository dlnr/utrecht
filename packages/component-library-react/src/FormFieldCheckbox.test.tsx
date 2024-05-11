import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { FormFieldCheckbox } from './FormFieldCheckbox';
import '@testing-library/jest-dom';

describe('Form field with a checkbox', () => {
  const defaultProps = {
    name: 'check',
    label: 'I agree',
  };

  it('renders an HTML div element', () => {
    const { container } = render(<FormFieldCheckbox {...defaultProps} />);

    const field = container.querySelector('div');

    expect(field).toBeInTheDocument();
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<FormFieldCheckbox {...defaultProps} />);

    const field = container.querySelector('div');

    expect(field).toHaveClass('utrecht-form-field');
  });

  it('displays as CSS block element (or equivalent)', () => {
    const { container } = render(<FormFieldCheckbox {...defaultProps} />);

    const field = container.querySelector('div');

    expect(field).toBeVisible();
    expect(field).not.toHaveStyle({ display: 'inline' });
    expect(field).not.toHaveStyle({ display: 'inline-block' });
  });

  it('renders rich text content', () => {
    const { container } = render(
      <FormFieldCheckbox {...defaultProps}>
        <hr />
      </FormFieldCheckbox>,
    );

    const richText = container.querySelector('hr');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<FormFieldCheckbox {...defaultProps} hidden />);

    const field = container.querySelector('div');

    expect(field).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<FormFieldCheckbox {...defaultProps} className="invalid" />);

    const field = container.querySelector('div');

    expect(field).toHaveClass('invalid');
  });

  it('can have a additional class name', () => {
    const { container } = render(<FormFieldCheckbox {...defaultProps} className="large" />);

    const field = container.querySelector(':only-child');

    expect(field).toHaveClass('large');
    expect(field).toHaveClass('utrecht-form-field');
  });

  describe('label', () => {
    it('renders a design system BEM class name', () => {
      const { container } = render(<FormFieldCheckbox {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__label');

      expect(field).toBeInTheDocument();
    });

    it('renders rich text content', () => {
      const { container } = render(
        <FormFieldCheckbox
          {...defaultProps}
          label={
            <>
              I can speak the <i lang="la">lingua franca</i>
            </>
          }
        />,
      );

      const richText = container.querySelector('i');

      expect(richText).toBeInTheDocument();
    });

    it('is associated with the checkbox', () => {
      render(<FormFieldCheckbox {...defaultProps} />);

      const checkbox = screen.getByRole('checkbox', { name: 'I agree' });

      expect(checkbox).toBeInTheDocument();
    });

    it('can be clicked to toggle the checkbox', () => {
      const labelRef = createRef<HTMLSpanElement>();

      render(<FormFieldCheckbox {...defaultProps} label={<span ref={labelRef}>I agree</span>} />);

      const checkbox = screen.getByRole('checkbox', { name: 'I agree' });

      expect(checkbox).not.toBeChecked();

      labelRef.current?.click();

      expect(checkbox).toBeChecked();

      labelRef.current?.click();

      expect(checkbox).not.toBeChecked();
    });
  });

  describe('description', () => {
    it('is not rendered by default', () => {
      const { container } = render(<FormFieldCheckbox {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__description');

      expect(field).not.toBeInTheDocument();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(
        <FormFieldCheckbox
          {...defaultProps}
          description="Lingua franca is a common language between groups of people."
        />,
      );

      const field = container.querySelector('.utrecht-form-field__description');

      expect(field).toBeInTheDocument();
    });

    it('renders rich text content', () => {
      const { container } = render(
        <FormFieldCheckbox
          {...defaultProps}
          description={
            <p>
              You are <strong>not</strong> required to agree.
            </p>
          }
        />,
      );

      const richText = container.querySelector('strong');

      expect(richText).toBeInTheDocument();
    });

    it('is associated with the checkbox', () => {
      const description = 'Lingua franca is a common language between groups of people.';

      render(<FormFieldCheckbox {...defaultProps} description={description} />);

      const checkbox = screen.getByRole('checkbox', { description });

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('error message', () => {
    it('is not rendered by default', () => {
      const { container } = render(<FormFieldCheckbox {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__error-message');

      expect(field).not.toBeInTheDocument();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(
        <FormFieldCheckbox {...defaultProps} invalid errorMessage="Check this required field to continue." />,
      );

      const field = container.querySelector('.utrecht-form-field__error-message');

      expect(field).toBeInTheDocument();
    });

    it('renders rich text content', () => {
      const { container } = render(
        <FormFieldCheckbox
          {...defaultProps}
          invalid
          errorMessage={
            <p>
              You <strong>required</strong> to agree.
            </p>
          }
        />,
      );

      const richText = container.querySelector('strong');

      expect(richText).toBeInTheDocument();
    });

    it('is associated with the checkbox', () => {
      const errorMessage = 'Check this required field to continue.';

      render(<FormFieldCheckbox {...defaultProps} invalid errorMessage={errorMessage} />);

      const checkbox = screen.getByRole('checkbox', { description: errorMessage });

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('input', () => {
    it('renders a checkbox role element', () => {
      render(<FormFieldCheckbox {...defaultProps} />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(<FormFieldCheckbox {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__input');

      expect(field).toBeInTheDocument();
    });

    it('renders an HTML input type=checkbox element', () => {
      const { container } = render(<FormFieldCheckbox />);

      const checkbox = container.querySelector('input[type="checkbox"]');

      expect(checkbox).toBeInTheDocument();
    });

    it.skip('can render a switch role element', () => {
      render(<FormFieldCheckbox {...defaultProps} switch={true} />);

      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).toBeInTheDocument();
    });

    it.skip('can render a HTML switch input', () => {
      const { container } = render(<FormFieldCheckbox {...defaultProps} switch />);

      const checkbox = container.querySelector('input[type="checkbox"][switch]');

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('status', () => {
    it('is not rendered by default', () => {
      const { container } = render(<FormFieldCheckbox {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__status');

      expect(field).not.toBeInTheDocument();
    });

    it('renders a design system BEM class name', () => {
      const { container } = render(<FormFieldCheckbox {...defaultProps} status="Saving..." />);

      const field = container.querySelector('.utrecht-form-field__status');

      expect(field).toBeInTheDocument();
    });

    it('renders rich text content', () => {
      const { container } = render(
        <FormFieldCheckbox
          {...defaultProps}
          status={
            <p>
              Saving <strong>failed</strong>. Please try again at a later time.
            </p>
          }
        />,
      );

      const richText = container.querySelector('strong');

      expect(richText).toBeInTheDocument();
    });
  });

  describe('change event', () => {
    it('can trigger a change event', () => {
      const handleChange = jest.fn();

      render(<FormFieldCheckbox {...defaultProps} onChange={handleChange} />);

      const checkbox = screen.getByRole('checkbox');

      checkbox?.click();

      expect(handleChange).toHaveBeenCalled();
    });

    it('does not trigger a change event when disabled', () => {
      const handleChange = jest.fn();

      render(<FormFieldCheckbox {...defaultProps} disabled onChange={handleChange} />);

      const checkbox = screen.getByRole('checkbox');

      checkbox?.click();

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('input event', () => {
    it('can trigger a input event', () => {
      const handleInput = jest.fn();

      render(<FormFieldCheckbox {...defaultProps} onInput={handleInput} />);

      const checkbox = screen.getByRole('checkbox');

      checkbox?.click();

      expect(handleInput).toHaveBeenCalled();
    });

    it('does not trigger a input event when disabled', () => {
      const handleInput = jest.fn();

      render(<FormFieldCheckbox {...defaultProps} disabled onInput={handleInput} />);

      const checkbox = screen.getByRole('checkbox');

      checkbox?.click();

      expect(handleInput).not.toHaveBeenCalled();
    });
  });

  //   it('supports ForwardRef in React', () => {
  //     const ref = createRef<HTMLDivElement>();

  //     const { container } = render(<FormFieldCheckbox {...defaultProps} ref={ref} />);

  //     const div = container.querySelector('div');

  //     expect(ref.current).toBe(div);
  //   });

  it('supports ForwardRef for the form control in React', () => {
    const inputRef = createRef<HTMLInputElement>();

    const { container } = render(<FormFieldCheckbox {...defaultProps} ref={inputRef} />);

    const div = container.querySelector('input');

    expect(inputRef.current).toBe(div);
  });
});
