import React from 'react';

const CommonMarkup = ( props ) => {
    const { render } = props;
    return(
        <div>
            {render()}
        </div>
    )
}

export default CommonMarkup;