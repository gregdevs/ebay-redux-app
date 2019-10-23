import React from 'react';
import styles from '../FeaturedAuctionPage.module.scss';
import AuctionItem from '../../../common/AuctionItem';

const FeatureModule = (props) => {
    const { featuredItemDetail } = props;
    return(
     <div className={styles.featuredModule}>
        <div className={styles.featureFix}>
            <h1>Featured Item</h1>
            <AuctionItem 
                currentPrice={ featuredItemDetail.currentPrice }  
                modType={'featured'} id={featuredItemDetail.id} 
                imageSrc={featuredItemDetail.imageSrc} 
                title={ featuredItemDetail.title } 
                condition={ featuredItemDetail.conditionDisplayName } 
                timeLeft={ featuredItemDetail.timeLeft }  
            />
        </div>
    </div>

    )
}

export default FeatureModule;