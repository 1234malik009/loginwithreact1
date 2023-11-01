import React from "react";
import { Input, Typography, Button } from "antd";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for routing
import { MenuOutlined } from "@ant-design/icons";

const Header = ({ setMainPage }) => {
  const goAbout = () => {
    setMainPage(3);
  };

  const goHome = () => {
    setMainPage(0);
  };

  const goService = () => {
    setMainPage(4);
  };

  const showMenu = () => {
    const show = document.querySelector('.search-section-1');
    if (show.style.display === 'block') {
      show.style.display = 'none';
    } else {
      show.style.display = 'block'; // Fix this line
    }
  };

  return (
    <div className="header-section">
      <div className="logo-section">
        <Link to="/">
          <Typography.Title level={3} className="logo-text" style={{ color: 'white' }}>
            Logo Image
          </Typography.Title>
        </Link>
      </div>
      <div className="search-section">
        <ul>
          <Link to="/" onClick={goHome}>
            <li>Home</li>
          </Link>
          <Link onClick={goService}>
            <li>Service</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link onClick={goAbout}>
            <li>About Us</li>
          </Link>
          <Input label="Search" placeholder="Search Here" style={{ width: '150px' }} />
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </ul>
      </div>
      <div className="search-section-1">
        <ul>
          <Link to="/" onClick={goHome}>
            <li>Home</li>
          </Link>
          <Link onClick={goService}>
            <li>Service</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link onClick={goAbout}>
            <li>About Us</li>
          </Link>
          <Input label="Search" placeholder="Search Here" style={{ width: '150px' }} />
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </ul>
      </div>
      <MenuOutlined onClick={showMenu} className="menu-btn" style={{ color: 'white', marginRight: '10px', fontSize: '30px' }} />
    </div>
  );
};

export default Header;
