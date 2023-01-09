import "./widgets.scss"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import React from 'react'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Widgets({type}) {
    let data;

    const amount =1000
    const diff = 200

    switch(type){
      case "tenants":
        data={
          title:"TENANTS",
          isMoney:false,
          link:"See al tenants",
          icon: <PersonOutlineOutlinedIcon className="icon" 
          style={{color: "crimson",
          backgroundColor: "rgba(210,0,0, 0.2)"}}
        
          />,
      
        }
        break;
        case "requests":
        data={
          title:"REQUESTS",
          isMoney:false,
          link:"See all requests",
          icon: <ProductionQuantityLimitsIcon className="icon" 
            style={{color: "golden",
          backgroundColor: "rgba(218,165,32, 0.2)"}}
          />,
      
        }
        break;
        case "earnings":
        data={
          title:"EARNINGS",
          isMoney:true,
          link:"view all earnings",
          icon: <MonetizationOnOutlinedIcon className="icon" 
            style={{color: "green",
          backgroundColor: "rgba(0,128,0, 0.2)"}}
          />,
      
        }
        break;
        case "balance":
        data={
          title:"BALANCE",
          isMoney:true,
          link:"View all balances",
          icon: <AccountBalanceOutlinedIcon className="icon" 
            style={{color: "purple",
          backgroundColor: "rgba(128,0,128, 0.2)"}}
          />,
        }
        break;
          default:
          break;
    }




  return (
    <div className="widgets">
      <div className="left">
        <span className ="title">{data.title}</span>
        <span className ="counter">{data.isMoney && "$"}{amount}</span>
        <span className ="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
        <ArrowDropUpIcon/>{diff}</div>
        {data.icon}
      </div>
      

    </div>
  )
}

export default Widgets