import React from 'react';
import { Grid } from '@material-ui/core';

import Controls from '../../components/controls/Controls';
import { useForm, Form } from '../../components/useForm';
import * as employeeService from '../../services/employeeService'

const genderItems = [
    {id: 'male', title: 'Male'},
    {id: 'female', title: 'FeMale'},
    {id: 'other', title: 'Other'}
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false
}

export default function EmployeeForm() {

    const validate = () => {
        let temp = {}
        temp.fullName = values.fullName ? "" : "This field is required.";
        temp.email = (/$|.+@.+..+/).test(values.email) ? "" : "Email is not valid.";
        temp.mobile = values.mobile.length > 9 ? "" : "Minimun 10 numbers required.";
        temp.city = values.city ? "" : "This field is required.";
        temp.departmentId = values.departmentId.length != 0 ? "" : "This field is required.";
        setErrors({
            ...temp
        });
    }
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFValues);
    
    return(
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                    label="Full name" 
                    name="fullName"
                    value={ values.fullName }
                    onChange={ handleInputChange } />
                    <Controls.Input
                    label="Email" 
                    name="email"
                    value={ values.email }
                    onChange={ handleInputChange } />
                    <Controls.Input
                    label="Mobile" 
                    name="mobile"
                    value={ values.mobile }
                    onChange={ handleInputChange } />
                    <Controls.Input
                    label="City" 
                    name="city"
                    value={ values.city }
                    onChange={ handleInputChange } />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name= "gender"
                        label= "Gender"
                        value={ values.gender }
                        onChange={ handleInputChange }
                        items={ genderItems }
                    />
                    <Controls.Select
                        name="departmentId"
                        label="Department"
                        value={ values.departmentId }
                        onChange={ handleInputChange }
                        options={ employeeService.getDepartmentCollection() }
                    />
                    <Controls.Datepicker 
                        name="hireDate"
                        label="Hire Date"
                        value={ values.hireDate }
                        onChange={ handleInputChange }
                    />
                    <Controls.Checkbox 
                        name="isPermanent"
                        label="Permanent Employee"
                        value={ values.isPermanent }
                        onChange={ handleInputChange }
                    />
                    <div>
                        <Controls.Button
                            text="Submit"
                            type="submit"
                        />
                        <Controls.Button
                            text="Reset"
                            color="default"
                        />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}