import React from "react";
import notFound from "../../../assets/images/notFound.jpg"
import classes from './notFound.module.css';

const NotFoundComponent = () => {
    return (
        <div className={classes.notFound}>
            <img className={classes.notFound__img} src={notFound} alt="Not Found"/>
            <div className={classes.notFound__text}>NOT FOUND</div>
        </div>
    )
};

export default NotFoundComponent;