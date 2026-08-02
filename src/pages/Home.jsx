// src/pages/Home.jsx

import { Card, Typography } from 'antd'

const { Paragraph, Title } = Typography

const Home = () => {
  return (
    <Card>
      <Title level={2}>Welcome to the Student Directory</Title>
      <Paragraph>
        Browse the student list, view student details, or add a student.
      </Paragraph>
    </Card>
  )
}

export default Home
