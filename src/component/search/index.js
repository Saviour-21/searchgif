import React, { useEffect, useState } from "react";
import styles from "./search.module.css";
import { debouncing } from "../../utils";
import { getApiCall } from "../../apicalls";
import Display from "../display";
import { getAPIUrl } from "../../apicalls/api-constant";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = (query) => {
    setLoading(true);
    getApiCall(getAPIUrl('getSearchCall', {query: query})).then((res)=>{
        setData(res.data);
        setLoading(false);
    }).catch((err)=>{
        console.error(err);
        setLoading(false);
    })
  }
  useEffect(() => {
    setData([]);
    fetchData(searchQuery);
  }, [searchQuery]);

  return (
    <div>
      <div className={styles.container}>
        <input
          type="text"
          onChange={debouncing((e) => {
            setSearchQuery(e.target.value);
          })}
          placeholder="Enter something..."
          className={styles.inputBox}
        />
      </div>

      <Display data={data} loading={loading}/>
    </div>
  );
};

export default SearchComponent;
