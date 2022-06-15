import React from 'react';
import style from './Header.module.css';

const header = () => {



    return(
        <div className = {style.header}>
            <h1>Expense Tracker</h1>
        </div>
    );
}

export default header;