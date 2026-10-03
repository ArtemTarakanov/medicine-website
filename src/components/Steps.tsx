import './Steps.css';
import { useInView } from '../hooks/useInView';

const STEPS = [
    {
        num: '01',
        heading: 'Выберите формат',
        sub: 'Онлайн через Telegram или очный приём в клинике «Семейный доктор»',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
            </svg>
        ),
    },
    {
        num: '02',
        heading: 'Запишитесь',
        sub: 'Выберите удобное время. Быстрая запись без ожидания',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><polyline points="9 11 12 14 22 4"/>
            </svg>
        ),
    },
    {
        num: '03',
        heading: 'Получите помощь',
        sub: 'Разбор анализов, диагноз, план лечения и рекомендации',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
        ),
    },
];

export default function Steps() {
    const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

    return (
        <div className={`steps reveal${inView ? ' is-visible' : ''}`} ref={ref}>
            <h2 className="steps-heading">
                3 простых шага <span className="steps-heading__accent">к решению</span>
            </h2>
            <div className="steps-accent-line"/>

            <div className="steps-list">
                {STEPS.map((step, i) => (
                    <div key={step.num} className={`step-card step-card--${i + 1}`}>
                        <div className="step-card__left">
                            <div className="step-number">{step.num}</div>
                            {i < STEPS.length - 1 && <div className="step-connector"/>}
                        </div>
                        <div className="step-card__body">
                            <div className="step-icon">{step.icon}</div>
                            <div className="step-card__text">
                                <h3 className="step-heading">{step.heading}</h3>
                                <p className="step-sub">{step.sub}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
