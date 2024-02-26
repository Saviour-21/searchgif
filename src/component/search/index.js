import React, { useEffect, useState } from "react";
import styles from "./search.module.css";
import { debouncing } from "../../utils";
import { getApiCall } from "../../apicalls";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const fetchData = (query) => {
    getApiCall(`https://api.giphy.com/v1/gifs/search?api_key=tJ0N8u3VF5YYPOpQQOuwm16Dv6InCizF&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`).then((res)=>{
        setData(res.data);
    }).catch((err)=>{
        console.log("res", err);
    })
  }
  useEffect(() => {
    console.log("searchQuery", searchQuery);
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

      <div className={styles.resultContainer}>
          {data.map((item)=>(
            <img src={`${item.images.original.url}`} alt=""/>
          ))}
        </div>
    </div>
  );
};

export default SearchComponent;
