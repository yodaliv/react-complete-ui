import React from 'react';
import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';

export default function Select(props) {

    const {name, label, value, onChange, option } = props
    return (
        <FormControl variant="outlined" >
            <InputLabel>{ label }</InputLabel>
            <MuiSelect
                label={ label }
                name={ name }
                value={ value }
                onChange={ onChange } 
            >
                <MenuItem>
                </MenuItem>

            </MuiSelect>
        </FormControl>
    )
}
