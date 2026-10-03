import './Online.css';
import { useInView } from '../hooks/useInView';
import { useRef } from 'react';

const ONLINE_CONTENT = {
    heading: 'Онлайн-консультация',
    headingAccent: 'ЛОР-врача',
    subheading: 'Информационная консультация для тех, кто хочет разобрать анализы, получить второе мнение или понять диагноз простым языком.',
    items: [
        { icon: '💬', text: 'Обсуждение возможных причин симптомов' },
        { icon: '🔬', text: 'Разбор предоставленных обследований' },
        { icon: '🗺️', text: 'Рекомендации по дальнейшим очным шагам' },
        { icon: '⚕️', text: 'Подчёркивание необходимости очной консультации' },
    ],
    importantHeading: 'Важно',
    importantSubheading: 'Консультация не является медицинской услугой, не заменяет очный приём врача, не включает диагностику и лечение.',
    docsHeading: 'Обязательно ознакомьтесь с документами',
    docsText: 'Перед записью ознакомьтесь с размещёнными на сайте документами: согласие на обработку персональных данных, политика конфиденциальности и оферта.',
    price: 'Стоимость',
    coast: '3 000 ₽',
    time: '30–60 минут',
    button: 'Записаться в Telegram',
};

export default function Online() {
    const { ref, inView } = useInView<HTMLElement>({ threshold: 0.1 });
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(10px)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)';
    };

    return (
        <section className={`online-section reveal${inView ? ' is-visible' : ''}`} id="online" ref={ref}>
            <div
                className="online-card"
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div className="online-orb online-orb--1" aria-hidden="true"/>
                <div className="online-orb online-orb--2" aria-hidden="true"/>
                <div className="online-orb online-orb--3" aria-hidden="true"/>

                <div className="online-body">
                    <div className="online-left">
                        <p className="online-tag">· ОНЛАЙН ·</p>
                        <h2 className="online-heading">
                            {ONLINE_CONTENT.heading}<br/>
                            <span className="online-heading__accent">{ONLINE_CONTENT.headingAccent}</span>
                        </h2>
                        <p className="online-subheading">{ONLINE_CONTENT.subheading}</p>

                        <ul className="online-items">
                            {ONLINE_CONTENT.items.map((item, i) => (
                                <li key={i} className="online-item">
                                    <span className="online-item__icon">{item.icon}</span>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="online-important">
                            <span className="online-important__label">⚠ {ONLINE_CONTENT.importantHeading}</span>
                            <p>{ONLINE_CONTENT.importantSubheading}</p>
                        </div>
                    </div>

                    <div className="online-right">
                        <div className="online-price-card">
                            <p className="online-price-label">{ONLINE_CONTENT.price}</p>
                            <p className="online-price-value">{ONLINE_CONTENT.coast}</p>
                            <p className="online-price-time">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                {ONLINE_CONTENT.time}
                            </p>
                            <a
                                href="https://t.me/gingerdumb"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="online-btn"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.018 9.51c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.881.71z"/></svg>
                                {ONLINE_CONTENT.button}
                            </a>
                        </div>

                        <div className="online-docs">
                            <span className="online-docs__icon">📄</span>
                            <p><strong>{ONLINE_CONTENT.docsHeading}:</strong> {ONLINE_CONTENT.docsText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
