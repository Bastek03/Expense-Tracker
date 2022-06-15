import React from "react";
import style from './Balance.module.css';


const balance = props => {

    return(
        <div>

            <div className={style.balance}>
                <h3 style={{margin: 0}}>Your balance</h3>
                <h2 style={{margin: 0}}>${props.balance}</h2>
            </div>

            <div className={style.container}>

                <div className= {style.tile}>
                    <h2 style={{marginBottom: '5px'}}>Income</h2>
                    <h3 className= {style.cash}>${props.income}</h3>
                </div>

                <div className= {style.verticalLine}></div>

                <div className= {style.tile}>
                    <h2 style={{marginBottom: '5px'}}>Expense</h2>
                    <h3 className= {style.cash} style={{color: 'red'}}>${props.expense}</h3>
                </div>

            </div>

        </div>
    );
}


export default balance;
