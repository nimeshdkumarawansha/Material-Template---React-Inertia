import React, { ReactNode, useState } from 'react';
import { Head, usePage } from '@inertiajs/react';
import NavBar from '@/Components/Basic/NavBar';
import Footer from '@/Components/Basic/Footer';
import Sidebar from '@/Components/Basic/SideBar';
import Preloader from '@/Components/Main/Preloader';

const AppLayout: React.FC<{ children: ReactNode; title?: string }> = ({ children, title }) => {
  // const { url } = usePage();

  const [preloaderVisible, setPreloaderVisible] = useState(false);

  const startPreloader = () => {
    setPreloaderVisible(true);
  };

  const stopPreloader = () => {
    setPreloaderVisible(false);
  };

  useState(() => {
    startPreloader();
    setTimeout(() => {
      stopPreloader();
    }, 1000);
  }
  );

  return (
    <div>
      <Head title={title || 'React Title'} />

      <div className='nav-fixed bg-light'>



        <div id="layoutDrawer">

          <NavBar />

          <Sidebar />

          <div id="layoutDrawer_content">

            <main>

              {children}

            </main>

            <Footer />

          </div>

        </div>

      </div>

      <Preloader loading={preloaderVisible} onStart={startPreloader} onStop={stopPreloader} />

    </div>
  );
};

// Export the main component
export default AppLayout;
