import React from "react";
import { NavLink } from "react-router-dom";
import defaultImage from '../../assets/images/defaultPlanet.jpg';
import classes from "./card.module.css";
import CustomImage from '../Common/Image/Image';
import { planetPopulation } from "../../assets/scripts/planetPopulation";

const Card = (props) => {
    return (
        <>
            <div className={classes.wrapper}>
                {props.planets.map((u, i) => {
                    let id = u.url.replace(/\D+/g, "");
                    return <div className={classes.card} key={i}>
                        <NavLink to={`/planet/${id}`} >
                            <CustomImage className={classes.card__img} src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} srcOnError={defaultImage} alt={u.name} />
                            <div className={classes.card__container}>
                                <h4>Name: {u.name}</h4>
                                <div>Climate: {u.climate}</div>
                                <div>Population: {planetPopulation(u.population)}</div>
                            </div>
                        </NavLink>
                    </div>
                })}
            </div>
        </>
    )
}

export default Card;