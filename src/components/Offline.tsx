import './Offline.css';
import { useState } from 'react';

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
    coast: '3100 ₽',
    priceSubText: "(без дополнительных исследований и манипуляций)",
    offlineButton: "Записаться на очный приём"
};

export default function Offline() {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false); /*Изначально закрыт*/

    const toggleAccordion = () => { /*Функция для переключения состояния*/
        setIsAccordionOpen(!isAccordionOpen);
    };

    return (
        <section className="offline-section" id = 'offline'>
            <div className="container">
                <div className="offline-content">
                    <h2 className="offline-heading">{OFFLINE_CONTENT.heading}</h2>
                    <p className="offline-subheading">{OFFLINE_CONTENT.subheading}</p>
                </div>

                {/*Аккордеон*/}
                <div className="accordion-wrapper">
                    <div className="accordion-item">
                        <button
                            type="button"
                            className="accordion-header"
                            onClick={toggleAccordion} /*при клике переключает состояние с помощью функции*/
                            aria-expanded={isAccordionOpen} /*проверка открыт ли он*/
                            aria-controls="accordion-content" /*указывает какой элемент по id управляется щас*/
                        >
                            Список услуг и манипуляций
                            <span className={`accordion-icon ${isAccordionOpen ? 'open' : ''}`}>▼</span> {/*если аккордеон закрыт то стрелку показываем*/}
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
                    <a
                        href="https://www.fdoctor.ru/vrach-kamynina-anastasiya-viktorovna/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZnRzaAPq6UVleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacoD9LfqAWDYWwktxEp5sZMVMNfbnJqk48XSMb-xIy93akfcEDt_dfkkXkw-g_aem_pg2IWmfnx4BiGF0sAM9eXg"
                        className="offline-button btn-accent"
                    >
                        {OFFLINE_CONTENT.offlineButton}
                    </a>
                </div>
            </div>
        </section>
    );
}