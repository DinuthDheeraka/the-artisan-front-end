import styles from './header.module.css';
import cartImg from '../../assets/shopping-bag.png'

const Header = () => {
    return (
        <header
            className={`container-fluid d-flex flex-column justify-content-center align-items-center ${styles.header}`}>

            <section className={`${styles.headerThemeName}`}>
                <p>The Artisan</p>
            </section>

            <nav
                className={`container-fluid d-flex justify-content-center gap-5 align-items-center ${styles.headerNav}`}>

                <div className={`w-25 d-flex justify-content-start`}>
                    <input placeholder={'Search'} className={`${styles.headerSearchBar}`}/>
                </div>

                <ul className={`d-flex flex-row justify-content-center align-items-center nav-pills gap-5 ${styles.headerUlNavLinks}`}>
                    <li className={`nav-item`}>
                        <a href={`#`} className={`nav-link`}>Painting</a>
                    </li>
                    <li className={`nav-item`}>
                        <a href={`#`} className={`nav-link`}>Drawing</a>
                    </li>
                    <li className={`nav-item`}>
                        <a href={`#`} className={`nav-link`}>Sculpture</a>
                    </li>
                    <li className={`nav-item`}>
                        <a href={`#`} className={`nav-link`}>Wall Art</a>
                    </li>
                    <li className={`nav-item`}>
                        <a href={`#`} className={`nav-link`}>Handicraft</a>
                    </li>
                    <li className={`nav-item`}>
                        <a href={`#`} className={`nav-link`}>Artists</a>
                    </li>
                </ul>

                <div className={`w-25 d-flex justify-content-end`}>
                    <img alt={'img'} className={`${styles.shoppingCart}`} src={cartImg}/>
                </div>

            </nav>

        </header>
    );
}

export default Header;