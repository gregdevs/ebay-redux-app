import React from 'react';
import Image from '../Image';
import propTypes from 'prop-types';
import AuctionDetail from '../../common/AuctionDetail';
import styles from './AuctionItem.module.scss';
import { Link } from "react-router-dom";


const AuctionItem = ( props ) => {
    const { imageSrc, title, condition, timeLeft, id, modType, currentPrice, linkoff } = props;

    return(
        <React.Fragment>
            {!linkoff ?  (
                <Link to={`/item/${id}`}>
                    <div className={`${styles.auctionItem}`}>              
                        <Image imageSrc={ imageSrc } modType={modType}/>
                        <AuctionDetail title={title} condition={condition} timeLeft={timeLeft} currentPrice={currentPrice}/>
                    </div> 
                </Link> 
            ) : (
                <div className={`${styles.auctionItem}`}>              
                    <Image imageSrc={ imageSrc } modType={modType}/>
                    <AuctionDetail title={title} condition={condition} timeLeft={timeLeft} currentPrice={currentPrice}/>
                </div> 
            )    
            }
        </React.Fragment>
    )
}
AuctionDetail.propTypes = {
    linkoff: propTypes.bool
}
AuctionDetail.defaultProps = {
    linkoff:  false
}
export default AuctionItem;