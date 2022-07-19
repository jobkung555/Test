import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState,useEffect } from 'react';

export default function BasicDatePicker() {
  const [value, setValue] = useState(null);

  useEffect(()=>{
    // console.log(value)
  },)


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date Picker"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}