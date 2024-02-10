import { HTMLAttributes } from 'react';

export default function InputError({ message, className = '', ...props }: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
    return message ? (
        <div {...props} className={'invalid-feedback ' + className}>
            {message}
        </div>
    ) : null;
}
