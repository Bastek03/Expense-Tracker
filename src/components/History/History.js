import React, {Component} from "react";
import style from './History.module.css';

class History extends Component {

    state = {
        history: []
    }

    static getDerivedStateFromProps(props, current_state){
        if (current_state.id !== props.id) {
            return {
                history: [...current_state.history, {message: props.message, amount: props.amount, key: props.id, style:props.style}]
            }
          }
        return null
    }

    
    render(){

        const history = this.state.history.map((his) => {
            return(
            <div className={style.container} style={{borderRight: '12px solid '+his.style}} key={his.key}>
                <h3 className={style.item1}>{his.message}</h3>
                <h3 className={style.item2}>{his.amount}$</h3>
            </div>
            );
        });

        return(
            <div>
                <h3 style={{textAlign: 'left'}}>History</h3>
                <hr></hr>
                {history}
    
            </div>
        );
    }
    
}

export default History;