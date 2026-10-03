import './Services.css';
import { useInView } from '../hooks/useInView';

const servicesData = [
    {
        emoji: '👃',
        title: 'Заложенность носа',
        tags: ['Ринит', 'Синусит', 'Полипоз', 'Искривление перегородки'],
        accent: true,
    },
    {
        emoji: '👂',
        title: 'Боль в ухе',
        tags: ['Отит', 'Серные пробки', 'Снижение слуха'],
        accent: false,
    },
    {
        emoji: '👶',
        title: 'Аденоиды у детей',
        tags: ['Диагностика', 'Второе мнение', 'Консервативное лечение'],
        accent: false,
    },
    {
        emoji: '🤒',
        title: 'Боль в горле',
        tags: ['Тонзиллит', 'Фарингит', 'Ларингит'],
        accent: false,
    },
    {
        emoji: '💫',
        title: 'Головокружения',
        tags: ['ДППГ', 'Вестибулярные нарушения'],
        accent: false,
    },
    {
        emoji: '📋',
        title: 'Разбор анализов',
        tags: ['КТ / МРТ', 'Аудиограммы', 'Рентген'],
        accent: false,
    },
];

export default function Services() {
    const { ref, inView } = useInView<HTMLElement>({ threshold: 0.05 });

    return (
        <section className={`services reveal${inView ? ' is-visible' : ''}`} id="services" ref={ref}>
            <div className="services-header">
                <h2 className="services-heading">С какими запросами<br/>обращаются</h2>
                <div className="services-accent-line"/>
                <p className="services-subheading">ЛОР-проблемы у детей и взрослых — онлайн или очно</p>
            </div>

            <div className="services-grid">
                {servicesData.map((s, i) => (
                    <div
                        key={i}
                        className={`service-card service-card--${i + 1}${s.accent ? ' service-card--accent' : ''}`}
                    >
                        <div className="card-bubble card-bubble--1" aria-hidden="true"/>
                        <div className="card-bubble card-bubble--2" aria-hidden="true"/>
                        <div className="card-bubble card-bubble--3" aria-hidden="true"/>

                        <span className="service-card-emoji">{s.emoji}</span>
                        <h3 className="service-card-title">{s.title}</h3>
                        <div className="service-card-tags">
                            {s.tags.map((tag, j) => (
                                <span key={j} className="service-tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
