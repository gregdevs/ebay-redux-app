import React from 'react';
import styles from '../FeaturedAuctionPage.module.scss';

const RelatedModule = (props) => {
    const { sortButtons, relatedItemsMarkup } = props; 
    return(
        <div className={styles.relatedModule}>
            <div className={styles.relatedHeader}>
                <h2>Related Items</h2>
                <div className={styles.buttonHolder}>
                    {sortButtons}
                </div>          
            </div>
            <ul className={styles.relatedList}>
                { relatedItemsMarkup }  
            </ul>
        </div>      
    )
} 

export default RelatedModule;