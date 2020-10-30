import React from "react";
import Preloader from "../Common/Preloader";
import classes from "./card.module.css";
import def from "../../assets/images/def.jpg"
import { NavLink } from "react-router-dom";

const Card = (props) => {
    console.log(props.planets);
    let planets = props.planets;
    return (
        <>
            {!planets ? <Preloader /> : planets.map(u => {
                let id = u.url.replace(/\D+/g, "");
                return <div className={classes.card}>
                    <NavLink to={`/planet/${id}`}>
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg` || def} alt={u.name} style={{ width: 100 + "%" }} />
                        <div className={classes.container}>
                            <h4>Name: {u.name}</h4>
                            <div>Climate: {u.climate}</div>
                            <div>Population: {u.population}</div>
                        </div>
                    </NavLink>
                </div>
            })
            }
        </>
    )
}

export default Card;