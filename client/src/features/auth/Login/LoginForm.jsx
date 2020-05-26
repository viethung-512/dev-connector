import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { openModal } from '../../modal/modal.actions';
import { login } from '../auth.actions';

const { Text } = Typography;

function LoginForm(props) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const { loading, errors } = useSelector(state => state.async);

  const handleSubmit = values => {
    const userCredentials = {
      email: values.email,
      password: values.password,
    };

    dispatch(login(userCredentials));
  };
  const signUp = () => dispatch(openModal('ModalRegister'));

  return (
    <Form form={form} onFinish={handleSubmit} autoComplete='off'>
      <Form.Item
        name='email'
        rules={[
          { required: true, message: 'Email is required' },
          { type: 'email', message: 'Please enter a valid email address' },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder='Your email address' />
      </Form.Item>
      <Form.Item
        name='password'
        rules={[{ required: true, message: 'Password is required' }]}
        style={errors ? { marginBottom: 12 } : null}
      >
        <Input.Password prefix={<LockOutlined />} placeholder='Your password' />
      </Form.Item>
      {errors && (
        <Form.Item style={{ marginBottom: 12 }}>
          {errors.length > 0 &&
            errors.map(({ msg }, index) => (
              <Text type='danger' key={index}>
                {msg}
              </Text>
            ))}
        </Form.Item>
      )}
      <Form.Item>
        <Button
          type='primary'
          style={{ width: '100%' }}
          htmlType='submit'
          loading={loading}
        >
          Login
        </Button>
      </Form.Item>
      <Form.Item>
        <Text
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          Don't have an account?
          <Button type='link' onClick={signUp}>
            Sign Up
          </Button>
        </Text>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
