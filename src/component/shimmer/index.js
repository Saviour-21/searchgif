import React from "react";
import styles from "./shimmer.module.css"; // Import CSS for styling

const Shimmer = ({ width, height }) => {
  return (
    <div className={styles.shimmerWrapper} style={{ width, height }}>
      <div className={styles.shimmer}></div>
    </div>
  );
};

Shimmer.defaultProps = {
  width: "300px",
  height: "300px"
}
export default Shimmer;
