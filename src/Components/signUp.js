
import { Button, Form ,Input } from 'antd';
import React from 'react';
import { Typography } from 'antd';

const signUp = ({setMainPage}) => {

    const goHome = () =>{
        setMainPage(0);
    } 

  return (
   <div className='main-content'>
   <div className="login-main">
    <Form>
    <Typography.Title level={1} style={{color:'white',marginBottom:'30px'}}>SignUp</Typography.Title>
        <Form.Item
        label='First Name'
        name="firstname"
        required>
        <Input type='text' placeholder='Enter First Name'  />
        </Form.Item>
        <Form.Item
        label='Last Name'
        name="lastname"
        required>
        <Input type='text' placeholder='Enter Last Name'  />
        </Form.Item>
        <Form.Item
        label='Password'
        name="pasword"
        required>
        <Input type='password' placeholder='Enter Password'  />
        </Form.Item>
        <Form.Item
        label='Confirm Password'
        name="cpassword"
        required>
        <Input type='password' placeholder='Enter Confirm Password'  />
        </Form.Item>
        <Form.Item
        label='Email'
        name="email"
        required>
        <Input type='email' placeholder='exemple@.com'  />
        </Form.Item>
        <Form.Item
        label='Phone Number'
        name="pnumber"
        required>
        <Input type='number' placeholder='+012345678'  />
        </Form.Item>
        <Button type='primary' htmlType='submit' block>SignUp</Button>
        <Button type='primary' onClick={goHome}  style={{marginTop:'10px'}}>Go Home</Button>
    </Form>
   </div>

   </div>
    
  )
}
export default signUp
