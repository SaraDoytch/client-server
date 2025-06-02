// import React from 'react'

// const AppLayout = () => {
//   return (
//     <div>AppLayout</div>
//   )
// }

// export default AppLayout


import { Outlet } from 'react-router';
import { useEffect, useState } from 'react';
import UserLayout from './UserLayout';
import Nav from './Nav';
import HomePageNav from './HomePageNav';
import Footer from './Footer'; 

const AppLayout = () => {
  const [baseNav, setBaseNav] = useState<boolean>(true);

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      setBaseNav(false);
    }
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <UserLayout />
      {/* {baseNav ? <HomePageNav /> : <Nav />} */}
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
