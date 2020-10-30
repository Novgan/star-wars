import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { requestPlanets } from "../../Redux/app-reducer";

const CardContainer = props => {

    useEffect(() => {
        props.requestPlanets();
    }, [])

    return (
        <>
            <Card planets={props.planets.results} />
        </>
    )
}

let mapStateToProps = state => ({
    planets: state.app.planets
})

export default connect(mapStateToProps, { requestPlanets })(CardContainer);