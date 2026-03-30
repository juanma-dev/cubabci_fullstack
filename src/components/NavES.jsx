import Link from 'next/link';
import React, { useState } from 'react';
import { getRoute, getRouteEN } from '@/components/utils';

function NavES({parent}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    // Determine which nav item is active
    // For individual articles (parent is a number), treat as 'Articles'
    const activePage = !isNaN(parent) ? 'Articles' : parent;

    return (
        <>
            {isSidebarOpen && (
                <div className="sidebar">
                    <a onClick={closeSidebar} href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1a1a2e"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></a>
                    <Link onClick={closeSidebar} href="/" className={activePage === 'Home' ? 'nav-active' : ''}>Inicio</Link>
                    <Link onClick={closeSidebar} href="/diplomatics" className={activePage === 'Diplomatics' ? 'nav-active' : ''}>Síndrome de La Habana</Link>
                    <Link onClick={closeSidebar} href="/articles" className={activePage === 'Articles' ? 'nav-active' : ''}>Artículos</Link>
                    <Link onClick={closeSidebar} href="/polls" className={activePage === 'Polls' ? 'nav-active' : ''}>Encuestas</Link>
                </div >
            )}
            <div className="topnav es">
                <a onClick={openSidebar} className="menu-button" href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1a1a2e"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></a>
                <Link className={`hideOnMobile ${activePage === 'Home' ? 'nav-active' : ''}`} href="/">Inicio</Link>
                <Link className={`hideOnMobile ${activePage === 'Diplomatics' ? 'nav-active' : ''}`} href="/diplomatics">Síndrome de La Habana</Link>
                <Link className={`hideOnMobile ${activePage === 'Articles' ? 'nav-active' : ''}`} href="/articles">Artículos</Link>
                <Link className={`hideOnMobile ${activePage === 'Polls' ? 'nav-active' : ''}`} href="/polls">Encuestas</Link>
                <div className="lang-switcher" style={{ marginLeft: 'auto' }}>
                    <button className="lang-current" onClick={() => setIsLangOpen(!isLangOpen)}>
                        ES
                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className={`lang-arrow ${isLangOpen ? 'lang-arrow-open' : ''}`}>
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
                        </svg>
                    </button>
                    {isLangOpen && (
                        <div className="lang-dropdown">
                            <Link href={getRouteEN(parent)} onClick={() => setIsLangOpen(false)}>EN</Link>
                        </div>
                    )}
                </div>
            </div >
        </>
    );
}

export default NavES;