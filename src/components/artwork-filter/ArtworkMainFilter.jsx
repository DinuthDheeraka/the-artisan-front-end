import React, { useState } from 'react';

const ArtworkMainFilter = ({ updateShowFilter, updateFilter }) => {
    // State variables
    const [artistName, setArtistName] = useState('');
    const [category, setCategory] = useState('');
    const [style, setStyle] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    // Function to handle input changes
    const handleInputChange = (e, setterFunction) => {
        setterFunction(e.target.value);
    };

    return (
        <div style={{ backgroundColor: '#f5f4f2', height: '732px', width: '374px' }} className={`border d-flex flex-column p-3 gap-4`}>
            <div className={`d-flex align-items-center w-100`}>
                <div className={`d-flex align-items-start w-50 justify-content-start`}><text style={{ fontWeight: 550, fontSize: '14px' }}>FILTER</text></div>
                <div className={`d-flex align-items-end w-50 justify-content-end`}>
                    <button
                        onClick={() => {
                            updateShowFilter(false);
                        }}
                        style={{ border: '1px solid #deddd9', fontWeight: 550, color: '#111111', backgroundColor: 'white', width: '32px' }}>x</button>
                </div>
            </div>

            <div style={{ marginTop: '42px' }} className={`d-flex flex-column gap-2`}>
                <div></div>
                <div>
                    <input
                        placeholder='Artist name'
                        style={{ borderRadius: '0px', height: '50px' }}
                        className={`form-control`}
                        value={artistName}
                        onChange={(e) => handleInputChange(e, setArtistName)}
                    />
                </div>
            </div>

            <div className={`d-flex flex-column gap-2`}>
                <div></div>
                <div>
                    <select
                        style={{ borderRadius: '0px', height: '50px' }}
                        className={`form-select`}
                        value={category}
                        onChange={(e) => handleInputChange(e, setCategory)}
                    >
                        <option value={""}>Select category</option>
                        <option value={"painting"}>Painting</option>
                        <option value={"Drawing"}>Drawing</option>
                        <option value={"Sculpture"}>Sculpture</option>
                        <option value={"Wall Art"}>Wall Art</option>
                        <option value={"Handicraft"}>Handicraft</option>
                    </select>
                </div>
            </div>

            <div className={`d-flex flex-column gap-2`}>
                <div></div>
                <div>
                    <select
                        style={{ borderRadius: '0px', height: '50px' }}
                        className={`form-select`}
                        value={style}
                        onChange={(e) => handleInputChange(e, setStyle)}
                    >
                        <option value="">Select style</option>
                        <option value="Abstract">Abstract</option>
                        <option value="Animal">Animal</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Everyday Life">Everyday Life</option>
                        <option value="History">History</option>
                        <option value="Humor">Humor</option>
                        <option value="Landscape">Landscape</option>
                        <option value="Love">Love</option>
                        <option value="Portrait">Portrait</option>
                        <option value="Urban">Urban</option>
                        <option value="World Culture">World Culture</option>
                    </select>
                </div>
            </div>

            <div className={`d-flex flex-column gap-2`}>
                <div></div>
                <div className={`d-flex gap-2`}>
                    <input
                        type='number'
                        placeholder='Min price'
                        style={{ borderRadius: '0px', height: '50px' }}
                        className={`form-control`}
                        value={minPrice}
                        onChange={(e) => handleInputChange(e, setMinPrice)}
                    />
                    <input
                        type='number'
                        placeholder='Max price'
                        style={{ borderRadius: '0px', height: '50px' }}
                        className={`form-control`}
                        value={maxPrice}
                        onChange={(e) => handleInputChange(e, setMaxPrice)}
                    />
                </div>
            </div>

            <div style={{ marginTop: '240px' }} className={`d-flex gap-2`}>
                <div className={`w-50`}>
                    <button
                        onClick={() => {

                            setArtistName('');
                            setCategory('');
                            setStyle('');
                            setMinPrice('');
                            setMaxPrice('');

                            updateFilter({
                                artistName: "",
                                category: "",
                                style: "",
                                minPrice: "",
                                maxPrice: ""
                            });
                        }}
                        style={{ border: '1px solid #999999', backgroundColor: 'transparent', height: '40px', width: '100%' }}>Reset</button>
                </div>
                <div className={`w-50`}>
                    <button
                        onClick={() => {
                            updateFilter({
                                artistName, category, style, minPrice, maxPrice
                            });
                        }}
                        style={{ color: 'white', backgroundColor: '#111111', border: 'none', borderRadius: '0px', height: '40px', width: '100%' }}>Apply</button>
                </div>
            </div>
        </div>
    );
};

export default ArtworkMainFilter;
