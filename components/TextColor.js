"use client";
import React, { useState, useEffect } from 'react';
import style from "./textColor.module.css";

const TextColor = () => {
    const [textClr, setTextClr] = useState("white");
    const [currentDate, setCurrentDate] = useState(null); // Track the date

    useEffect(() => {
        const tDate = new Date();
      const currTime = tDate.getHours();
     if (currTime >= 17 || currTime <= 5) {
    setTextClr("black");
     } else {
       setTextClr("white");
     }
        
  setCurrentDate(tDate.toLocaleString());
    }, []);

    return (
      <div className={style.container}>
       <h1 className={style.heading} style={{ color: textClr }}>
       Welcome to TextColor Component
      </h1>
      {currentDate && <p className={style.paragraph}>Today Date: {currentDate}</p>}
            <table className={style.table}>
          <thead>
                    <tr>
                        <th className={style.th} style={{ color: textClr }}>#</th>
           <th className={style.th} style={{ color: textClr }}>Name</th>
        <th className={style.th} style={{ color: textClr }}>Age</th>
               </tr>
                </thead>
                <tbody>
                    <tr>
               <td>1</td>
              <td>John Doe</td>
              <td>25</td>
                    </tr>
                    <tr>
             <td>2</td>
       <td>Jane Smith</td>
                  <td>30</td>
           </tr>
             </tbody>
        </table>
        </div>
    );
};

export default TextColor;
