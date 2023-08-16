import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Supplier } from './Supplier';
import axios from 'axios';

function SupplierDetail() {

  const { id } = useParams();
  

  const [detail, setdetail] = useState<Supplier>({});

  const navigate = useNavigate();

  useEffect(() => {

    axios.get(`https://northwind.vercel.app/api/suppliers/` + id)
      .then(res => {
        setdetail(res.data);
      })

  }, [])


  return (<>
  <button onClick={() => navigate(-1)}>Go To BACK!</button>
    <div>
      <h3>Id: {detail.id}</h3>
      <h3>CompanyName: {detail.companyName}</h3>
      <h3>Contact Name: {detail.contactName}</h3>
      <h3>Contact Title: {detail.contactTitle}</h3>

    </div>
    <hr></hr>
    <div>
      <h3>City: {detail.address?.city}</h3>
      <h3>Country: {detail.address?.country}</h3>
      <h3>Phone: {detail.address?.phone}</h3>

    </div>
  </>
  )
}

export default SupplierDetail