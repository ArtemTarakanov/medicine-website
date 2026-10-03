import './Hero.css';

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-inner">
                <div className="hero-content hero-content--animate">
                    <p className="hero-subtitle">· ВРАЧ-ОТОРИНОЛАРИНГОЛОГ ·</p>

                    <h1 className="hero-title">
                        <span className="hero-title__white">Камынина</span>
                        <span className="hero-title__blue">Анастасия</span>
                        <span className="hero-title__blue">Викторовна</span>
                    </h1>

                    <p className="hero-description">
                        Детский и взрослый приём. Онлайн-консультации и очный приём.
                        Помогаю разобраться в ЛОР-проблемах спокойно и понятно.
                    </p>

                    <div className="hero-badges">
                        <div className="hero-badge">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                            </svg>
                            <span className="hero-badge__value">3+ лет</span>
                            <span className="hero-badge__label">опыта</span>
                        </div>
                        <div className="hero-badge">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                            </svg>
                            <span className="hero-badge__value">2500+</span>
                            <span className="hero-badge__label">пациентов</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual hero-visual--animate">
                    <img src="/images/doctor.jpg" alt="Камынина Анастасия Викторовна" className="hero-photo"/>

                    <div className="hero-arc hero-arc--1"/>
                    <div className="hero-arc hero-arc--2"/>
                    <div className="hero-dot"/>
                </div>
            </div>

            <div className="hero-wave">
                <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#F8FAFF"/>
                </svg>
            </div>
        </div>
    );
}
