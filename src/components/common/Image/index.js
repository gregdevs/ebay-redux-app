import React from 'react';

import styles from './Image.module.scss';

const Image = (props) => {
    const { imageSrc, modType } = props;
    return (
        <div className={`${styles.imageWrapper}  ${styles[modType]}`}>
            <img src={ imageSrc }/>
        </div>
    )
}

Image.defaultProps= {
    imageSrc: 'https://via.placeholder.com/150'
}

export default Image;