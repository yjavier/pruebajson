import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFixed, toggleMenu } from './reducers'; // Asegúrate de importar las acciones
import './Header.css';

const Header = () => {
    const dispatch = useDispatch();
    const isFixed = useSelector((state) => state.header.isFixed);
    const isOpen = useSelector((state) => state.header.isOpen);

    const handleScroll = () => {
        dispatch(setFixed(window.scrollY > 1));
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [dispatch]);

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return (
        <header className={`header ${isFixed ? 'fixed' : ''}`}>
            <div className='menu-container'>
                <div className="logo">Logo</div>
                <div className={`menu ${isOpen ? 'open' : ''}`}>
                    <div className="menu-option">Opción 1</div>
                    <div className="menu-option">Opción 2</div>
                    <div className="menu-option">Opción 3</div>
                    <span className='span-menu' fxflex="" ></span>
                    <div className="menu-option">Opción 4</div>
                </div>
                <div className="hamburger" onClick={toggleMenuHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
