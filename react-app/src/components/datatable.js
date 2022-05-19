import DataTable from "react-data-table-component";
import axios from "axios";
import { useState, useEffect } from "react";

import React from "react";

export default function DataList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/employee/index").then((response) => {
      setList(response.data);
      console.log("---");
    });
  }, []);

  const columns = [
    {
      name: "Employee Name",
      selector: (row) => row.employee_name,
    },
    {
      name: "Employee Surname",
      selector: (row) => row.employee_surname,
    },
    {
      name: "Role",
      selector: (row) => row.project_role,
    },
  ];

  return <DataTable columns={columns} data={list} />;
}
