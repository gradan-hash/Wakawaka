import "./table.scss"

import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




function TableList() {
const rows = [
  {
    id:111222,
    building:" top view",
    img:"https://images.unsplash.com/photo-1520330979108-7d66e04b35e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    tenant:"cornelius mutuku",
    date:"1 march",
    amount:234,
    method:"cash ",
    status:"Approved",
  },
  {
    id:1464522,
    building:" cpppp view",
    img:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVpbGRpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    tenant:"ryan wanjie",
    date:"10 march",
    amount:"250",
    method:"cash ",
    status:"Approved",
  },
  {
    id:16565722,
    building:" suzzie view",
    img:"https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmdzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    tenant:"voke maina",
    date:"3 march",
    amount:"300",
    method:"online ",
    status:"Pending",
  }

]



  return (
    <div className="table">
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecell">Tracaking Id</TableCell>

            <TableCell className="tablecell">Building</TableCell>

            <TableCell className="tablecell">Tenant</TableCell>

            <TableCell className="tablecell">Date</TableCell>

            <TableCell className="tablecell">Amount($)</TableCell>

            <TableCell className="tablecell">Payment Method</TableCell>

            <TableCell className="tablecell">Status</TableCell>

            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              
            >
             <TableCell className="tablecell" >
                {row.id}
              </TableCell>

              <TableCell className="tablecell">
                <div className="cellwrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.building}
                </div>
              </TableCell>

              <TableCell className="tablecell">{row.tenant}</TableCell>

           
              <TableCell className="tablecell">{row.date}</TableCell>

              <TableCell className="tablecell">{row.amount}</TableCell>

                <TableCell className="tablecell">{row.method}</TableCell>
                
                <TableCell className="tablecell">
                  <span className={`status ${row.status} `}>{row.status}</span>
                </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default TableList