import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

const Home: React.FC = () => {
    const { props } = usePage();

    return (
        <AppLayout title='Home'>
            <div className="container-fluid p-4">
                <div id="scrollTarget"></div>

                <h2 className="display-6 mb-0">Dashboards</h2>
                <p className="small text-muted">Test</p>
                <hr className="mb-5 mt-0" />

            </div>
        </AppLayout>
    );
};

export default Home;