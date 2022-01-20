import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import { makeStyles } from '@material-ui/core/styles';
import {
  
  Avatar,
  Grid,
  
} from '@material-ui/core';


function App() {
  const useStyles = makeStyles((theme) => ({

    status: {
      fontWeight: 'bold',
      fontSize: '0.75rem',
      color: 'white',
      backgroundColor: 'grey',
      borderRadius: 8,
      padding: '3px 10px',
      display: 'inline-block'
    }
  }));

  const [data, setData] = useState([])
  const columns = [
    { title: "ORDER ID", field: "order_id",align:"center",filtering:false, render: (row) => <div style={{fontSize:"2.6vmin"}}>{row.order_id}</div>},
    {
      title: "CUSTOMER", field: "customer", render: (row) => <Grid container alignItems="center" style={{fontSize:"2.4vmin",fontWeight:"500"}}>
        <Grid item sm={3}>
          <Avatar>{row.customer[0]}</Avatar>
        </Grid>
        <Grid item>
          {row.customer}
        </Grid>
      </Grid>
    },
    // { title: "country", field: "country" },
    { title: "ADDRESS", field: "address",filtering:false,sorting:false, render: (row) => <Grid >
    <Grid style={{fontSize:"2.4vmin",fontWeight:"500"}}>
      {row.country}
    </Grid>
    <Grid style={{fontSize:"2.4vmin"}}>
      {row.address}
    </Grid>
  </Grid>},
    { title: "PRODUCT", field: "product_title",filtering:false,sorting:false, render: (row) => <Grid alignItems="center" style={{fontSize:"2vmin"}}>
    <Grid style={{fontSize:"2.4vmin",fontWeight:"500"}}>
      {row.product_title}
    </Grid>
    <Grid style={{fontSize:"2.4vmin"}}>
      {row.product_description}
    </Grid>
  </Grid>},
    // { title: "product_description", field: "product_description" },
    { title: "Date Order", field: "date", render: (row) => <div style={{fontSize:"2.4vmin",fontWeight:"500"}}>{row.date}</div> },
    {
      title: "STATUS", field: "status",align:"left", lookup:{Completed:"Completed",Delivered:"Delivered",Prepared:"Prepared"}, render: (row) => <div style={{
        color:
          ((row.status === 'Completed' && 'green') ||
            (row.status === 'Delivered' && 'blue') ||
            (row.status === 'Prepared' && 'orange')),
        backgroundColor:
          ((row.status === 'Completed' && '#ccffcc') ||
            (row.status === 'Delivered' && '#ccccff') ||
            (row.status === 'Prepared' && '#ffffcc')),
        borderRadius: "4px",
        padding: "10px",
        paddingLeft: "30px"
      }}>{row.status}</div>
    }
  ]
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Ved-X/assignment/orders")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
      })
  }, [])
  return (
    <div className="App">
      
      <h1 align="center">Vishal Singh</h1>
      <h1 align="center">All Orders</h1>
      <MaterialTable
        title=""
        data={data}
        columns={columns} 
        options={{sorting:true,searchFieldAlignment:"left",searchAutoFocus:true,searchFieldVariant:"outlined",filtering:true,
        headerStyle:{background:"#1111"}}}/>
    </div>
  );
}

export default App;
