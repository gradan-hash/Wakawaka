import React from 'react'
import "./home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widgets from '../../components/widgets/Widgets'
import Charts from '../../components/normalcharts/Charts'
import Featured from '../../components/featuredcharts/Featured'
import TableList from '../../components/table/Table'

const Home = () => {
  return (
    <div className='home'>
    <Sidebar/>
    <div className='homecontainer'>
      <Navbar/>
      <div className="widgets">

      <Widgets type="tenants"/>
      <Widgets type="requests"/>
      <Widgets type="earnings"/>
      <Widgets type="balance"/>

      </div>

      <div className = "charts">
       <Featured/>
        <Charts title="Last 6 Months(Revenue)" />
      </div>

      <div className='listcontainer'>
        <div className='listtitle'>latest transactions</div>
        <TableList/>
      </div>

    </div>
     
      </div>
  )
}

export default Home
