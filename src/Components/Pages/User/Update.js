import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Update() {
    const {register, handleSubmit, setValue} = useForm();

    const {userId} = useParams();
    const navi = useNavigate();

    async function fetchData(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`);
        setValue('sr', result.data.sr);
        setValue('name', result.data.name);
        setValue('college', result.data.college);
        setValue('city', result.data.city);
    }
    function saveData(data){
        axios.put(`http://localhost:5000/users/${userId}`, data);
        navi('/show')
    }
    useEffect(()=>{
        fetchData();
    }, [])
  return (
    <>
             <div className='container w-50 mt-3'>
                <center><u><h2>COLLEGE UPDATE FORM</h2></u></center>
                <form onSubmit={handleSubmit(saveData)} className='mt-5'>
                        <label htmlFor='s'><b>SR NO</b></label>
                        <input type='number' id='s' className='form-control' {...register('sr')} />
                        <br /> <br />

                        <label htmlFor='n'><b>NAME</b></label>
                        <input type='text' id='n' className='form-control' {...register('name')} />
                        <br /> <br />

                        <label htmlFor='c'><b>COLLEGE</b></label>
                        <input type='text' id='c' className='form-control' {...register('college')} />
                        <br /> <br />

                        <label htmlFor='t'><b>CITY</b></label>
                        <input type='text' id='t' className='form-control' {...register('city')} />
                        <br /> <br />

                        <input type='submit' value="UPDATE COLLEGE" className='btn btn-outline-success col-6' />
                        <input type='reset' value="RESET" className='btn btn-outline-warning col-6' />
                </form>
            </div>
    </>
  )
}

export default Update