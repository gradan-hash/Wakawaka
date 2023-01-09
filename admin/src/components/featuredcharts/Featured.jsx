import "./featured.scss"
import React from 'react'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Featured() {
  return (
    <div className ="featured">

    <div className="top">

      <h1 clasName="title">
      Top revenue </h1>
      <MoreVertOutlinedIcon fontSize="small"/>

    </div>

      <div className="bottom">
        <div className="featuredChart">
        <CircularProgressbar  value={70} text={"70%"} strokeWidth={5}/>
        </div>
        <p className="title">Total Amount made today</p>
        <p className="amount">$420</p>
        <p className="desc">previous transactions processing.Last payment may not be included.</p>

        <div className="summary">
          <div className="item">
            <div className="itemlist">Target
            </div>
            <div className="itemresult positive">
            <ArrowDropUpIcon fontSize="small"/>
              <div className="resultamount">$12.4k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemlist">Last Week
            </div>
            <div className="itemresult negative">
            <ArrowDropDownIcon fontSize="small"/>
              <div className="resultamount">$12.0k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemlist">Last month
            </div>
            <div className="itemresult positive">
            <ArrowDropUpIcon fontSize="small"/>
              <div className="resultamount">$12.3k</div>
            </div>
          </div>
        </div>
        


        </div>
      </div>
    
  )
}

export default Featured