import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import styles from './filterCollaps.module.css';

// eslint-disable-next-line react/prop-types
const FilterCollapse = ({txt}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                // aria-controls="example-collapse-text"
                aria-expanded={open}
                className={`d-flex align-items-center justify-content-evenly ${styles.collapseButton}`}
            >
                {/* eslint-disable-next-line react/prop-types */}
                {txt.toUpperCase()}
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <div>
                        <div><input type={"radio"}/></div>
                        <div><input type={"radio"}/></div>
                        <div><input type={"radio"}/></div>
                        <div><input type={"radio"}/></div>
                        <div><input type={"radio"}/></div>
                    </div>
                </div>
            </Collapse>
        </>
    );
}

export default FilterCollapse;