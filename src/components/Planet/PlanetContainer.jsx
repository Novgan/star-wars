import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { requestCurrentPlanetThunkCreator } from "../../Redux/planet-reducer";
import Planet from "./Planet";

const PlanetContainer = props => {
    let id = props.match.params.id;
    useEffect(() => {
        props.requestCurrentPlanetThunkCreator(id);
    }, [])

    return  <>
        <Planet currentPlanet={props.currentPlanet} id={id}/>
    </>

}

const mapStateToProps = state => ({
    currentPlanet: state.currentPlanet.currentPlanet
})

let WithUrlDataContainerComponent = withRouter(PlanetContainer);

export default connect(mapStateToProps, { requestCurrentPlanetThunkCreator })(WithUrlDataContainerComponent);