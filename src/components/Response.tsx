import { useState, useRef } from 'react';
import './Response.css';
import { useInView } from '../hooks/useInView';

const RESPONSE_CONTENT = {
    heading: "Отзывы пациентов",
};

const responseData = [
    {
        stars: 5,
        description: 'Невероятно внимательный к деталям и знающий свое дело профессионал! Очень доступно объясняет, отвечает на все вопросы. Никакого дискомфорта.',
        name: 'Аноним',
        nameRole: 'Пациент',
    },
    {
        stars: 5,
        description: 'Настенька, привет! Прости что поздно! Настя, ты меня спасла!!! Я теперь дышу!!! Спасибо тебе огромной мой сладкий доктор!!!!',
        name: 'Аноним',
        nameRole: 'Пациент',
    },
    {
        stars: 5,
        description: 'Анастасия, добрый день! Я наконец-то задышала полной грудью впервые за два месяца. Это такой кайф, вы бы знали 😂 Спасибо большое!',
        name: 'Аноним',
        nameRole: 'Пациент',
    },
    {
        stars: 5,
        description: 'От всей души благодарю грамотного и внимательного доктора Камынину Анастасию Викторовну. Попала к врачу с острой болью, после тщательного осмотра установлен правильный диагноз, начато лечение, которое мне помогло. От всей души ещё раз спасибо!',
        name: 'Аноним',
        nameRole: 'Пациент',
    },
    {
        stars: 5,
        description: 'Несмотря на то, что врач — молодая девушка, но гораздо более квалифицирована, чем её более взрослые коллеги. Внимательна, вежлива и вдумчива.',
        name: 'А. Хацкевич',
        nameRole: 'Пациент',
    },
    {
        stars: 5,
        description: 'Сегодня была на приеме у врача-оториноларинголога Камыниной А.В. Быстро разобралась с моей проблемой, промыла миндалины. Ранее в другой клинике опыт промывания миндалин был негативный. Золотые руки, спасибо, док!',
        name: 'Елизавета Е.',
        nameRole: 'Пациент',
    }
];

export default function Response() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animDir, setAnimDir] = useState<'left' | 'right' | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [swipeHintSeen, setSwipeHintSeen] = useState(false);
    const { ref, inView } = useInView<HTMLElement>({ threshold: 0.1 });
    const touchStartX = useRef<number | null>(null);

    const goTo = (index: number, dir: 'left' | 'right') => {
        if (isAnimating) return;
        setAnimDir(dir);
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsAnimating(false);
            setAnimDir(null);
        }, 320);
    };

    const nextSlide = () => goTo((currentIndex + 1) % responseData.length, 'left');
    const prevSlide = () => goTo((currentIndex - 1 + responseData.length) % responseData.length, 'right');

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) {
            diff > 0 ? nextSlide() : prevSlide();
            setSwipeHintSeen(true);
        }
        touchStartX.current = null;
    };

    const review = responseData[currentIndex];

    return (
        <section
            className={`response-section reveal${inView ? ' is-visible' : ''}`}
            id="response"
            ref={ref}
        >
            <div className="container">
                <h2 className="response-header">{RESPONSE_CONTENT.heading}</h2>

                {/* Десктоп: кнопки по бокам */}
                <div className="carousel-container">
                    <button className="carousel-btn prev" onClick={prevSlide} aria-label="Предыдущий отзыв">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    <div
                        className="carousel-wrapper"
                        onTouchStart={onTouchStart}
                        onTouchEnd={onTouchEnd}
                    >
                        <div className={`response-card${animDir ? ` card-exit-${animDir}` : ''}`}>
                            <div className="quote-mark">"</div>
                            <div className="card-content">
                                <div className="stars">{'★'.repeat(review.stars)}</div>
                                <p className="description">{review.description}</p>
                                <div className="card-footer">
                                    <div className="author-info">
                                        <div className="name">{review.name}</div>
                                        <div className="nameRole">{review.nameRole}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="carousel-btn next" onClick={nextSlide} aria-label="Следующий отзыв">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>

                {/* Подсказка свайпа — только мобилка, пропадает после первого свайпа */}
                {!swipeHintSeen && (
                    <div className="swipe-hint" aria-hidden="true">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                )}

                <div className="carousel-dots">
                    {responseData.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goTo(index, index > currentIndex ? 'left' : 'right')}
                            aria-label={`Перейти к отзыву ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
