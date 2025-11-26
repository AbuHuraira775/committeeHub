import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Flex, Form, Input } from 'antd';
import { useEffect, useState } from 'react';

const LoginPage = () => {

  const onFinish = (values) => {
    console.log('Finish:', values);
  };
  const validatePassowrd = (password)=>{
    return password.length < 8 
  }

  return (
    <div className='p-20 rounded-xl bg-gray-300 w-3/4 m-auto'>
    <Form
      name="login"
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Username is required' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Password is required' }]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}

export default LoginPage