import { Button, InputLabel, TextField } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';



function DataGridSample() {

    const [products, setproducts] = useState<Product[]>([]);
    const [originalProducts, setoriginalProducts] = useState<Product[]>([])
    const [unitPrice, setunitPrice] = useState("")

    const handleChange = (event: SelectChangeEvent) => {
        setunitPrice(event.target.value as string);
        var filterPrice = Number(event.target.value)
        var filteredProducts = originalProducts.filter(q => q.unitPrice < filterPrice && q.unitPrice > filterPrice - 100);

        setproducts(filteredProducts)
    };

    const navigate = useNavigate();

    useEffect(() => {
        loadProducts();
    }, [])

    const loadProducts = () => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data);
                setoriginalProducts(res.data)
            })
    }

    const deleteProduct = (item: any) => {
        axios.delete(`https://northwind.vercel.app/api/products/${item.id}`)
            .then(res => {
                loadProducts();
            })
    }

    const searchByName = (data:string) => {
    
        var filteredProducts = originalProducts.filter(q => q.name.toLocaleLowerCase().includes(data.toLocaleLowerCase()));

        setproducts(filteredProducts);
        
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'name', headerName: 'Name', width: 250 },
        { field: 'unitPrice', headerName: 'Unit Price', width: 250 },
        { field: 'unitsInStock', headerName: 'Stock', width: 150 },
        { field: 'quantityPerUnit', headerName: 'Quantity Per Unit', width: 150 },
        {
            field: 'delete',
            renderCell: (item) => <Button onClick={() => deleteProduct(item)} variant="outlined" color="error">
                Delete
            </Button>
        },
        {
            field: 'detail',
            renderCell: (item) => <Button onClick={() => navigate('/products/' + item.id)} variant="outlined">
                Detail
            </Button>
        }
    ];

    return (<>
        <div>
            <TextField id="outlined-basic" label="Name: " variant="outlined" onChange={(e) => searchByName(e.target.value)} />
            <hr></hr>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={unitPrice}
                    label="Unit Price"
                    onChange={handleChange}
                >
                    <MenuItem value={100}>0-100</MenuItem>
                    <MenuItem value={200}>100-200</MenuItem>
                    <MenuItem value={300}>200-300</MenuItem>
                </Select>
            </FormControl>

        </div>
        <hr></hr>
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


interface Product {
    id: number;
    name: string;
    unitPrice: number;
    unitsInStock: number;
    quantityPerUnit: string
}

export default DataGridSample