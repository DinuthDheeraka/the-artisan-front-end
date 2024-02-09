import styles from './side.module.css'

export default function UserSideBar() {

    const userType = JSON.parse(localStorage.getItem("user")).user_role;

    return (
        <div style={{ width: '200px', backgroundColor: 'white' }} className={`d-flex flex-column`}>
        
        <select style={{borderRadius:'0px'}} className='form-select'>
                <option>My profile</option>
                <option>Logout</option>
        </select>
            {/* <div className={`d-flex flex-column`}>

                <button className={`${styles.side}`}>View profile</button>

                {userType == 'Buyer' ? <button className={`${styles.side}`}>My purchases</button>:undefined}

                <button className={`${styles.side}`}>Logout</button>

            </div> */}
        </div>
    );
}