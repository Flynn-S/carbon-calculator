import { useState } from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CustomSelect = ({ label, value, handleChange, options }) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          {options &&
            options.map((option) => {
              return <MenuItem value={option}>{option}</MenuItem>;
            })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
