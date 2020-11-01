import React from "react";
import classes from './preloader.module.css';
import loader from '../../../assets/images/loader.svg';

const Preloader = () => {
    return (
        <div className={classes.loader}>
            <img src={loader} alt="loader"/>
        </div>
    )
};

export default Preloader;