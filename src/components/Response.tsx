import './Response.css';

const RESPONSE_CONTENT = {
    heading: "Отзывы пациентов",
};

const responseData = [
    {
        stars: '★★★★★',
        description: 'Очень внимательный врач! Подробно объяснила причину болей в ухе у сына, назначила лечение. Через 3 дня всё прошло.',
        name: 'Мария К.',
        nameRole: 'Мама пациента',
    },
    {
        stars: '★★★★★',
        description: 'Обращался за вторым мнением по поводу операции на аденоидах. Анастасия Викторовна всё доступно объяснила, успокоила.',
        name: 'Алексей В.',
        nameRole: 'Пациент',
    },
    {
        stars: '★★★★★',
        description: 'Профессионал своего дела! Провела приём бережно, ребёнок не плакал. Наконец-то нашли причину хронических насморков.',
        name: 'Елена М.',
        nameRole: 'Мама пациента',
    }
];

export default function Response() {
    return (
        <section id="reviews" className="response-section">
            <div className="container">
                <div className="response-content">
                    <h2 className="response-header">{RESPONSE_CONTENT.heading}</h2>
                </div>

                <div className="response-grid">
                    {responseData.map((item, index) => (
                        <div key={index} className="response-card">
                            <div className="quote-icon">"</div>
                            <div className="card-content">
                                <div className="stars">{item.stars}</div>
                                <p className="description">{item.description}</p>
                                <div className="name">{item.name}</div>
                                <div className="nameRole">{item.nameRole}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}