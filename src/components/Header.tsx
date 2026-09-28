import './Header.css';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const NAV_ITEMS = [
    { href: '#about',    label: 'О враче'  },
    { href: '#services', label: 'Услуги'   },
    { href: '#online',   label: 'Онлайн'   },
    { href: '#offline',  label: 'Приём'    },
    { href: '#response', label: 'Отзывы'   },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header>
            <h1 className="logotype">Твой-ЛОР Врач</h1>

            <nav className="nav-wrapper" aria-label="Основная навигация">
                <ul className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
                    {NAV_ITEMS.map(({ href, label }) => (
                        <li key={href} className="nav-item">
                            <a href={href} onClick={closeMenu}>{label}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="header-controls">
                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label={theme === 'light' ? 'Включить тёмную тему' : 'Включить светлую тему'}
                >
                    {theme === 'light' ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                        </svg>
                    ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5"/>
                            <line x1="12" y1="1" x2="12" y2="3"/>
                            <line x1="12" y1="21" x2="12" y2="23"/>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                            <line x1="1" y1="12" x2="3" y2="12"/>
                            <line x1="21" y1="12" x2="23" y2="12"/>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                        </svg>
                    )}
                </button>

                <button
                    className={`burger ${isMenuOpen ? 'burger--open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
                    aria-expanded={isMenuOpen}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </header>
    );
}
