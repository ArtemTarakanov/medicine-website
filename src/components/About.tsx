import './About.css';

const ABOUT_CONTENT = {
    heading: "Коротко обо мне",
    description: "Я - врач-оториноларинголог, работаю с детьми и взрослыми. Имею диплом и действующую аккредитацию.",
    listItem1: "Клиника «Биосс» (2022-2023)",
    listItem2: "Клиника «Семейный доктор» (с 2023 года)",
    listItem3: "3 года клинического опыта",
    listItem4: "Действующая аккредитация по специальности",
    aboutButton: "Записаться на приём"

}

export default function About(){
    return(
        <div className = "about">

            <div className = "about-image">
                <img src = 'public/images/doctor_2.jpg' alt = 'doctor' className = "doctor-image-about"></img>
            </div>

            <div className = "about-content">
                <h1 className = "about-heading">{ABOUT_CONTENT.heading}</h1>
                <h2 className = "about-description">{ABOUT_CONTENT.description}</h2>
                <ul className = "about-list">
                    <li className = "about-list-item">{ABOUT_CONTENT.listItem1}</li>
                    <li className = "about-list-item">{ABOUT_CONTENT.listItem2}</li>
                    <li className = "about-list-item">{ABOUT_CONTENT.listItem3}</li>
                    <li className = "about-list-item">{ABOUT_CONTENT.listItem4}</li>
                </ul>
                <button type={"button"} className = "about-btn">{ABOUT_CONTENT.aboutButton}</button>
            </div>

        </div>
    );
}