import React from 'react';
import Image from '../../../common/Image';
import AuctionDetail from '../../../common/AuctionDetail';
import styles from './AuctionItem.module.scss';
import {
    Link
  } from "react-router-dom";

const AuctionItem = ( props ) => {
    const { imageSrc, title, condition, timeLeft, id, modType, currentPrice } = props;
    return(
        <Link to={`/item/${id}`}>
            <div className={`${styles.auctionItem}`}>              
                <Image imageSrc={ imageSrc } modType={modType}/>
                <AuctionDetail title={title} condition={condition} timeLeft={timeLeft} currentPrice={currentPrice}/>
            </div> 
        </Link>
    )
}

export default AuctionItem;