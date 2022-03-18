import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import EmployeeForm from './EmployeeForm';
import PageHeader from '../../components/PageHeader';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
}));

export default function Employee() {

    const classes = useStyles();

    return(
        <>
            <PageHeader 
            title = "New employee"
            subtitle = "Form design with validation"
            icon = {<PeopleOutlineIcon fontSize='large' />} />
            <Paper className={ classes.pageContent }>
                <EmployeeForm />
            </Paper>
        </>
        
    )
}