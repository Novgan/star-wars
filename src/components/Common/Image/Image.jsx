import React, { useState } from 'react';

const CustomImage = ({ src, srcOnError, ...rest }) => {
    const [srcImg, setSrcImg] = useState(null);
    
    const onError = () => {
        setSrcImg(srcOnError);
    };

    if (srcImg) {
        return <img src={srcImg} {...rest} />;
    } else {
        return <img src={src} onError={onError} {...rest} />;
    }
};

export default CustomImage;