import st from './style.module.scss';
import logo from '../../Images/logo.English.png';


export default function Header() {
    return (
    <div className={st.header}>
        <img className={st.header_logo} src={logo} alt="logo" />
        <nav className={st.header_nav}>
        <ul className={st.header_nav_list}>
            <li className={st.header_nav_list_item}>Home</li>
            <li className={st.header_nav_list_item}>Table</li>
            <li className={st.header_nav_list_item}>Flashcards</li>
        </ul>
    </nav>
        </div>
    )
}