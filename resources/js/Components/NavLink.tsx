import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'nav-link px-1 py-1 text-sm font-medium transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-bottom border-indigo-400 text-gray-900 '
                    : 'text-gray-500 hover:text-gray-700 focus:text-gray-700 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
