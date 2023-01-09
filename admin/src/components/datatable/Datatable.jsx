import "./datatable.scss"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {userColumns,userRows} from "../../datatablesource"



function Datatable() {

  const actionColumn =[
    {field:"action", headerName:"Action",width:200, renderCell:()=>{
      return(
        <div className="cellAction">
          <div className="viewbutton">View</div>
          <div className="deletebutton">Delete</div>
        </div>
      )
    }}
  ]

  return (
    <div className="datatable">
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
    </div>
  )
}

export default Datatable