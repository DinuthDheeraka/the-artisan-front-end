import styles from './header.module.css';
import cartImg from '../../assets/shopping-bag.png'
import { Link, useNavigate } from 'react-router-dom';
import lens from '../../assets/lens.png'
import { useRef } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import userImg from '../../assets/user.png'

const Header = ({ updateCategory, updateSearch , updateImage}) => {

    const navigate = useNavigate();

    const lensRef = useRef(null);

    const user = JSON.parse(localStorage.getItem("user"))

    const handleChooseImage = () => {
        lensRef.current.click();
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        console.log('Selected File:', selectedFile);
        updateImage(selectedFile)
    };

    return (
        <header
            className={`container-fluid d-flex flex-column justify-content-center align-items-center ${styles.header}`}>

            <section className={`d-flex justify-content-center align-items-center w-100`}>

                <section className={`px-4`} style={{ width: '33.3333333%' }}>

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
                        <text style={{ fontWeight: 580 }}>{user === null ? '' : user.display_name}</text>
                        <small style={{ fontWeight: 500 }}>{user === null ? '' : user.email}</small>
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
                        src={user === null ? userImg : user.profile_img == null ? undefined : user.profile_img} />
                </section>
            </section>


            <nav
                className={`container-fluid d-flex justify-content-center gap-5 align-items-center ${styles.headerNav}`}>

                <div className={`w-25 px-2 d-flex mb-0`}>
                    <div style={{ width: '335px', border: '1px solid rgb(222,222,222)' }} className={`d-flex justify-content-start gap-2 align-items-center`}>
                        <input
                            style={{ borderRadius: '0px' }}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    const inputValue = event.target.value;
                                    updateSearch(inputValue);
                                }
                            }} 
                            placeholder={'Search'} className={`${styles.headerSearchBar}`} />
                        <div>
                            <img onClick={handleChooseImage} className={`px-2`} style={{ objectFit: 'cover', cursor: 'pointer' }} height={'30px'} src={lens} />
                            <input onChange={handleFileChange} ref={lensRef} style={{ display: 'none' }} type='file' />
                        </div>
                    </div>
                </div>

                <ul style={{ gap: '31px' }} className={`d-flex flex-row justify-content-centerborder  align-items-center nav-pills ${styles.headerUlNavLinks}`}>
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
                    <li>
                        <DropdownButton title={'Settings'} variant='dark' size='sm' style={{ borderRadius: '0px', width: '50px' }}>

                            <Dropdown.Item eventKey="1">My Profile</Dropdown.Item>

                            <Dropdown.Item eventKey="2" onClick={() => {
                                navigate("/purchases")
                            }}>My Purahceses</Dropdown.Item>

                            {user === null ? undefined : user.user_role === 'Artist' ? <Dropdown.Item onClick={() => {
                                navigate("/artwork/add")
                            }} eventKey="3">Add Artwork</Dropdown.Item> : undefined}

                            <Dropdown.Item onClick={() => {
                                localStorage.clear();
                                navigate("/login");
                            }} eventKey="4">Logout</Dropdown.Item>
                        </DropdownButton>
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