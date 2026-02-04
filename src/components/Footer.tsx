import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="/" className="footer-logo">ЛОР ВРАЧ МСК</a>
                        <p className="footer-description">
                            Камынина Анастасия Викторовна<br />
                            Врач-оториноларинголог<br />
                            Детский и взрослый приём
                        </p>
                    </div>

                    <div className="footer-links-column" id = "links-column">
                        <h3 className="footer-title">Разделы</h3>
                        <ul className="footer-links">
                            <li><a href="#about">О враче</a></li>
                            <li><a href="#services">Услуги</a></li>
                            <li><a href="#online">Онлайн-консультация</a></li>
                            <li><a href="#offline">Очный приём</a></li>
                            <li><a href="#response">Отзывы</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-column">
                        <h3 className="footer-title">Контакты</h3>
                        <ul className="footer-links">
                            <li><a href="tel:+79152603008">+7 (915) 260-30-08</a></li>
                            <li><a href="mailto:Akamynina4@yandex.ru">Akamynina4@yandex.ru</a></li>
                            <li><a href="https://www.fdoctor.ru/vrach-kamynina-anastasiya-viktorovna/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZnRzaAPq6UVleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacoD9LfqAWDYWwktxEp5sZMVMNfbnJqk48XSMb-xIy93akfcEDt_dfkkXkw-g_aem_pg2IWmfnx4BiGF0sAM9eXg">Клиника «Семейный доктор»</a></li>
                        </ul>
                    </div>

                </div>

                <div className="legal-disclaimer">
                    <p>
                        <strong>Медицинская информация:</strong> Информация на сайте не является медицинской услугой и не заменяет очный приём врача.
                        Консультация носит информационный характер. Самолечение может быть опасным для вашего здоровья.
                        При острых состояниях вызывайте скорую помощь.
                    </p>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        © {new Date().getFullYear()} Камынина А.В., ИНН 263014283220 — Все права защищены.
                    </div>
                    <div className="footer-docs">
                        <a href="#">Политика конфиденциальности</a>
                        <a href="#">Оферта</a>
                        <a href="#">Согласие на ПД</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}