import React from 'react';

import Header from './Header';

const Layout = ({Children}) => {
    return (
        <div>
            <Header/>
            {Children}
        </div>
    )
}

export default Layout
