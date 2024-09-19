import Link from 'next/link';
import React, { useState } from 'react';
import { getRoute, getRouteEN } from '@/components/utils';

function NavEN({parent}) {
    // Step 1: Create a state to manage sidebar visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Step 2: Function to open the sidebar
    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    // Step 3: Function to close the sidebar
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            {isSidebarOpen && (<div className="sidebar">
                <a onClick={closeSidebar} href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f2f2f2"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></a>
                <Link onClick={closeSidebar} href="/en">Home</Link>
                <Link onClick={closeSidebar} href="/en/diplomatics">Havana syndrome</Link>
                <Link onClick={closeSidebar} href="/en/articles">Articles</Link>
            </div >
            )}
            <div className="topnav es">
                <a onClick={openSidebar} className="menu-button" href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f2f2f2"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></a>
                <Link className="hideOnMobile" href="/en">Home</Link>
                <Link className="hideOnMobile" href="/en/diplomatics">Havana syndrome</Link>
                <Link className="hideOnMobile" href="/en/articles">Articles</Link>
                <Link style={{ float: 'right' }} href={getRoute(parent)}>ES</Link>
                <Link style={{ float: 'right' }} href={getRouteEN(parent)}>EN</Link>
            </div >
        </>
    );
}

export default NavEN;