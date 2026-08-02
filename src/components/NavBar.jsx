// src/components/NavBar.jsx

import { Button, Space } from 'antd'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <nav>
      <Space wrap>
        <Link to="/">
          <Button type="text" className="nav-button">Home</Button>
        </Link>
        <Link to="/students">
          <Button type="text" className="nav-button">Students</Button>
        </Link>
        <Link to="/students/new">
          <Button type="primary">Add Student</Button>
        </Link>
      </Space>
    </nav>
  )
}

export default NavBar
