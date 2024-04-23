import React from 'react'
import { Menu ,Button, Dropdown, Space } from 'antd';
import '../resources/defaultLayout.css'
import {useNavigate} from 'react-router-dom'


function DefaultLayout(props) {
  const user =JSON.parse(localStorage.getItem('MyMoney-users'))
  const navigate =useNavigate()
 const menu = (
  <Menu 
   items= {[
      {
      label: (
        <li onClick={()=>{
          localStorage.removeItem('MyMoney-users')
          navigate('/login');
        }}>Logout</li>
      ),
    }, 
  ]}
/>
);
  return (
    <div className='layout'>
      <div className='header d-flex justify-content-between align-items-center'>
        <div>
          <h1 className='logo'>Expense Tracker</h1>
        </div>
        <div>
        <Dropdown overlay={menu} placement="bottomLeft">
       <button className='secondary'>{user.name}</button>
      </Dropdown>   
        </div>
      </div>
      <div className='content'>{props.children}</div>
    </div>
  )
}

export default DefaultLayout