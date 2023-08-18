import { TextField } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form';


interface IFormInputs {
    name: string
    description: string
}

function AddCategory() {

    const { handleSubmit, control, reset } = useForm<IFormInputs>();

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {

        axios.post('https://northwind.vercel.app/api/categories', data)
            .then(res => {
                alert('Success!!')
            })

    }

    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <TextField {...field} />}
            />

            <Controller
                name="description"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <TextField {...field} />}
            />
            <input type="submit" />
        </form>
    </>
    )
}

export default AddCategory