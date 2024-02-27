import React, { useState } from "react";
import styles from "./loadImage.module.css";

const LoadImage = ({src}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    return(
           <img src={src} alt="" className={!isImageLoaded ? styles.shimmerItem : ""} onLoad={()=>{setIsImageLoaded(true)}} loading="lazy"/>
    )
}

export default LoadImage;