import { Button } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataGridSample() {

    const [products, setproducts] = useState<Product[]>([])

    useEffect(() => {

        loadProducts();

    }, [])

    const loadProducts = () => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data);
            })
    }

    const deleteProduct = (item: any) => {

        axios.delete(`https://northwind.vercel.app/api/products/${item.id}`)
            .then(res => {
                loadProducts();
            })


    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'name', headerName: 'Name', width: 250 },
        { field: 'unitPrice', headerName: 'Unit Price', width: 250 },
        { field: 'unitsInStock', headerName: 'Stock', width: 250 },
        { field: 'quantityPerUnit', headerName: 'Quantity Per Unit', width: 250 },
        {
            field: 'delete',
            renderCell: (item) => <Button onClick={() => deleteProduct(item)} variant="outlined" color="error">
                Delete
            </Button>
        }
    ];

    return (<>
        <div style={{ height: '500px', width: '100%' }}>
            <DataGrid
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 25, page: 0 },
                    },
                }}
                rows={products}
                columns={columns}

            />
        </div>
    </>)
}


interface Product{
    id:number;
    name:string;
    unitPrice:number;
    unitsInStock:number;
    quantityPerUnit:string
}

export default DataGridSample