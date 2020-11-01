import React from 'react';

const CustomImage = ({ src, srcOnError, ...rest }) => {

    let onError = (e) => {
        e.target.src = srcOnError
    }

    return <img src={src} onError={(e) => onError(e)} {...rest} />;
};

export default CustomImage;