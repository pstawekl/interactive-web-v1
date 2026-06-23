import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Show danger border. */
  invalid?: boolean;
}

/** Single-line text field with brand focus ring. */
export function Input(props: InputProps): JSX.Element;
