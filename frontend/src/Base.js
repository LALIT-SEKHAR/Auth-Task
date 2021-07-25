import React from 'react';
import Header from './core/Header';

const Base = ({children}) => {
    return (
        <>
        <Header/>
        {children}
        </>
    );
};

export default Base;