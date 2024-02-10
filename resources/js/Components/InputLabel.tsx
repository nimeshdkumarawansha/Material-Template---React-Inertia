import { LabelHTMLAttributes } from 'react';

export default function InputLabel({ value, className = '', children, ...props }: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) {
    return (
        <label {...props} className={`form-label font-medium text-sm text-gray-700 ` + className}>
            {value ? value : children}
        </label>
    );
}
