import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { requestPlanets, clearStore } from "../../Redux/card-reducer";
import { setCurrentPage } from "../../Redux/pagination-reducer";
import classes from './pagination.module.css';

const Pagination = props => {
    let pagesCount = Math.ceil(props.count / props.length);
    let pages = [];
    let next = Number(props.currentPage) + 1;
    let previous = Number(props.currentPage) - 1;

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div className={classes.wrapper}>
        <NavLink className={`${classes.arrowLeft} ${previous <= 0 && classes.disableArrow}`} to={`/${previous}`} onClick={() => {
                    props.requestPlanets(previous);
                    props.setCurrentPage(previous);
                    props.clearStore();
                }}>
        </NavLink>
        <div className={classes.pagesList}>
            {pages.map((u, i) => {
                return <NavLink to={`/${u}`} className={Number(props.currentPage) === u ? classes.selectedPage : undefined} key={i} onClick={() => {
                    props.requestPlanets(u);
                    props.setCurrentPage(u);
                    props.clearStore();
                }}>
                    <span>{u}</span>
                </NavLink>
            })}
        </div>
        <NavLink className={`${classes.arrowRight} ${Number(next) > Number(pagesCount) && classes.disableArrow}`} to={`/${next}`} onClick={() => {
                    props.requestPlanets(next);
                    props.setCurrentPage(next);
                    props.clearStore();
                }}>
        </NavLink>
    </div>

}

let mapStateToProps = state => ({
    currentPage: state.pagination.currentPage
})

export default connect(mapStateToProps, { requestPlanets, setCurrentPage, clearStore })(Pagination);