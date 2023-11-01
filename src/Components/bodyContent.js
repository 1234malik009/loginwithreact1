import React from "react";
import { Layout, Typography, Button } from 'antd';

const BodyContent = ({setMainPage}) => {

    const clickHandle = () => {
    setMainPage(1);
  }


  return (
    <div className='bcontent'>
      <Layout className="main-layout" style={{ width: '40%', display: 'flex', alignItems: 'center' }}>
      <Typography.Title level={1} style={{color:'white'}}>Welcome To My Web App</Typography.Title>
        <Typography.Title level={3} style={{ color: 'white' }}>Click Button To Login</Typography.Title>
        <Button type='primary' onClick={clickHandle}>
          Enter
        </Button>
      </Layout>
    </div>
  );
}

export default BodyContent;
