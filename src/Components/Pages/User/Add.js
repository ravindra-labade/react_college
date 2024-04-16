import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Add() {
    const {register, handleSubmit} = useForm()

    const navi = useNavigate();

    function saveData(data){
        axios.post('http://localhost:5000/users', data).then(  ()=>{ navi('/show')  } )
            .catch( (e)=>{ alert('server stopped') } )
    }
  return (
        <>
            <div className='container w-50 mt-2'>
                <center><u><h2>COLLEGE FORM</h2></u></center>
                <form onSubmit={handleSubmit(saveData)} className='mt-2'>
                        <label htmlFor='s'><b>SR NO</b></label>
                        <input type='number' id='s' min="0" max="10" className='form-control' {...register('sr')} required />
                        <br /> <br />

                        <label htmlFor='n'><b>NAME</b></label>
                        <input type='text' id='n' minLength={0} maxLength={10} className='form-control' {...register('name')} required/>
                        <br /> <br />

                        
                        <label htmlFor='d'><b>Date Of Birth</b></label>
                        <input type='date' min="2000-01-01" id='d' className='form-control' {...register('city')} />
                        <br /> <br />

                        <label htmlFor='c'><b>COLLEGE</b></label>
                        <input type='text' id='c' className='form-control' {...register('college')} />
                        <br /> <br />

                        <label htmlFor='t'><b>CITY</b></label>
                        <input type='text' id='t' className='form-control' {...register('city')} />
                        <br /> <br />

                        <input type='submit' value="ADD COLLEGE" className='btn btn-outline-success col-6' />
                        <input type='reset' value="RESET" className='btn btn-outline-warning col-6' />
                </form>
            </div>
        </>
  )
}

export default Add