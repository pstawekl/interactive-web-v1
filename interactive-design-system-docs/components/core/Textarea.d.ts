import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
  rows?: number;
}

/** Multi-line text field matching Input; used in the contact form. */
export function Textarea(props: TextareaProps): JSX.Element;
