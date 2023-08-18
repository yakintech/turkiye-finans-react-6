import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

// type FormData = {
//     name: string;
//     unitPrice: number;
//     unitsInStock: number;
// }

const schema = yup.object({
    name: yup.string().required("Name alanı boş geçilemez!!"),
    unitPrice: yup.number().required("Unit Price alanı boş geçilemez"),
    unitsInStock: yup.number().required("Stock alanı boş geçilemez")
  }).required();
  
type FormData = yup.InferType<typeof schema>;


function AddProduct() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
      });

    const onSubmit = handleSubmit(data => {

        axios.post(`https://northwind.vercel.app/api/products`, data)
            .then(res => {
                alert('Success!!')
            })

    });


    return (<>
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="">Name: </label>
                <input  {...register("name")} />
                <p style={{color:'red'}}>{errors.name?.message}</p>

            </div>
            <div>
                <label htmlFor="">Unit Price: </label>
                <input  {...register("unitPrice")} />
                <p style={{color:'red'}}>{errors.unitPrice?.message}</p>

            </div>
            <div>
                <label htmlFor="">Stock: </label>
                <input  {...register("unitsInStock")} />
                <p style={{color:'red'}}>{errors.unitsInStock?.message}</p>

            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    </>
    )
}

export default AddProduct