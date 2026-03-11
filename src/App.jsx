import { Suspense, lazy } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Code-split all pages: only load the chunk for the current route
const Home = lazy(() => import('./pages/Home.jsx'));
const Gallery = lazy(() => import('./pages/Gallery.jsx'));
const Builder = lazy(() => import('./pages/Builder.jsx'));
const Admin = lazy(() => import('./pages/Admin.jsx'));

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__inner">
                <NavLink to="/" className="navbar__brand">💕 RomanceSpace</NavLink>
                <div className="navbar__links">
                    <NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''}>
                        模板库
                    </NavLink>
                    <NavLink to="/builder" className={({ isActive }) => isActive ? 'active' : ''}>
                        创建页面
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

// Full-screen spinner shown while a lazy chunk is loading
function PageLoader() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
            <div className="spinner" />
        </div>
    );
}

export default function App() {
    return (
        <>
            {/* Global toast notification container — used by react-hot-toast */}
            <Toaster
                position="top-center"
                toastOptions={{
                    duration: 4000,
                    style: {
                        borderRadius: '12px',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                    },
                    success: {
                        iconTheme: { primary: '#d6336c', secondary: '#fff' },
                    },
                }}
            />
            <Navbar />
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/builder" element={<Builder />} />
                    <Route path="/builder/:templateName" element={<Builder />} />
                    <Route path="/admin/upload" element={<Admin />} />
                </Routes>
            </Suspense>
        </>
    );
}
