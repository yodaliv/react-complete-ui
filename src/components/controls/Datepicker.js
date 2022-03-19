import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export default function Datepicker(props) {

    const { name, label, value, onChange } = props;
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker ></KeyboardDatePicker>
            </MuiPickersUtilsProvider>
        );
}