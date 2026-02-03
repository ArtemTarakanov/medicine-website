import './Hero.css';

const HERO_CONTENT ={
    subheading: 'ВРАЧ-ОТОРИНОЛАРИНГОЛОГ',
    description: 'Детский и взрослый приём. Онлайн-консультации и очный приём. Помогаю разобраться в ЛОР-проблемах спокойно и понятно.',
    onlineButton: 'Записаться на онлайн-консультацию',
    offlineButton: 'Записаться на очный приём',
    badge1: '3+ Года опыта',
    badge2: '★★★★★ 2500+ пациентов'
}

export default function Hero(){
    return(
        <div className="hero">

            <div className = "hero-content">

                <h2 className = "hero-subtitle">{HERO_CONTENT.subheading}</h2>

                <h1 className = "hero-title">Камынина <br/> Анастасия <br/> Викторовна</h1>

                <p className = "hero-description">{HERO_CONTENT.description}</p>


                <div className="hero-buttons">
                    <a
                        href="https://t.me/gingerdumb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-online"
                    >
                        {HERO_CONTENT.onlineButton}
                    </a>
                    <a
                        href="https://www.fdoctor.ru/vrach-kamynina-anastasiya-viktorovna/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZnRzaAPq6UVleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacoD9LfqAWDYWwktxEp5sZMVMNfbnJqk48XSMb-xIy93akfcEDt_dfkkXkw-g_aem_pg2IWmfnx4BiGF0sAM9eXg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-offline"
                    >
                        {HERO_CONTENT.offlineButton}
                    </a>
                </div>

            </div>

            <div className="hero-visual">
                <img src="/images/doctor.jpg" alt="Доктор Камынина" className="doctor-portrait"/>
                <div className="floating-badge badge-1">
                    <span className="badge-number">3+</span>
                    <span className="badge-label">Года опыта</span>
                </div>
                <div className="floating-badge badge-2">
                    <div className="badge-stars">★★★★★</div>
                    <div className="badge-label">2500+ пациентов</div>
                </div>
            </div>

        </div>
    );

}