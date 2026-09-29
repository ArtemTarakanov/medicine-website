import './About.css';
import { useInView } from '../hooks/useInView';

const ABOUT_CONTENT = {
    heading: "Коротко обо мне",
    description: "Я - врач-оториноларинголог, работаю с детьми и взрослыми. Имею диплом и действующую аккредитацию.",
    educationHeading: "Образование",
    education1: "Российский национальный исследовательский медицинский университет имени Н.И. Пирогова, 2021 — Лечебное дело",
    education2: "Научно-исследовательский клинический институт отоларингологии им. Л. И. Свержевского, 2023 — Оториноларингология",
    experienceHeading: "Опыт работы",
    experience1: "Клиника «Биосс» (2022-2023)",
    experience2: "Клиника «Семейный доктор» (с 2023 года)",
    experience3: "3 года клинического опыта",
    experience4: "Действующая аккредитация по специальности",
}

export default function About(){
    const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

    return(
        <div className="about" id="about" ref={ref}>

            <div className={`about-image reveal-left${inView ? ' is-visible' : ''}`}>
                <img src='/images/doctor_2.jpg' alt='doctor' className="doctor-image-about"/>
            </div>

            <div className={`about-content reveal-right${inView ? ' is-visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
                <h1 className="about-heading">{ABOUT_CONTENT.heading}</h1>
                <h2 className="about-description">{ABOUT_CONTENT.description}</h2>
                
                <h3 className="about-subheading">{ABOUT_CONTENT.educationHeading}</h3>
                <ul className="about-list">
                    <li className="about-list-item">{ABOUT_CONTENT.education1}</li>
                    <li className="about-list-item">{ABOUT_CONTENT.education2}</li>
                </ul>

                <h3 className="about-subheading">{ABOUT_CONTENT.experienceHeading}</h3>
                <ul className="about-list">
                    <li className="about-list-item">{ABOUT_CONTENT.experience1}</li>
                    <li className="about-list-item">{ABOUT_CONTENT.experience2}</li>
                    <li className="about-list-item">{ABOUT_CONTENT.experience3}</li>
                    <li className="about-list-item">{ABOUT_CONTENT.experience4}</li>
                </ul>
            </div>

        </div>

    );
}
