import React from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Charts from '../../components/normalcharts/Charts'
import TableList from '../../components/table/Table'


function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editbutton">Edit</div>

            <h1 className="title">Information</h1>

            <div className="item">
              <img
                src="https://images.pexels.com/photos/1549004/pexels-photo-1549004.jpeg?auto=compress&cs=tinysrgb&w=400"
                className="itemimage"
                alt=""></img>

              <div className="details">
                <h1 className="itemtitle">cornelius nyaa</h1>

                <div className="detailitem">
                  <span className="itemkey">Email:</span>
                  <span className="itemvalue">corne@gmail.com</span>
                </div>

                <div className="detailitem">
                  <span className="itemkey">Phone:</span>
                  <span className="itemvalue">0796881039</span>
                </div>

                <div className="detailitem">
                  <span className="itemkey">Address:</span>
                  <span className="itemvalue">machakos garden 234</span>
                </div>

                <div className="detailitem">
                  <span className="itemkey">city:</span>
                  <span className="itemvalue">katoloni</span>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <Charts
              aspect={3 / 1}
              title="Tenants $ rent payment(last 6 months)"
            />
          </div>
        </div>
        <div
          className="
      bottom">
          <h1 className="title">Last Transactions</h1>
          <TableList />
        </div>
      </div>
    </div>
  );
}

export default Single;
