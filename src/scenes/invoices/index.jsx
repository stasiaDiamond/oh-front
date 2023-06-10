import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import API from "../../api/API";


const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    API.getAllInvoices()
      .then((data) => {
        console.log(data.invoices);
        setInvoices(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

  const columns = [
    { 
      field: "id", 
      headerName: "ID", 
      // flex: 0.5 
    },
    {
      field: "date",
      headerName: "Date",
      flex: 0.3,
      editable: true
    },
    {
      field: "client",
      headerName: "Name",
      flex: 0.3,
      cellClassName: "name-column--cell",
      editable: true
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 0.3,
      editable: true
    },
    {
      field: "address",
      headerName: "Address",
      flex: 0.6,
      editable: true
    },
    {
      field: "workDescription",
      headerName: "Job Category",
      flex: 0.3,
      editable: true

    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 0.2,
      editable: true
    },
    {
      field: "expenses",
      headerName: "Expenses",
      flex: 0.2,
      editable: true
    },
    {
      field: "isPaid",
      headerName: "Paid",
      flex: 0.2,
      editable: true
    } 
  ];
  

  return (
    <Box m="20px">
      <Header
        title="CLIENTS"
        subtitle="List of Clients for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={invoices}
          columns={columns}
          components={{
            Toolbar: GridToolbar,
          }}
          disableColumnFilter={false} 
        />
      </Box>
    </Box>
  );
};

export default Contacts;

