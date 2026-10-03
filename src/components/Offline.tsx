import './Offline.css';
import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const OFFLINE_CONTENT = {
    heading: 'Очный приём',
    headingAccent: 'в клинике',
    subheading: 'Амбулаторный приём детей и взрослых с применением современных ЛОР-методик',
    services: [
        { icon: '🔭', text: 'Эндоскопия ЛОР-органов' },
        { icon: '👂', text: 'Удаление серных пробок' },
        { icon: '💊', text: 'Промывание лакун миндалин (Тонзиллор)' },
        { icon: '📊', text: 'Аудиометрия и тимпанометрия' },
        { icon: '🌀', text: 'Пункции, манёвры при ДППГ' },
        { icon: '🚑', text: 'Экстренная и плановая ЛОР-помощь' },
    ],
    coast: '3 500 ₽',
    priceSubText: 'без доп. исследований и манипуляций',
    addressLabel: 'Адрес клиники',
    addressMetro: 'м. Тёплый Стан',
    addressStreet: 'ул. Профсоюзная, 127Б',
    offlineButton: 'Записаться на очный приём',
};

export default function Offline() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { ref, inView } = useInView<HTMLElement>({ threshold: 0.1 });

    return (
        <section className={`offline-section reveal${inView ? ' is-visible' : ''}`} id="offline" ref={ref}>
            <div className="offline-grid">

                <div className="offline-left">
                    <p className="offline-tag">· ОЧНЫЙ ПРИЁМ ·</p>
                    <h2 className="offline-heading">
                        {OFFLINE_CONTENT.heading}<br/>
                        <span className="offline-heading__accent">{OFFLINE_CONTENT.headingAccent}</span>
                    </h2>
                    <p className="offline-subheading">{OFFLINE_CONTENT.subheading}</p>

                    <ul className="offline-services">
                        {OFFLINE_CONTENT.services.map((s, i) => (
                            <li
                                key={i}
                                className={`offline-service-item${hoveredIndex === i ? ' is-hovered' : ''}${hoveredIndex !== null && hoveredIndex !== i ? ' is-dimmed' : ''}`}
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{ transitionDelay: inView ? `${i * 0.06}s` : '0s' }}
                            >
                                <span className="offline-service-icon">{s.icon}</span>
                                <span className="offline-service-text">{s.text}</span>
                                <span className="offline-service-arrow">→</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="offline-right">
                    <div className="offline-price-block">
                        <div className="offline-price-inner">
                            <p className="offline-price-label">Стоимость приёма</p>
                            <p className="offline-price-value">{OFFLINE_CONTENT.coast}</p>
                            <p className="offline-price-sub">{OFFLINE_CONTENT.priceSubText}</p>
                        </div>
                        <div className="offline-price-glow" aria-hidden="true"/>
                    </div>

                    <div className="offline-address-card">
                        <div className="offline-address-card__front">
                            <div className="offline-address-pin">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            </div>
                            <p className="offline-address-label-text">{OFFLINE_CONTENT.addressLabel}</p>
                            <p className="offline-address-metro">
                                <span className="metro-dot"/>
                                {OFFLINE_CONTENT.addressMetro}
                            </p>
                            <p className="offline-address-street">{OFFLINE_CONTENT.addressStreet}</p>
                        </div>
                    </div>

                    <a
                        href="https://www.fdoctor.ru/vrach-kamynina-anastasiya-viktorovna/?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="offline-btn"
                    >
                        {OFFLINE_CONTENT.offlineButton}
                        <span className="offline-btn__arrow">→</span>
                    </a>
                </div>

            </div>
        </section>
    );
}
