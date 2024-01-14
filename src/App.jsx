import './App.css'
import Header from "./components/header/Header.jsx";
import img from './assets/wp3210388.webp';
import heart from './assets/heart (1).png'
import ArtworkListContainer from "./components/artwork-list-container/ArtworkListContainer.jsx";

function App() {

    return (
        <div style={{backgroundColor: 'rgb(255,255,255)', height: '1000px'}}>
            <Header/>
            <div className={`d-flex flex-column w-100`}>
                <div className={`w-100 position-relative`}>
                    <img
                        width={`100%`}
                        height={'500px'}
                        src={img}
                    />
                    <img
                        width={`150px`}
                        height={'150px'}
                        style={{borderRadius: '100%', position: "absolute", margin: 'auto', top: '430px', left: '80px'}}
                        src={img}
                    />
                </div>

                <div className={`d-flex flex-column justify-content-start`} style={{paddingLeft: '250px'}}>
                    <text style={{fontSize: '50px', fontWeight: 300}}>Dinuth Dheeraka</text>
                    <div className={`d-flex`}>

                        <text className={`w-75`}>
                            • Artist (Painting) • Born 1958 •
                        </text>

                        <div className={`w-25 d-flex align-items-center gap-2`} style={{}}>
                            <img
                                height={'25px'}
                                src={heart}
                            />
                            <small>10K Impressions</small>
                            <small>|</small>
                            <small>300 Reviews</small>
                        </div>
                    </div>
                </div>

                <div className={`pt-3`} style={{paddingLeft: '250px'}}>
                    <text style={{fontSize: '22px', fontWeight: 350}}>
                        Biography
                    </text>
                </div>

                <div className={`d-flex pt-2 justify-content-start`}
                     style={{paddingLeft: '250px', paddingRight: '40px'}}>
                    <text className={`w-100`} style={{fontSize: '17px', fontWeight: 200}}>
                        Aleksandr Ilichev is a contemporary Turkish painter. Ilichev uses only acrylics on canvas, and
                        he believes that the ideas he expresses through his artwork are generated during the actual
                        creative process. His art investigates and captures the life and psychology of people.

                        Aleksandr Ilichev was born in 1958, in Russia, where he graduated from the painting department
                        of the Novoaltaysk Art College in Russia as well as the ceramics department of the Art Institute
                        in Krasnoyarsk, Russia. Since 1990 he has been a member of the Russia Union of Artists. Ilichev
                        exhibited his works in the USA, Russia, Canada, Switzerland, Spain.
                    </text>
                </div>

                <div className={`pt-5`} style={{paddingLeft: '45px'}}>
                    <text style={{fontSize: '18px', fontWeight: 400}}>
                        All Artworks By Dinuth Dheerka
                    </text>
                </div>

                <div className={`pt-3`}>
                    <ArtworkListContainer/>
                </div>
            </div>
            {/*<ArtworkListContainer/>*/}
            {/*<ArtworkView/>*/}
            {/*<div className={`d-flex p-4 gap-5 w-100`} style={{marginTop:'50px',marginLeft:'20px'}}>*/}

            {/*    <div className={`d-flex flex-column gap-3`} style={{width:'65%'}}>*/}

            {/*        <div className={`pb-3`} style={{borderBottom: '1px solid rgb(222,222,222)'}}>*/}
            {/*            <h5 style={{fontWeight: 500, padding: 0, margin: 0}}>Shopping Cart</h5>*/}
            {/*        </div>*/}

            {/*        /!*items div*!/*/}
            {/*        <div className={`d-flex flex-column`}>*/}

            {/*            <div style={{borderBottom: '1px solid rgb(222,222,222)'}}*/}
            {/*                 className={`justify-content-start pt-4 pb-4  d-flex w-100 flex-row`}>*/}

            {/*                <div className={`d-flex gap-3`} style={{width: '50%'}}>*/}
            {/*                    <div className={``}>*/}
            {/*                        <img*/}
            {/*                            style={{borderRadius: '5px'}}*/}
            {/*                            border={'none'}*/}
            {/*                            height={'120px'}*/}
            {/*                            width={'120px'}*/}
            {/*                            src={'https://www.artmajeur.com/medias/mini/y/u/yuehua-he/artwork/17486398_01-rakshasa-kingdom.jpg'}*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                    <div className={`d-flex gap-1 flex-column align-items-start justify-content-center`}>*/}
            {/*                        <text><b>"Rakshasa Kingdom"</b></text>*/}
            {/*                        <text>Yahu Hee</text>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className={`d-flex justify-content-center align-items-center`}*/}
            {/*                     style={{width: '15%'}}>*/}
            {/*                    <div className={`d-flex gap-3 align-items-center`}>*/}
            {/*                        <button style={{*/}
            {/*                            // borderRadius: '10px',*/}
            {/*                            width: '30px',*/}
            {/*                            // border: 'none',*/}
            {/*                            border: '1px solid rgb(222,222,222)',*/}
            {/*                            backgroundColor: 'rgba(246,246,246,0.85)'*/}
            {/*                        }}>-*/}
            {/*                        </button>*/}
            {/*                        <small>1</small>*/}
            {/*                        <button style={{*/}
            {/*                            width: '30px',*/}
            {/*                            // borderRadius: '10px',*/}
            {/*                            // border: 'none',*/}
            {/*                            border: '1px solid rgb(222,222,222)',*/}
            {/*                            backgroundColor: 'rgba(246,246,246,0.85)'*/}
            {/*                        }}>+*/}
            {/*                        </button>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className={`d-flex justify-content-center align-items-center`}*/}
            {/*                     style={{width: '25%'}}>*/}
            {/*                    <text><b>LKR 1000,000.00</b></text>*/}
            {/*                </div>*/}
            {/*                <div className={`d-flex justify-content-center align-items-center`}*/}
            {/*                     style={{width: '10%'}}>*/}
            {/*                    <button style={{*/}
            {/*                        fontSize: '12px',*/}
            {/*                        height: '30px',*/}
            {/*                        border: '1px solid black',*/}
            {/*                        backgroundColor: 'transparent'*/}
            {/*                    }}>Remove*/}
            {/*                    </button>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div style={{borderBottom: '1px solid rgb(222,222,222)'}}*/}
            {/*                 className={`justify-content-start pt-4 pb-4  d-flex w-100 flex-row`}>*/}

            {/*                <div className={`d-flex gap-3`} style={{width: '50%'}}>*/}
            {/*                    <div className={``}>*/}
            {/*                        <img*/}
            {/*                            style={{borderRadius: '5px'}}*/}
            {/*                            border={'none'}*/}
            {/*                            height={'120px'}*/}
            {/*                            width={'120px'}*/}
            {/*                            src={'https://www.artmajeur.com/medias/mini/y/u/yuehua-he/artwork/17486398_01-rakshasa-kingdom.jpg'}*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                    <div className={`d-flex gap-1 flex-column align-items-start justify-content-center`}>*/}
            {/*                        <text><b>"Rakshasa Kingdom"</b></text>*/}
            {/*                        <text>Yahu Hee</text>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className={`d-flex justify-content-center align-items-center`}*/}
            {/*                     style={{width: '15%'}}>*/}
            {/*                    <div className={`d-flex gap-3 align-items-center`}>*/}
            {/*                        <button style={{*/}
            {/*                            // borderRadius: '10px',*/}
            {/*                            width: '30px',*/}
            {/*                            // border: 'none',*/}
            {/*                            border: '1px solid rgb(222,222,222)',*/}
            {/*                            backgroundColor: 'rgba(246,246,246,0.85)'*/}
            {/*                        }}>-*/}
            {/*                        </button>*/}
            {/*                        <small>1</small>*/}
            {/*                        <button style={{*/}
            {/*                            width: '30px',*/}
            {/*                            // borderRadius: '10px',*/}
            {/*                            // border: 'none',*/}
            {/*                            border: '1px solid rgb(222,222,222)',*/}
            {/*                            backgroundColor: 'rgba(246,246,246,0.85)'*/}
            {/*                        }}>+*/}
            {/*                        </button>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className={`d-flex justify-content-center align-items-center`}*/}
            {/*                     style={{width: '25%'}}>*/}
            {/*                    <text><b>LKR 1000,000.00</b></text>*/}
            {/*                </div>*/}
            {/*                <div className={`d-flex justify-content-center align-items-center`}*/}
            {/*                     style={{width: '10%'}}>*/}
            {/*                    <button style={{*/}
            {/*                        fontSize: '12px',*/}
            {/*                        height: '30px',*/}
            {/*                        border: '1px solid black',*/}
            {/*                        backgroundColor: 'transparent'*/}
            {/*                    }}>Remove*/}
            {/*                    </button>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div style={{borderBottom: '1px solid rgb(222,222,222)'}}*/}
            {/*                 className={`justify-content-start pt-4 pb-4  d-flex w-100 flex-row`}>*/}

            {/*                <div className={`d-flex gap-3`} style={{width: '50%'}}>*/}
            {/*                    <div className={``}>*/}
            {/*                        <img*/}
            {/*                            style={{borderRadius: '5px'}}*/}
            {/*                            border={'none'}*/}
            {/*                            height={'120px'}*/}
            {/*                            width={'120px'}*/}
            {/*                            src={'https://www.artmajeur.com/medias/mini/y/u/yuehua-he/artwork/17486398_01-rakshasa-kingdom.jpg'}*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                    <div className={`d-flex gap-1 flex-column align-items-start justify-content-center`}>*/}
            {/*                        <text><b>"Rakshasa Kingdom"</b></text>*/}
            {/*                        <text>Yahu Hee</text>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className={`d-flex justify-content-center align-items-center`}*/}
            {/*                     style={{width: '15%'}}>*/}
            {/*                    <div className={`d-flex gap-3 align-items-center`}>*/}
            {/*                        <button style={{*/}
            {/*                            border: '1px solid rgb(222,222,222)',*/}
            {/*                            // borderRadius: '10px',*/}
            {/*                            width: '30px',*/}
            {/*                            // border: 'none',*/}
            {/*                            backgroundColor: 'rgba(246,246,246,0.85)'*/}
            {/*                        }}>-*/}
            {/*                        </button>*/}
            {/*                        <small>1</small>*/}
            {/*                        <button style={{*/}
            {/*                            border: '1px solid rgb(222,222,222)',*/}
            {/*                            width: '30px',*/}
            {/*                            // borderRadius: '10px',*/}
            {/*                            // border: 'none',*/}
            {/*                            backgroundColor: 'rgba(246,246,246,0.85)'*/}
            {/*                        }}>+*/}
            {/*                        </button>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className={`d-flex justify-content-center align-items-center`}*/}
            {/*                     style={{width: '25%'}}>*/}
            {/*                    <text><b>LKR 1000,000.00</b></text>*/}
            {/*                </div>*/}
            {/*                <div className={`d-flex justify-content-center align-items-center`}*/}
            {/*                     style={{width: '10%'}}>*/}
            {/*                    <button style={{*/}
            {/*                        fontSize: '12px',*/}
            {/*                        height: '30px',*/}
            {/*                        border: '1px solid black',*/}
            {/*                        backgroundColor: 'transparent'*/}
            {/*                    }}>Remove*/}
            {/*                    </button>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*        </div>*/}

            {/*    </div>*/}

            {/*    /!*payment*!/*/}
            {/*    <div style={{width: '30%',paddingTop:'37px'}}*/}
            {/*         className={`gap-4 d-flex justify-content-start align-items-center flex-column`}>*/}

            {/*        <div className={`p-5 d-flex flex-column w-100`}*/}
            {/*             style={{border: '1px solid rgb(222,222,222)',backgroundColor: 'rgba(246,246,246,0.85)'}}>*/}

            {/*            <div style={{borderBottom: '1px solid rgb(222,222,222)'}}*/}
            {/*                 className={`pb-4 w-100 d-flex flex-row`}>*/}
            {/*                <div className={`w-50`} style={{color: '#343434', fontWeight: 300}}>Subtotal</div>*/}
            {/*                <div style={{fontWeight: 400}} className={`d-flex justify-content-end w-50`}>*/}
            {/*                    <text>LKR 200.00</text>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div style={{borderBottom: '1px solid rgb(222,222,222)'}}*/}
            {/*                 className={`pb-4 pt-4 w-100 d-flex flex-row`}>*/}
            {/*                <div className={`w-50`} style={{color: '#343434', fontWeight: 300}}>Tax</div>*/}
            {/*                <div style={{fontWeight: 400}} className={`d-flex justify-content-end w-50`}>*/}
            {/*                    <text>LKR 20.00</text>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div style={{}} className={`pb-2 pt-4 w-100 align-items-center d-flex flex-row`}>*/}
            {/*                <div className={`w-50`} style={{fontWeight: 500}}>*/}
            {/*                    <text>Order Total</text>*/}
            {/*                </div>*/}
            {/*                <div style={{fontWeight: 500, fontSize: '17px'}}*/}
            {/*                     className={`d-flex justify-content-end w-50`}>*/}
            {/*                    <text>LKR 220.00</text>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*        </div>*/}

            {/*        /!*button*!/*/}
            {/*        <div className={`w-100 d-flex justify-content-center align-items-center`}>*/}
            {/*            <button style={{*/}
            {/*                border: 'none',*/}
            {/*                height: '50px',*/}
            {/*                width: '100%',*/}
            {/*                backgroundColor: '#1e1e1e',*/}
            {/*                color: 'white'*/}
            {/*            }}>Checkout*/}
            {/*            </button>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default App