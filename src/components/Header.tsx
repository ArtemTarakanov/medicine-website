import './Header.css';

export default function Header(){
    return(

        <header>
            <h1 className ='logotype'>ЛОР ВРАЧ МСК</h1>

            <ul className ='nav'>

                <li className ='nav-item'>
                    <a href = '#about' className="about-me">О враче</a>
                </li>

                <li className ='nav-item'>
                    <a href = '#services' className="services">Услуги</a>
                </li>

                <li className ='nav-item'>
                    <a href = '#online' className="online">Онлайн</a>
                </li>

                <li className ='nav-item'>
                    <a href = '#offline' className="appointment">Приём</a>
                </li>

                <li className ='nav-item'>
                    <a href = '#response' className="comments">Отзывы</a>
                </li>

            </ul>

            <a
                href="https://t.me/gingerdumb"
                target="_blank"
                rel="noopener noreferrer"
                className="logo-signup"
            >
                Записаться
            </a>

        </header>
    )

}