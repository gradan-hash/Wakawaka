import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';
import ViewModuleRoundedIcon from '@mui/icons-material/ViewModuleRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from "react-router-dom"

function Sidebar() {
  return (
    <div className="sidebar">

     <div className="top">
     <Link to="/" style={{textDecoration: "none"}}>
      <span 
      className='logo'>WakaWakaAdmin
      </span>
      </Link>
     </div>
     <hr></hr>

     <div className="center">
     <ul>
     <p className="title">MAIN</p>
      <li>
      <DashboardIcon className='icon'/>
      <span>Dashboard</span>
      </li>

      <p className="title">LISTS</p>
      <Link to="/users" style={{textDecoration: "none"}} >
      <li>
      <PersonOutlineOutlinedIcon className='icon'/>
      <span>Tenants</span>
      </li>
      </Link>

      <Link to="/buildings/new" style={{textDecoration: "none"}}>
      <li>
      <CategoryTwoToneIcon className='icon'/>
      <span>Buildings</span>
      </li>
      </Link>

     
      <li>
      <ViewModuleRoundedIcon className='icon'/>
      <span>Requests</span>
      </li>

      <li>
      <LocalShippingRoundedIcon className='icon'/>
      <span>Occupied</span>
      </li>
      <p className="title">USEFUL</p>

      <li>
      <QueryStatsIcon className='icon'/>
      <span>Stats</span>
      </li>

      <li>
      <NotificationsActiveOutlinedIcon className='icon'/>
      <span>Notifications</span>
      </li>
      <p className="title">SERVICE</p>

      <li>
      <SettingsSystemDaydreamOutlinedIcon className='icon'/>
      <span>System Health</span>
      </li>

      <li>
      <PsychologyOutlinedIcon className='icon'/>
      <span>Logs</span>
      </li>
      <p className="title">USER</p>
      <li>
      <SettingsSuggestIcon className='icon'/>
      <span>Settings</span>
      </li>
   
      <li>
      <AccountBoxOutlinedIcon className='icon'/>
      <span>Profile</span>
      </li>

      <li>
      <LogoutOutlinedIcon className='icon'/>
      <span>Logout</span>
      </li>
      
      </ul>
     </div>
     <div className="bottom">
      <div className='colorOptions'></div>
      <div className='colorOptions'></div>
      <div className='colorOptions'></div>
     </div>
    </div>
  )
}

export default Sidebar