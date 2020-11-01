import React from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../Common/Preloader/Preloader";
import CustomImage from '../Common/Image/Image';
import defaultImage from '../../assets/images/defaultPlanet.jpg';
import classes from "./card.module.css";

const Card = (props) => {
    let planets = props.planets;
    return (
        <>
            {!props.planets ? <Preloader /> : <div className={classes.wrapper}>
                {planets.map((u, i) => {
                    let id = u.url.replace(/\D+/g, "");
                    return <div className={classes.card} key={i}>
                        <NavLink to={`/planet/${id}`} >
                            {/* <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} onError={require('../../assets/images/defaultPlanet.jpg')}/> */}
                            <CustomImage className={classes.card__img} src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} srcOnError={defaultImage} alt={u.name} />
                            <div className={classes.card__container}>
                                <h4>Name: {u.name}</h4>
                                <div>Climate: {u.climate}</div>
                                <div>Population: {u.population}</div>
                            </div>
                        </NavLink>
                    </div>
                })}
            </div>

            }
        </>
    )
}

export default Card;