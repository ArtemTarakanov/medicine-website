import './About.css';
import { useInView } from '../hooks/useInView';
import { useEffect, useRef } from 'react';

const ABOUT_CONTENT = {
    heading: 'Коротко обо мне',
    description: 'Я — врач-оториноларинголог, работаю с детьми и взрослыми. Имею диплом и действующую аккредитацию.',
    timeline: [
        { year: '2021', text: 'Российский национальный исследовательский медицинский университет имени Н.И. Пирогова — Лечебное дело', type: 'edu' },
        { year: '2023', text: 'Научно-исследовательский клинический институт отоларингологии им. Л.И. Свержевского — Оториноларингология', type: 'edu' },
        { year: '2022', text: 'Клиника «Биосс» (2022–2023)', type: 'work' },
        { year: '2023→', text: 'Клиника «Семейный доктор» (с 2023 года)', type: 'work' },
    ],
};

export default function About() {
    const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const el = imageRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const viewH = window.innerHeight;
            const progress = (viewH - rect.top) / (viewH + rect.height);
            const shift = (progress - 0.5) * 60;
            el.style.transform = `translateY(${shift}px)`;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="about" id="about" ref={ref}>
            <div className={`about-visual reveal-left${inView ? ' is-visible' : ''}`}>
                <div className="about-image-wrap">
                    <div className="about-image-inner" ref={imageRef}>
                        <img src='/images/doctor_2.jpg' alt='Камынина Анастасия Викторовна' className="doctor-image-about"/>
                        <div className="about-image-overlay" aria-hidden="true"/>
                    </div>
                </div>
            </div>

            <div className={`about-content reveal-right${inView ? ' is-visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
                <p className="about-tag">· О ВРАЧЕ ·</p>
                <h2 className="about-heading">{ABOUT_CONTENT.heading}</h2>
                <div className="about-accent-line"/>
                <p className="about-description">{ABOUT_CONTENT.description}</p>

                <div className="about-timeline">
                    {ABOUT_CONTENT.timeline.map((item, i) => (
                        <div
                            key={i}
                            className={`about-timeline-item about-timeline-item--${item.type}`}
                            style={{ transitionDelay: inView ? `${0.2 + i * 0.1}s` : '0s' }}
                        >
                            <div className="about-timeline-dot"/>
                            <div className="about-timeline-body">
                                <span className="about-timeline-year">{item.year}</span>
                                <p className="about-timeline-text">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
