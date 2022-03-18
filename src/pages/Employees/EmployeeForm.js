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

    const {
        values,
        handleInputChange
    } = useForm(initialFValues);
    
    return(
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                    label="Full name" 
                    name="fullName"
                    value={ values.fullName}
                    onChange={ handleInputChange } />
                    <Controls.Input
                    label="Email" 
                    name="email"
                    value={ values.email}
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
                    <Controls.Checkbox 
                        name="isPermanent"
                        label="Permanent Employee"
                        value= { values.isPermanent}
                        onChange={ handleInputChange }
                    />
                </Grid>
            </Grid>
        </Form>
    )
}