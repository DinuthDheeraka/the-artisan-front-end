import ArtworkList from "../artwork-list/ArtworkList.jsx";
import ham from '../../assets/menu (3).png'

const ArtworkListContainer = () => {
    return (
        <div className={`d-flex w-100 flex-column gap-3`} style={{marginTop: '50px'}}>
            <div className={``}>
                <div className={`d-flex justify-content-start gap-1 align-items-center`} style={{paddingLeft:'9px'}}>
                    <img style={{paddingLeft:'1px',margin:0}} height={'16px'} width={'15px'} src={ham} alt={''}/>
                    <small className={''} style={{fontSize:'15px',fontWeight:600}}>FILTER</small>
                </div>
            </div>
            <div>
                <ArtworkList/>
            </div>
        </div>
    );
}

export default ArtworkListContainer;