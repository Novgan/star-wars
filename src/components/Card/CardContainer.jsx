import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { requestPlanets } from "../../Redux/card-reducer";
import { setCurrentPage } from "../../Redux/pagination-reducer";
import Card from "./Card";
import Preloader from "../Common/Preloader/Preloader";
import NotFoundComponent from "../Common/NotFound/NotFound";
import Pagination from "../Pagination/Pagination";

const CardContainer = props => {
    useEffect(() => {
        props.requestPlanets(props.match.params.page);
        props.setCurrentPage(props.match.params.page || 1);
    }, [])

    return (
        <>
            {(props.planets.results === undefined) ? <Preloader /> : props.planets.results === null ? <NotFoundComponent /> : <>
                <Card planets={props.planets.results} />
                <Pagination length={!props.planets.results ? 0 : props.planets.results.length} count={props.planets.count} />
            </>}
        </>
    )
}

let mapStateToProps = state => ({
    planets: state.planets.planets
})

let WithUrlDataContainerComponent = withRouter(CardContainer);

export default connect(mapStateToProps, { requestPlanets, setCurrentPage })(WithUrlDataContainerComponent);