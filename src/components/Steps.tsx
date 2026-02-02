import './Steps.css';

const STEPS_CONTENT = {
    heading: '3 простых шага к решению',
    card1_heading: "Выберите формат",
    card2_heading: "Запишитесь",
    card3_heading: "Получите помощь",

    card1_subheading: "Онлайн через Telegram или очный приём в клинике «Семейный доктор»",
    card2_subheading: "Выберите удобное время. Быстрая запись без ожидания",
    card3_subheading: "Разбор анализов, диагноз, план лечения и рекомендации"
}

export default function Steps(){
    return(
        <div className="steps">
            <h2 className="steps-heading">{STEPS_CONTENT.heading}</h2>

            <div className="steps-cards">
                <div className="step-card">
                    <div className="card-number-container">
                        <p className="card-number">1</p>
                    </div>
                    <h3 className="card-heading">{STEPS_CONTENT.card1_heading}</h3>
                    <p className="card-subheading">{STEPS_CONTENT.card1_subheading}</p>
                </div>

                <div className="step-card">
                    <div className="card-number-container">
                        <p className="card-number">2</p>
                    </div>
                    <h3 className="card-heading">{STEPS_CONTENT.card2_heading}</h3>
                    <p className="card-subheading">{STEPS_CONTENT.card2_subheading}</p>
                </div>

                <div className="step-card">
                    <div className="card-number-container">
                        <p className="card-number">3</p>
                    </div>
                    <h3 className="card-heading">{STEPS_CONTENT.card3_heading}</h3>
                    <p className="card-subheading">{STEPS_CONTENT.card3_subheading}</p>
                </div>
            </div>
        </div>
    );
}