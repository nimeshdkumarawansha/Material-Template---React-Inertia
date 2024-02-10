import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center pt-6 pt-sm-0 bg-gray-100">
            <div>
                <Link href="/" className="navbar-brand">
                    <img src="https://via.placeholder.com/150" alt="Logo" className='block h-9 w-auto fill-current text-gray-800' />
                </Link>
            </div>

            <div className="container mt-6 px-4">
                <div className="w-100 bg-white shadow-md rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}
