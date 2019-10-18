import React from 'react';
import CommonMarkup from '../CommonMarkup';
import styles from './AuctionDetail.module.scss';

const AuctionDetail = (  props ) => {
    const { title, condition, timeLeft, currentPrice } = props;
    const size = 'lg';
    return(
        <div>
            <CommonMarkup render={ () => (
              <span className={`${styles.title} ${styles[size]}`}>{title}</span>   
            )} />
            <ul className={styles.auctionList}>
                <li>Condition: <span className={styles.condition}>{condition}</span> </li>
                <li>Time left: { timeLeft} </li> 
                <li>Current price: ${ currentPrice } </li>          
            </ul>
        </div>
    )
}

export default AuctionDetail;