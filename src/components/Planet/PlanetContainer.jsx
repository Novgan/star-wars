import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { requestCurrentPlanetThunkCreator, clearStore } from "../../Redux/planet-reducer";
import Preloader from "../Common/Preloader/Preloader";
import NotFoundComponent from "../Common/NotFound/NotFound";
import Planet from "./Planet";

const PlanetContainer = props => {
    let id = props.match.params.id;
    useEffect(() => {
        props.requestCurrentPlanetThunkCreator(id);
        return () => {
            props.clearStore();
        }
    }, [])

    return <>
        {(props.currentPlanet.info === undefined || props.currentPlanet.residentsName === undefined)
            ? <Preloader />
            : (props.currentPlanet.info === null || props.currentPlanet.residentsName[0] === null) ? <NotFoundComponent /> : <Planet currentPlanet={props.currentPlanet} id={id} />}
    </>

}

const mapStateToProps = state => ({
    currentPlanet: state.currentPlanet.currentPlanet
})

let WithUrlDataContainerComponent = withRouter(PlanetContainer);

export default connect(mapStateToProps, { requestCurrentPlanetThunkCreator, clearStore })(WithUrlDataContainerComponent);