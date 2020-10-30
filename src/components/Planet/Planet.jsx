import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { requestCurrentPlanet } from "../../Redux/app-reducer";
import Preloader from "../Common/Preloader";
import classes from './planet.module.css';

const Planet = props => {

    useEffect(() => {
        let id = props.match.params.id;
        props.requestCurrentPlanet(id);
    }, [])

    return (
        <div>
            <div>Name: {props.currentPlanet.name}</div>
            <div>Rotation_period: {props.currentPlanet.rotation_period}</div>
            <div>Climate: {props.currentPlanet.climate}</div>
            <div>Gravity: {props.currentPlanet.gravity}</div>
            <div>Terrain: {props.currentPlanet.terrain}</div>
            <div>Population: {props.currentPlanet.population}</div>
            {/* <div>Residents: {props.currentPlanet.residents}</div> */}
        </div>
    )
}

const mapStateToProps = state => ({
    currentPlanet: state.app.currentPlanet
})

let WithUrlDataContainerComponent = withRouter(Planet);

export default connect(mapStateToProps, { requestCurrentPlanet })(WithUrlDataContainerComponent);