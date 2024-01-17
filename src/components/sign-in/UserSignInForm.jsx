const UserSignInForm = () => {

    return (
        <div className={`d-flex  p-5 flex-column gap-5`}
             style={{width: '40%', backgroundColor: '#ffffff', marginTop: '20px'}}>
            <div className={` d-flex flex-column gap-4`}>
                <div className={``}>
                    <select style={{height: '50px', borderRadius: "1px"}} className={`form-select`}>
                        <option selected={true}>Artist</option>
                        <option>Art Enthusiast</option>
                    </select>
                </div>
                <div className={``}>
                    <input style={{height: '50px', borderRadius: '1px'}} placeholder={'Email'}
                           className={`form-control`}/>
                </div>
                <div className={``}>
                    <input style={{height: '50px', borderRadius: '1px'}} placeholder={'password'}
                           className={`form-control`}/>
                </div>
            </div>

            <div className={`d-flex justify-content-center align-items-center flex-column gap-3`}>
                <div className={` w-100`}>
                    <button className={`w-100 p-0`} style={{
                        border: 'none',
                        color: 'white',
                        backgroundColor: '#1f1f1f',
                        height: '50px'
                    }}>Continue
                    </button>
                </div>
                <div className={``}>
                    <text style={{fontSize: '16px'}}>Already have an account? Sign in</text>
                </div>
            </div>
        </div>
    );
}

export default UserSignInForm;