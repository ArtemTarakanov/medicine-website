import './Header.css';

export default function Header(){
    return(

        <header>
            <h1 className ='logotype'>ЛОР ВРАЧ МСК</h1>

            <ul className ='nav'>

                <li className ='nav-item'>
                    <a href = '#' className="about-me">О враче</a>
                </li>

                <li className ='nav-item'>
                    <a href = '#' className="services">Услуги</a>
                </li>

                <li className ='nav-item'>
                    <a href = '#' className="online">Онлайн</a>
                </li>

                <li className ='nav-item'>
                    <a href = '#' className="appointment">Приём</a>
                </li>

                <li className ='nav-item'>
                    <a href = '#' className="comments">Отзывы</a>
                </li>

            </ul>

            <button className = 'logo-signup'>Записаться</button>

        </header>
    )

}