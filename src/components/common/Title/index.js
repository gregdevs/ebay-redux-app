import React from 'react';
import styles from './Title.module.scss';

const Title = (props) => {
    const { title,  size } = props;
    return(
        <span className={`${styles.title} ${styles[size]}`}>{title}</span>
    )

}


Title.defaultProps = {
    title: "Some Cool thing",
    size : 'sm'
}
export default Title;