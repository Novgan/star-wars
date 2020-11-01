import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

import { requestPlanets } from "../../Redux/card-reducer";
import classes from './pagination.module.css';

const Pagination = props => {
    let pagesCount = Math.ceil(props.count / props.length);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    // className={props.currentPage === u ? classes.selectedPage : undefined}
    return <div>
        <div className={classes.wrapper}>
            {pages.map((u, i) => {
                return <NavLink to={`/${u}`} key={i} onClick={() => {
                    props.requestPlanets(u)
                }}>
                    <span >{u}</span>
                </NavLink>
            })}
        </div>
    </div>

}

/* let mapStateToProps = state => ({
    currentPage: state.app.currentPage
}) */

export default connect(null, { requestPlanets })(withRouter(Pagination));