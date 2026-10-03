import './Header.css';
import { useState } from 'react';

const NAV_ITEMS = [
    { href: '#about',    label: 'О враче'  },
    { href: '#services', label: 'Услуги'   },
    { href: '#online',   label: 'Онлайн'   },
    { href: '#offline',  label: 'Приём'    },
    { href: '#response', label: 'Отзывы'   },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header>
            <a href="/" className="logotype">
                <img src="/images/ear-svgrepo-com.svg" alt="" className="logo-icon" width="28" height="28"/>
                <span>Твой-ЛОР Врач</span>
            </a>

            <nav className={`nav-wrapper${isMenuOpen ? ' nav-wrapper--open' : ''}`} aria-label="Основная навигация">
                <ul className="nav">
                    {NAV_ITEMS.map(({ href, label }) => (
                        <li key={href} className="nav-item">
                            <a href={href} onClick={closeMenu}>{label}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            <button
                className={`burger ${isMenuOpen ? 'burger--open' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
                aria-expanded={isMenuOpen}
            >
                {isMenuOpen ? '✕' : '≡'}
            </button>
        </header>
    );
}
