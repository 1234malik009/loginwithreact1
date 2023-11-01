import React, { useState } from "react";
import { Form, Typography, Input, Button, Divider } from "antd";
import {
  GoogleOutlined,
  FacebookFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const MainContent = ({ setMainPage }) => {
  const goBack = () => {
    setMainPage(0);
  };
  const goSignUp = () => {
    setMainPage(2);
  }

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const getData = (e) => {
    const { name, value } = e.target; // Use 'name' instead of 'username' and 'password'
    setFormData({
      ...formData,
      [name]: value
    });

    localStorage.setItem('formData', JSON.stringify({
      ...formData,
      [name]: value
    }));
  };

  return (
    <div className="main-content">
      <div className="login-main">
        <div className="upper-main">
          <Typography.Title level={1}>Login</Typography.Title>
          <Form>
            <Form.Item label="Username" name="username">
              <Input
                name="username" // Add 'name' attribute
                placeholder="UserName"
                type="text"
                required
                onChange={getData}
              />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input
                name="password" // Add 'name' attribute
                placeholder="Password"
                type="password"
                autoComplete="off"
                required
                onChange={getData}
                minLength={6}
                maxLength={12}
              />
            </Form.Item>
            <Form.Item className="forget">
              <Link to="/">
                <Typography.Text style={{ fontSize: "12px" }}>
                  Forgot Password?
                </Typography.Text>
              </Link>
            </Form.Item>
            <Form.Item className="text-center">
              <Button
                type="primary"
                htmlType="submit"
                style={{ color: "white" }}
                block
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="lower-main">
          <div className="icon-section">
            <Typography.Text>Or SignUp Using</Typography.Text>
            <br />
            <div className="icon">
              <Link to="/">
                <GoogleOutlined style={{ color: "red", fontSize: "30px" }} />
              </Link>
              <Link to="/">
                <FacebookFilled style={{ color: "blue", fontSize: "30px" }} />
              </Link>
              <Link to="/">
                <TwitterOutlined style={{ color: "#1da1f2", fontSize: "30px" }} />
              </Link>
            </div>
          </div>
          <div className="signup-section">
            <Typography.Text>Or SignUp Using </Typography.Text>
            <Divider style={{borderColor:'black'}}>
            <a onClick={goSignUp}>SignUp</a>
            <br />
            <br />
            <Button type="primary" htmlType="submit" block onClick={goBack}>
              Go Home
            </Button>
            </Divider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
