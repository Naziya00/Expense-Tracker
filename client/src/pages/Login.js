import React, { useEffect, useState } from 'react'
import Input from "antd/lib/input/Input"
import { Link ,useNavigate } from 'react-router-dom';
import { Form ,message } from 'antd'
import '../resources/authentication.css'
import axios from 'axios'
import Spinner from "../components/Spinner"

function Login() {
     const[loading , setLoading] = useState(false)
    const navigate = useNavigate()
    const onFinish=async(values)=>{
try{
    setLoading(true)
    const response = await axios.post('/api/users/login', values)
    localStorage.setItem('MyMoney-users', JSON.stringify({ ...response.data, password:''}))
    setLoading(false)
    message.success('Login Successful')
    navigate('/')
}
catch(error){
    setLoading(false)
    message.error('Login failed')

}
    };

    useEffect(()=>{
        if(localStorage.getItem('MyMoney-users'))
        {
            navigate('/')
        }
       }, []);
    return (
        <div className='register'>
            {loading &&  <Spinner />}
            <div className='row justify-content-center align-items-center w-100 h-100'>
               
                <div className='col-md-4'>
                    <Form layout='vertical' onFinish={onFinish}>
            <h1>LOGIN</h1> 
            
                  
                        <Form.Item label='Email' name='email'>
                            <Input />
                        </Form.Item>
                        <Form.Item label='Password' name='password'>
                            <Input type ='password'/>
                        </Form.Item>

                        <div className='d-flex justify-content-between align-items-center'>
                    
                            <Link to='/register'>Not Registered Yet, Click Here To Register</Link>
                            <button className='primary' type='submit'>LOGIN</button>
                        </div>
                    </Form>

                </div>
                    <div className='col-md-5'>
                    <div className='lottie1'>
                    <dotlottie-player src="https://lottie.host/b0dcdc23-f44a-443a-84b7-9e6dfb5a9dd1/wRmmKdynBJ.json" background="transparent" speed="1"  loop autoplay></dotlottie-player>
                </div>
            </div>
                </div>
        </div>
    );
}

export default Login