import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import EmployeeForm from './EmployeeForm';
import PageHeader from '../../components/PageHeader';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
    },
    searchInput: {
        opacity: '0.6',
        padding: '0px ${theme.spacing(1)}px',
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor:'#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1),
        }
    }
}));

export default function Employee() {

    const classes = useStyles();
    const [ x, setX] = useState(5);

    setX(6);
    
    useEffect = (() => {

    },[])
    return(
        <>
            <PageHeader 
            title = "New employee"
            subtitle = "Form design with validation"
            icon = {<PeopleOutlineIcon fontSize='large' />} />
            <EmployeeForm />
        </>
        
    )
}