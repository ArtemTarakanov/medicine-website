import './Offline.css';
import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const OFFLINE_CONTENT = {
    heading: "Очный приём в клинике",
    subheading: "Амбулаторный приём детей и взрослых с применением современных ЛОР-методик",
    services: [
        "Эндоскопия ЛОР-органов",
        "Удаление серных пробок",
        "Промывание лакун миндалин (Тонзиллор)",
        "Аудиометрия и тимпанометрия",
        "Пункции, манёвры при ДППГ",
        "Экстренная и плановая ЛОР-помощь"
    ],
    priceText: 'Стоимость',
    coast: '3 500 ₽',
    priceSubText: "(без дополнительных исследований и манипуляций)",
    addressLabel: "Адрес клиники",
    addressMetro: "м. Тёплый Стан",
    addressStreet: "ул. Профсоюзная, 127Б",
    offlineButton: "Записаться на очный приём"
};

export default function Offline() {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const { ref, inView } = useInView<HTMLElement>({ threshold: 0.1 });

    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
    };

    return (
        <section className={`offline-section reveal${inView ? ' is-visible' : ''}`} id="offline" ref={ref}>
            <div className="container">
                <div className="offline-content">
                    <h2 className="offline-heading">{OFFLINE_CONTENT.heading}</h2>
                    <p className="offline-subheading">{OFFLINE_CONTENT.subheading}</p>
                </div>

                <div className="accordion-wrapper">
                    <div className="accordion-item">
                        <button
                            type="button"
                            className="accordion-header"
                            onClick={toggleAccordion}
                            aria-expanded={isAccordionOpen}
                            aria-controls="accordion-content"
                        >
                            Список услуг и манипуляций
                            <span className={`accordion-icon ${isAccordionOpen ? 'open' : ''}`}>▼</span>
                        </button>
                        <div
                            id="accordion-content"
                            className="accordion-content"
                            style={{
                                maxHeight: isAccordionOpen ? '500px' : '0',
                                opacity: isAccordionOpen ? 1 : 0,
                                visibility: isAccordionOpen ? 'visible' : 'hidden'
                            }}
                        >
                            <ul className="service-list">
                                {OFFLINE_CONTENT.services.map((item, index) => (
                                    <li key={index} className="service-list-item">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="offline-price glass-card">
                    <p className="offline-coast">{OFFLINE_CONTENT.coast}</p>
                    <p className="offline-price-subtext">{OFFLINE_CONTENT.priceSubText}</p>

                    <div className="offline-address">
                        <p className="offline-address-label">{OFFLINE_CONTENT.addressLabel}</p>
                        <p className="offline-address-metro">
                            <span className="metro-icon">🚇</span>
                            {OFFLINE_CONTENT.addressMetro}
                        </p>
                        <p className="offline-address-street">{OFFLINE_CONTENT.addressStreet}</p>
                    </div>
                </div>

                <div className="offline-cta">
                    <a
                        href="https://www.fdoctor.ru/vrach-kamynina-anastasiya-viktorovna/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZnRzaAPq6UVleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacoD9LfqAWDYWwktxEp5sZMVMNfbnJqk48XSMb-xIy93akfcEDt_dfkkXkw-g_aem_pg2IWmfnx4BiGF0sAM9eXg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="offline-button btn-accent"
                    >
                        {OFFLINE_CONTENT.offlineButton}
                    </a>
                </div>
            </div>
        </section>
    );
}
