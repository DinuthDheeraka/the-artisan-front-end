const BuyerSignInForm = () => {

    return (<div className={`d-flex p-3 flex-column gap-2`}
                 style={{width: '60%', backgroundColor: '#ffffff', marginTop: '20px'}}>

        <div className={`px-2`}>
            <button className={``} style={{border: 'none'}}>Back
            </button>
        </div>

        <div className={`d-flex flex-column align-items-center justify-content-center`}>
            <text style={{fontSize: '40px', fontWeight: 350}}>What's your name?</text>
            <small style={{fontSize: '17px', color: '#818181'}}>We are the artisan,nice to meet you!</small>
        </div>

        <div className={`d-flex px-2 flex-column gap-4 justify-content-center mt-4`}>
            <div className={`d-flex align-items-center`}>
                <label className={`w-25`}>Full name</label>
                <input style={{height: '50px', borderRadius: '1px'}} placeholder={''}
                       className={`form-control`}/>
            </div>

            <div className={`d-flex align-items-center`}>
                <label className={`w-25`}>Display name</label>
                <input style={{height: '50px', borderRadius: '1px'}} placeholder={''}
                       className={`form-control`}/>
            </div>

            <div className={`d-flex align-items-center`}>
                <label className={`w-25`}>Street Address</label>
                <input style={{height: '50px', borderRadius: '1px'}} placeholder={''}
                       className={`form-control`}/>
            </div>

            <div className={`d-flex align-items-center`}>
                <label className={`w-25`}>Post Code</label>
                <input style={{height: '50px', borderRadius: '1px'}} placeholder={''}
                       className={`form-control`}/>
            </div>

            <div className={`d-flex align-items-center`}>
                <label className={`w-25`}>City</label>
                <input style={{height: '50px', borderRadius: '1px'}} placeholder={''}
                       className={`form-control`}/>
            </div>

            <div className={`d-flex align-items-center`}>
                <label className={`w-25`}>Phone Number</label>
                <input style={{height: '50px', borderRadius: '1px'}} placeholder={''}
                       className={`form-control`}/>
            </div>

            <div className={`d-flex align-items-center`}>
                <label className={`w-25`}>Date of birth</label>
                <input style={{height: '50px', borderRadius: '1px', border: 'none'}} type={"date"}
                       placeholder={'Date Of Birth'}
                       className={`w-100 border`}/>
            </div>

            <div className={`d-flex align-items-center`}>
                <label className={`w-25`}>Gender</label>
                <select style={{height: '50px', borderRadius: "1px"}} className={`form-select`}>
                    <option selected={true}>None</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>

            <div className={`d-flex align-items-center justify-content-end`}>
                <button style={{
                    border: "none", width: '300px', height: '50px', backgroundColor: '#212121', color: 'white'
                }}>Continue
                </button>
            </div>

        </div>
    </div>);
}

export default BuyerSignInForm;