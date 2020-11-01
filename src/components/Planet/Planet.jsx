import React from "react";
import defaultImage from '../../assets/images/defaultPlanet.jpg';
import CustomImage from "../Common/Image/Image";
import Preloader from "../Common/Preloader/Preloader";
import classes from './planet.module.css';

const Planet = props => {
    return <>
        {!props.currentPlanet.info || !props.currentPlanet.residentsName ? <Preloader /> : <div className={classes.planet}>
            <CustomImage className={classes.planet__img} src={`https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`} srcOnError={defaultImage} alt={props.currentPlanet.info.name} />
            <ul className={classes.planet__description}>
                <li>Name: <span>{props.currentPlanet.info.name}</span></li>
                <li>Rotation_period: <span>{props.currentPlanet.info.rotation_period}</span></li>
                <li>Climate: <span>{props.currentPlanet.info.climate}</span></li>
                <li>Gravity: <span>{props.currentPlanet.info.gravity}</span></li>
                <li>Terrain: <span>{props.currentPlanet.info.terrain}</span></li>
                <li>Population: <span>{props.currentPlanet.info.population}</span></li>
                <li>Residents: <ul>
                    {props.currentPlanet.residentsName.map((u, i) => <li key={i}>{u}</li>)}</ul>
                </li>
            </ul>
        </div>
        }
    </>
}


export default Planet;