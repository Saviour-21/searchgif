import React, { useEffect, useState } from "react";
import { getApiCall } from "../../apicalls";
import styles from "./gifs.module.css";
import Shimmer from "../shimmer";

const Gifs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20); 

  const getData = () => {
    setLoading(true);
    getApiCall(`https://api.giphy.com/v1/gifs/trending?api_key=tJ0N8u3VF5YYPOpQQOuwm16Dv6InCizF&limit=${perPage}&offset=${(page - 1) * perPage}&rating=g&bundle=messaging_non_clips`).
      then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1)); 
  };
 
  useEffect(() => {
    getData();
  }, [page, perPage]);

  return (
    <div>
      <div className={styles.navButtons}>
        <button onClick={handlePrevPage} disabled={page === 1}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
      {loading && <div className={styles.loaderContainer}>Loading...</div>}
      <div className={styles.container}>
        {data.map((item) => (
          // <div key={item.id} className={styles.gridItem}>
          <>
            {loading && (<Shimmer />)}
            {!loading && <img src={`${item.images.original.url}`} alt="" />}
          </>
            
          // </div>
        ))}
      </div>
    </div>
  );
}

export default Gifs;