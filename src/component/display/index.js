import React from "react";
import styles from "./display.module.css";
import LoadImage from "../loadImage";
import Shimmer from "../shimmer";

const Display = ({ data, loading }) => {
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <div key={item.id} className={styles.gridItem}>
          {loading && <Shimmer />}
          {!loading && <LoadImage src={item.images.original.url} />}
        </div>
      ))}
    </div>
  );
};

export default Display;