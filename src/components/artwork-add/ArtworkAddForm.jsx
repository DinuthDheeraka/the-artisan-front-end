import {Form} from "react-bootstrap";

const ArtworkAddForm = () => {

    return (
        <div className={`d-flex justify-content-center my-5`}>

            <div className={` d-flex flex-column gap-4`}
                 style={{backgroundColor: 'rgb(255,255,255)', width: '60vw'}}>

                <div className={`p-3 d-flex flex-column gap-3`}>
                    <div style={{borderBottom: '1px solid #d5d5d5', paddingBottom: '20px'}}>
                        <text style={{color: '#2a2525', fontWeight: 450, fontSize: '18px'}}>Image File</text>
                    </div>

                    <div className={`d-flex p-3 gap-2 flex-column justify-content-center`}>
                        <img alt={''} height={'300px'} width={'320px'}
                             src={'https://semantic-ui.com/images/wireframe/white-image.png'}
                             className={`border`}
                             style={{
                                 backgroundPosition: 'center',
                                 backgroundSize: 'cover',
                                 objectFit: 'cover'
                             }}/>
                        <input type={"file"}/>
                    </div>
                </div>

                <div className={`p-3 d-flex flex-column gap-3`}>

                    <div style={{borderBottom: '1px solid #d5d5d5', paddingBottom: '20px'}}>
                        <text style={{color: '#2a2525', fontWeight: 450, fontSize: '18px'}}>Additional View</text>
                    </div>

                    <div className={`d-flex flex-column p-3 justify-content-start gap-4`}>

                        <div className={`d-flex gap-2 flex-column`}>
                            <img alt={''}
                                 src={'https://semantic-ui.com/images/wireframe/white-image.png'}
                                 height={'200px'} width={'220px'} className={`border`} style={{
                                border: 'none',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                objectFit: 'cover'
                            }}/>
                            <input className={``} style={{width: ""}} type={"file"}/>
                        </div>

                        <div className={`d-flex gap-2 flex-column`}>
                            <img
                                alt={''}
                                 src={'https://semantic-ui.com/images/wireframe/white-image.png'}
                                 height={'200px'} width={'220px'} className={`border`} style={{
                                border: 'none',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                objectFit: 'cover'
                            }}/>
                            <input className={``} style={{width: ""}} type={"file"}/>
                        </div>

                        <div className={`d-flex gap-2 flex-column`}>
                            <img alt={''}
                                 src={'https://semantic-ui.com/images/wireframe/white-image.png'}
                                 height={'200px'} width={'220px'} className={`border`} style={{
                                border: 'none',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                objectFit: 'cover'
                            }}/>
                            <input className={``} style={{width: ""}} type={"file"}/>
                        </div>

                    </div>
                </div>

                <div className={`p-3 d-flex flex-column gap-3`}>

                    <div style={{borderBottom: '1px solid #d5d5d5', paddingBottom: '20px'}}>

                        <text style={{color: '#2a2525', fontWeight: 450, fontSize: '18px'}}>Info</text>
                    </div>

                    <div className={`d-flex p-3  flex-column justify-content-center gap-4`}>

                        <div className={`d-flex justify-content-start align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-25`}>Title</text>
                            <input className={`w-75 form-control`}/>
                        </div>
                        <div className={`d-flex justify-content-start align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-25`}>Year of creation</text>
                            <input type={'number'} style={{width: '200px'}} className={`form-control`}/>
                        </div>

                    </div>

                </div>


                <div className={`p-3 d-flex flex-column gap-3`}>
                    <div style={{borderBottom: '1px solid #d5d5d5', paddingBottom: '20px'}}>
                        <text style={{color: '#2a2525', fontWeight: 450, fontSize: '18px'}}>Classification</text>
                    </div>

                    <div className={`p-3 d-flex  flex-column justify-content-center gap-4`}>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-25`}>Category</text>
                            <div className={`d-flex w-100`}>
                                <select style={{width: '400px'}} className={`form-select`}></select>
                            </div>
                        </div>


                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-25`}>Medium</text>
                            <div className={`d-flex w-100`}>
                                <input style={{width: '400px'}} className={`form-control`}></input>
                            </div>
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-25`}>Support or surface</text>
                            <div className={`d-flex w-100`}>
                                <select style={{width: '400px'}} className={`form-select`}></select>
                            </div>
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-25`}>Number of copies</text>
                            <div className={`d-flex w-100`}>
                                <input type={'number'} style={{width: '220px'}} className={`form-control`}></input>
                            </div>
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-25`}>Number of copies for sale</text>
                            <div className={`d-flex w-100`}>
                                <input type={'number'} style={{width: '220px'}} className={`form-control`}></input>
                            </div>
                        </div>

                    </div>

                </div>


                <div className={`p-3 d-flex flex-column gap-3`}>
                    <div style={{borderBottom: '1px solid #d5d5d5', paddingBottom: '20px'}}>

                        <text style={{color: '#2a2525', fontWeight: 450, fontSize: '18px'}}>Presentation</text>
                    </div>

                    <div className={`d-flex p-3  flex-column justify-content-center gap-4`}>
                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-50`}>This artwork can be displayed outdoor
                            </text>
                            <
                                Form.Check
                                label={'Yes'}
                            />
                            <
                                Form.Check
                                label={'No'}
                            />
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-50`}>This artwork is intended to be displayed
                                on a wall?
                            </text>
                            <
                                Form.Check
                                label={'Yes'}
                            />
                            <
                                Form.Check
                                label={'No'}
                            />
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-50`}>Ready to hang</text>
                            <
                                Form.Check
                                label={'Yes'}
                            />
                            <
                                Form.Check
                                label={'No'}
                            />
                        </div>
                    </div>

                </div>


                <div className={`p-3 d-flex flex-column gap-3`}>
                    <div style={{borderBottom: '1px solid #d5d5d5', paddingBottom: '20px'}}>
                        <text style={{color: '#2a2525', fontWeight: 450, fontSize: '18px'}}>Framing</text>
                    </div>

                    <div className={`p-3 d-flex  flex-column justify-content-center gap-4`}>
                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-25`}>Artwork is framed</text>
                            <
                                Form.Check
                                label={'Yes'}
                            />
                            <
                                Form.Check
                                label={'No'}
                            />
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-25`}>Frame type</text>
                            <select style={{width: '300px'}} className={`form-select`}></select>
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-25`}>Frame height</text>
                            <input style={{width: '300px'}} className={`form-control`}/>
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-25`}>Frame width</text>
                            <input style={{width: '300px'}} className={`form-control`}/>
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-25`}>Frame thickness</text>
                            <input style={{width: '300px'}} className={`form-control`}/>
                        </div>

                    </div>

                </div>


                <div className={`p-3 d-flex flex-column gap-3`}>
                    <div style={{borderBottom: '1px solid #d5d5d5', paddingBottom: '20px'}}>
                        <text style={{color: '#2a2525', fontWeight: 450, fontSize: '18px'}}>Size</text>
                    </div>
                    <div className={`p-3 d-flex  flex-column justify-content-center gap-4`}>
                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-25`}>Length unit</text>
                            <select style={{width: '300px'}} className={`form-select`}></select>
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-25`}>Height</text>
                            <input style={{width: '300px'}} className={`form-control`}/>
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-25`}>Width</text>
                            <input style={{width: '300px'}} className={`form-control`}/>
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-25`}>Thickness</text>
                            <input style={{width: '300px'}} className={`form-control`}/>
                        </div>

                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-25`}>Weight</text>
                            <input style={{width: '300px'}} className={`form-control`}/>
                        </div>

                    </div>

                </div>


                <div className={`p-3 d-flex flex-column gap-3`}>
                    <div style={{borderBottom: '1px solid #d5d5d5', paddingBottom: '20px'}}>
                        <text style={{color: '#2a2525', fontWeight: 450, fontSize: '18px'}}>Sales</text>
                    </div>

                    <div className={`d-flex flex-column gap-2`}>
                        <div className={`p-2 d-flex  flex-column justify-content-center gap-4`}>
                            <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                                <text style={{fontWeight: 500}} className={`w-25`}>status</text>
                                <select style={{width: '300px'}} className={`form-select`}></select>
                            </div>
                        </div>

                        <div className={`p-2 d-flex  flex-column justify-content-center gap-4`}>
                            <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                                <text style={{fontWeight: 500}} className={`w-25`}>Price without shipping</text>
                                <input style={{width: '300px'}} className={`form-control`}></input>
                            </div>
                        </div>

                        <div className={`p-2 d-flex  flex-column justify-content-center gap-4`}>
                            <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                                <text style={{fontWeight: 500}} className={`w-25`}>Discount price</text>
                                <input style={{width: '300px'}} className={`form-control`}></input>
                            </div>
                        </div>
                    </div>

                </div>


                <div className={`p-3 d-flex flex-column gap-3`}>
                    <div style={{borderBottom: '1px solid #d5d5d5', paddingBottom: '20px'}}>
                        <text style={{color: '#2a2525', fontWeight: 450, fontSize: '18px'}}>About this Artwork</text>
                    </div>
                    <div className={`p-3 d-flex  flex-column justify-content-center gap-4`}>
                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-25`}>condition</text>
                            <select className={`form-select`}></select>
                        </div>
                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-25`}>description</text>
                            <textarea className={`border form-control`}/>
                        </div>
                        <div className={`gap-5 d-flex justify-content-center align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-25`}>style</text>
                            <select className={`form-select`}></select>
                        </div>
                        <div className={`gap-5 d-flex justify-content-start align-items-center`}>
                            <text style={{fontWeight: 500}} className={`w-25`}>keywords</text>
                            <input className={`border form-control`}/>
                        </div>
                    </div>

                </div>

                <div className={`d-flex  justify-content-end`}>
                    <div className={`w-25`}></div>
                    <div className={`d-flex w-75 align-items-center justify-content-end`}
                         style={{paddingRight: '30px'}}>
                        <button
                            style={{
                                width: '180px',
                                border: 'none',
                                backgroundColor: '#111111',
                                color: 'white',
                                height: '45px'
                            }}>Save
                        </button>
                    </div>
                </div>

                <div className={`d-flex justify-content-end`}>

                </div>

            </div>

        </div>
    );
}


export default ArtworkAddForm;