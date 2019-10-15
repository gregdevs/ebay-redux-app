import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(en);

const timeAgo = new TimeAgo('en-US');

export const itemParser = (featuredItem) => {
    let largeImage = featuredItem && featuredItem.galleryPlusPictureURL && featuredItem.galleryPlusPictureURL[0],
        sellingStatus = featuredItem && featuredItem.sellingStatus && featuredItem.sellingStatus[0],
        priceData = sellingStatus && sellingStatus.convertedCurrentPrice && sellingStatus.convertedCurrentPrice[0],
        currentPrice = priceData && priceData.__value__,
        thumb =  featuredItem && featuredItem.galleryURL && featuredItem.galleryURL[0],
        imageSrc = largeImage || thumb,
        id = featuredItem && featuredItem.itemId && featuredItem.itemId[0],
        title = featuredItem && featuredItem.title && featuredItem.title[0],
        condition = featuredItem &&  featuredItem.condition && featuredItem.condition[0],
        conditionDisplayName = condition && condition.conditionDisplayName && condition.conditionDisplayName[0],
        listingInfo = featuredItem && featuredItem.listingInfo && featuredItem.listingInfo[0],
        endTime = listingInfo && listingInfo.endTime && listingInfo.endTime[0],       
        timeLeft = timeAgo.format(new Date(endTime) - 60 * 1000),
        obj;

        obj = {
        largeImage,
        imageSrc,
        id,
        title,
        condition,
        conditionDisplayName,
        listingInfo,
        endTime,
        timeLeft,
        currentPrice
    }

    return obj;
}