import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { requestPlanets } from "../../Redux/card-reducer";
import Pagination from "../Pagination/Pagination";
import { withRouter } from "react-router-dom";

const CardContainer = props => {
    useEffect(() => {
        props.requestPlanets(props.match.params.page);
    }, [])

    return (
        <>
            <Card planets={props.planets.results} />
            <Pagination length={props.planets.results === undefined ? 0 : props.planets.results.length} count={props.planets.count} />
        </>
    )
}

let mapStateToProps = state => ({
    planets: state.planets.planets
})

let WithUrlDataContainerComponent = withRouter(CardContainer);

export default connect(mapStateToProps, { requestPlanets })(WithUrlDataContainerComponent);