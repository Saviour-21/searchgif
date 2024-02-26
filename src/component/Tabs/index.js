import React, { useEffect, useState } from "react";
 import styles from "./tabs.module.css";
 
 const Tabs = ({ useHorizontalLayout, tabData }) => {
   const [selectedTab, setSelectedTab] = useState(tabData[0].name);
 
   const handleTabClick = (tabName) => {
     setSelectedTab(tabName);
     localStorage.setItem("tabName", tabName);
   };

   useEffect(()=>{
    const localStorageTabName = localStorage.getItem("tabName");
    if(localStorageTabName){
      setSelectedTab(localStorageTabName);
    }
   },[]);
   
   return (
     <div className={styles.tabContainer}>
       {useHorizontalLayout ? (
         <div className={styles.horizontalTabWrapper}>
           <div className={styles.horizontalTabs}>
             {tabData.map((tab) => (
               <div
                 key={tab.name}
                 className={`${styles.horizontalTab} ${
                   selectedTab === tab.name ? styles.horizontalTabActive : ""
                 }`}
                 onClick={() => handleTabClick(tab.name)}
               >
                 {tab.name}
               </div>
             ))}
           </div>
           <div className={styles.tabContent}>
             {tabData.find((tab) => tab.name === selectedTab)?.component}
           </div>
         </div>
       ) : (
         <>
           <div className={styles.verticalTabs}>
             {tabData.map((tab) => (
               <div
                 key={tab.name}
                 className={`${styles.verticalTab} ${
                   selectedTab === tab.name ? styles.verticalTabActive : ""
                 }`}
                 onClick={() => handleTabClick(tab.name)}
               >
                 {tab.name}
               </div>
             ))}
           </div>
           <div className={styles.tabContent}>
             {tabData.find((tab) => tab.name === selectedTab)?.component}
           </div>
         </>
       )}
     </div>
   );
 };
 
 export default Tabs;
