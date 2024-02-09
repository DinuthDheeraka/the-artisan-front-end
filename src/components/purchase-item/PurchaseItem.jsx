import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PurchaseItem({ index,artworkId, imgUrl, artistName, title, price, qty, date, updateCart }) {

    const [itemQty, setItemQty] = useState(qty);

    const navigate = useNavigate(null);

    return (
        <div style={{ borderBottom: '1px solid rgb(222,222,222)' }}
            className={`justify-content-start pt-4 pb-4  d-flex w-100 flex-row`}>

            <div className={`d-flex gap-3`} style={{ width: '50%' }}>
                <div className={``}>
                    <img
                        style={{ objectFit: 'cover', borderRadius: '5px' }}
                        border={'none'}
                        height={'120px'}
                        width={'120px'}
                        src={imgUrl}
                    />
                </div>
                <div className={`d-flex gap-1 flex-column align-items-start justify-content-center`}>
                    <text><b>{title}</b></text>
                    <text>{artistName}</text>
                </div>
            </div>

            <div className={`d-flex justify-content-center align-items-center`}
                style={{ width: '25%' }}>
                <text style={{ fontWeight: 500 }}>Date {date}</text>
            </div>


            <div className={`d-flex justify-content-center align-items-center`}
                style={{ width: '25%' }}>
                <text style={{ fontWeight: 500 }}>{(price).toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}</text>
            </div>

            <div className={`d-flex justify-content-center align-items-center`}
                style={{ width: '15%' }}>
                <div className={`d-flex gap-3 align-items-center`}>
                    <text style={{ fontWeight: 500 }}>{itemQty} {itemQty<=1? 'copy':'copies'} for</text>
                </div>
            </div>

            <div className={`d-flex justify-content-center align-items-center`}
                style={{ width: '25%' }}>
                <text style={{ fontWeight: 600 }}>{(price * qty).toLocaleString('en-US', { style: 'currency', currency: 'LKR' })}</text>
            </div>

            <div className={`d-flex justify-content-center align-items-center`}
                style={{ width: '10%' }}>
                <button
                    onClick={() => {

                        const response = confirm("Do you want to review this artwork?");

                        if (response) {
                            navigate("/artwork/1");
                        } else {
                        }
                        
                    }}
                    style={{
                        fontSize: '12px',
                        height: '30px',
                        fontWeight:450,
                        width:'70px',
                        border: '1px solid black',
                        backgroundColor: 'transparent'
                    }}>Riview
                </button>
            </div>

        </div>
    );
}