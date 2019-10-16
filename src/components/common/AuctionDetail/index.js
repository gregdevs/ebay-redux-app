import React from 'react';
import Title from '../Title';
import styles from './AuctionDetail.module.scss';

const AuctionDetail = (  props ) => {
    const { title, condition, timeLeft, currentPrice } = props;
    
    return(
        <div>
            <Title title={title} size={'lg'}/>
            <ul className={styles.auctionList}>
                <li>Condition: <span className={styles.condition}>{condition}</span> </li>
                <li>Time left: { timeLeft} </li> 
                <li>Current price: ${ currentPrice } </li>          
            </ul>
        </div>
    )
}

export default AuctionDetail;