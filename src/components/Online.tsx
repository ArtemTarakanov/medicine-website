import './Online.css';

const ONLINE_CONTENT = {
    heading: 'Онлайн-консультация ЛОР-врача',
    subheading: 'Информационная консультация для тех, кто хочет разобрать анализы, получить второе мнение или понять диагноз простым языком.',
    description1: 'Обсуждение возможных причин симптомов (без постановки диагноза)',
    description2: 'Разбор предоставленных обследований',
    description3: 'Рекомендации по дальнейшим очным шагам',
    description4: 'Подчёркивание необходимости очной консультации при необходимости',

    importantHeading: 'Важно',
    importantSubheading: 'Консультация не является медицинской услугой, не заменяет очный приём врача, не включает диагностику и лечение. Вся информация носит ознакомительный характер.',

    price: "Стоимость",
    coast: '2000 ₽',
    time: 'Длительность: 30–60 минут',
    button: 'Записаться на онлайн-консультацию (Telegram)',
}

export default function Online() {
    return (
        <section className="online-section">
            <div className="online-content">
                <h2 className="online-heading">{ONLINE_CONTENT.heading}</h2>
                <p className="online-subheading">{ONLINE_CONTENT.subheading}</p>

                <ul className="online-list">
                    <li className="online-list-item">{ONLINE_CONTENT.description1}</li>
                    <li className="online-list-item">{ONLINE_CONTENT.description2}</li>
                    <li className="online-list-item">{ONLINE_CONTENT.description3}</li>
                    <li className="online-list-item">{ONLINE_CONTENT.description4}</li>
                </ul>

                <div className="important">
                    <p className="important-heading">{ONLINE_CONTENT.importantHeading}</p>
                    <p className="important-description">{ONLINE_CONTENT.importantSubheading}</p>
                </div>
            </div>

            <div className="price-container">
                <p className="price">{ONLINE_CONTENT.price}</p>
                <p className="coast-number">{ONLINE_CONTENT.coast}</p>
                <p className="time">{ONLINE_CONTENT.time}</p>
                <a href="https://t.me/gingerdumb" target="_blank" rel="noopener noreferrer" className="online-button">
                    {ONLINE_CONTENT.button}
                </a>
            </div>
        </section>
    );
}