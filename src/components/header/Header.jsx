import styles from './header.module.css';
import cartImg from '../../assets/shopping-bag.png'
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ updateCategory }) => {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"))

    return (
        <header
            className={`container-fluid d-flex flex-column justify-content-center align-items-center ${styles.header}`}>

            <section className={`d-flex justify-content-center align-items-center w-100`}>
                <section style={{ width: '33.3333333%' }}>

                </section>

                <section style={{ width: '33.3333333%' }} className={`justify-content-center d-flex ${styles.headerThemeName}`}>
                    <Link
                        onClick={() => {
                            navigate('/')
                        }}
                        style={{ textDecoration: 'none', color: 'black' }}>The Artisan</Link>
                </section>

                <section style={{ width: '33.333333%' }} className={`d-flex gap-3 justify-content-end align-items-center px-2`}>
                    <section className={`d-flex flex-column`}>
                        <text style={{ fontWeight: 580 }}>{user.display_name}</text>
                        <small style={{ fontWeight: 500 }}>{user.email}</small>
                    </section>
                    <img
                        style={{
                            border: '1px solid rgb(145, 144, 144)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            objectFit: 'cover',
                            width: '60px',
                            height: '60px',
                            borderRadius: '100%'
                        }}
                        src={user.profile_img == null ? undefined : user.profile_img} />
                </section>
            </section>


            <nav
                className={`container-fluid d-flex justify-content-center gap-5 align-items-center ${styles.headerNav}`}>

                <div className={`w-25 d-flex justify-content-start px-2`}>
                    <input placeholder={'Search'} className={`${styles.headerSearchBar}`} />
                </div>

                <ul className={`d-flex flex-row justify-content-center align-items-center nav-pills gap-5 ${styles.headerUlNavLinks}`}>
                    <li className={`nav-item`}>
                        <Link onClick={() => {
                            updateCategory("Painting")
                        }} className={`nav-link`}>Painting</Link>
                    </li>
                    <li className={`nav-item`}>
                        <Link onClick={() => {
                            updateCategory("Drawing")
                        }} className={`nav-link`}>Drawing</Link>
                    </li>
                    <li className={`nav-item`}>
                        <Link onClick={() => {
                            updateCategory("Sculpture")
                        }} className={`nav-link`}>Sculpture</Link>
                    </li>
                    <li className={`nav-item`}>
                        <Link onClick={() => {
                            updateCategory("Wall Art")
                        }} className={`nav-link`}>Wall Art</Link>
                    </li>
                    <li className={`nav-item`}>
                        <Link onClick={() => {
                            updateCategory("Handicraft")
                        }} className={`nav-link`}>Handicraft</Link>
                    </li>
                    <li className={`nav-item`}>
                        <Link onClick={() => {
                            updateCategory("Artists")
                        }} className={`nav-link`}>Artists</Link>
                    </li>
                </ul>

                <div className={`w-25 d-flex justify-content-end px-1`}>
                    <img alt={'img'} className={`${styles.shoppingCart}`} onClick={() => {
                        navigate("/cart");
                    }} src={cartImg} />
                </div>

            </nav>

        </header>
    );
}

export default Header;