import './Services.css';

const servicesData = [
    {
        emoji: "👃",
        title: "Заложенность носа",
        description: "Ринит, синусит, полипоз носа, искривление перегородки, аллергический ринит"
    },
    {
        emoji: "👂",
        title: "Боль в ухе",
        description: "Отит, серные пробки, снижение слуха, экссудативный отит, грибковые поражения"
    },
    {
        emoji: "👶",
        title: "Аденоиды у детей",
        description: "Диагностика, консервативное лечение, наблюдение динамики, второе мнение"
    },
    {
        emoji: "🤒",
        title: "Боль в горле",
        description: "Тонзиллит, фарингит, ларингит, хронический тонзиллит, остаточные явления"
    },
    {
        emoji: "💫",
        title: "Головокружения",
        description: "ДППГ (доброкачественное позиционное пароксизмальное головокружение)"
    },
    {
        emoji: "📋",
        title: "Разбор анализов",
        description: "КТ, МРТ, аудиограммы, рентгенограммы, лабораторные исследования"
    }
];

export default function Services() {
    return (
        <section className="services" id = "services">
            <h2 className="services-heading">С какими запросами обращаются</h2>

            <div className="services-grid">
                {servicesData.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-card-content">
                            <span className="service-card-emoji">{service.emoji}</span>
                            <h3 className="service-card-title">{service.title}</h3>
                        </div>
                        <p className="service-card-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}