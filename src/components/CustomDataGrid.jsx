import { useState } from "react";

import Box from "@mui/material/Box";
import CustomFooter from "./CustomFooter";
import { DataGrid } from "@mui/x-data-grid";

export default function CustomDataGrid({ dataColumns, dataRows }) {
  const [total, setTotal] = useState();

  const [rows, setRows] = useState();

  const handleAddRow = () => {
    setRows((prevRows) => [...prevRows, createRandomRow()]);
  };

  const handleDeleteRow = () => {
    setRows((prevRows) => {
      const rowToDeleteIndex = randomInt(0, prevRows.length - 1);
      return [
        ...rows.slice(0, rowToDeleteIndex),
        ...rows.slice(rowToDeleteIndex + 1),
      ];
    });
  };

  return (
    <Box>
      <DataGrid
        rows={dataRows}
        columns={dataColumns}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        // checkboxSelection
        // disableSelectionOnClick
        // initialState={{
        //   pagination: {
        //     pageSize: 4,
        //   },
        //   aggregation: {
        //     model: {
        //       num_trees: "sum",
        //     },
        //   },
        // }}
        // experimentalFeatures={{ newEditingApi: true, aggregation: true }}
        // components={{
        //   Footer: CustomFooter,
        // }}
        // componentsProps={{
        //   footer: { total: total },
        // }}
        // onStateChange={(state) => {
        //   const visibleRows = state.filter.visibleRowsLookup;
        //   let visibleItems = [];
        //   for (const [id, value] of Object.entries(visibleRows)) {
        //     if (value === true) {
        //       visibleItems.push(id);
        //     }
        //   }
        //   console.log(visibleItems);
        //   const res = data.filter((item) => visibleItems.includes(item.id));
        //   const total = res
        //     .map((item) => item.totalAmount)
        //     .reduce((a, b) => a + b, 0);
        //   console.log(total);
        //   setTotal(total);
        // }}
      />
    </Box>
  );
}
