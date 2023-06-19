import React from 'react';
import { Helmet } from 'react-helmet-async';


const PageTitle = ({pageTitle}) => {
    return (
        <Helmet>
            <title>{pageTitle}&nbsp;- Mahsez Online Shopping</title>
        </Helmet>
    );
};

export default PageTitle;