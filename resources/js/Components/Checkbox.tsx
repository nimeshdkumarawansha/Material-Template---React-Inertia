import { InputHTMLAttributes } from 'react';

export default function Checkbox({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="form-check">
            <input
                {...props}
                type="checkbox"
                className={
                    'form-check-input ' +
                    'rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 ' +
                    className
                }
            />
        </div>
    );
}
