import React, { useEffect, useState } from "react";
import { getApiCall } from "../../apicalls";
import styles from "./stickers.module.css";
import Shimmer from "../shimmer";
import LoadImage from "../loadImage";
import Display from "../display";
import { getAPIUrl } from "../../apicalls/api-constant";

const Stickers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(25); 

  const getData = () => {
    setLoading(true);
    getApiCall(getAPIUrl("getStickersCall", {perPage: perPage, page: page}))
      .then((res) => {
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
       <Display data={data} loading={loading}/>
    </div>
  );
}

export default Stickers;