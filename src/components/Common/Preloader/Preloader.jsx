import React from "react";
import classes from './preloader.module.css';

const Preloader = () => {
    return (
        <div className={classes.loader}>
            <img src="/loader.svg" alt="loader"/>
        </div>
    )
};

export default Preloader;