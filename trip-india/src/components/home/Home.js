import React, { Fragment } from 'react';
import Search from './Search.js';
import QuickSearch from './QuickSearch';
// import Details from '../details/Detailsdisplay';

const Home = () => {
    return (
        <Fragment >
            <Search />
            <QuickSearch />
            {/* <Details/> */}
        </Fragment>
    )
};
export default Home;

