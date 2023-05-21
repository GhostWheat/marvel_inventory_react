import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';
import { HeroForm } from '../HeroForm'


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'hero_name',
        headerName: 'Hero Name',
        width: 100,
        editable: true,
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 500,
        editable: true,
    },
    {
        field: 'comics_appeared_in',
        headerName: 'Number Of Comics Appeared In',
        width: 60,
        editable: true,
        type: 'number'
    },
    {
        field: 'super_power',
        headerName: 'Super Power',
        width: 200
    },


];

interface gridData {
    data: {
        id?: string
    }
}

export const DataTable = () => {
    let { heroData, getData } = useGetData()
    // console.log(`here is heroData: ${heroData} and getData: ${getData}`);
    let [open, setOpen] = useState(false)
    let [gridData, setData] = useState<GridRowSelectionModel>([])

    // console.log(`gridData: ${gridData}`)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        serverCalls.delete(`${gridData[0]}`)
        getData()
    }

    console.log(gridData) // list of ids' from checked rows

//conditionally render data table if we have an authenticated user

    const MyAuth = localStorage.getItem('myAuth')
    console.log(`MyAuth: ${MyAuth}`)

    if (MyAuth == "true") {
        console.log(`heroData: ${heroData}`)
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <h2>Heroes in Inventory</h2>
            <DataGrid

                rows={heroData}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                onRowSelectionModelChange={(newSelectionModel) => { setData(newSelectionModel) }}
                {...heroData}
            />
            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
            {/* Dialog Pop Up for Updating a Hero */}
            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id="form-dialog-title">Update a Hero</DialogTitle>
                <DialogContent>
                    <DialogContentText>Hero id: {gridData[0]}</DialogContentText>
                    <HeroForm id={`${gridData[0]}`} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )} else {
        return(
        //return does not render datatable if user is not authenticated
        <div>
            <h3>Please sign in to view your collection!</h3>
        </div>
    )}
}