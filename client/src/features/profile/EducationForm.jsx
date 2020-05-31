import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, DatePicker, Space, Button, Checkbox } from 'antd';
import { addEducation } from './profile.actions';
import { closeModal } from '../modal/modal.actions';

function EducationForm(props) {
  const dispatch = useDispatch();
  const loading = useSelector(state =>
    state.async.type === 'addEducation' ? state.async.loading : false
  );
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(false);

  const handleCurrentChange = e => setCurrent(e.target.checked);

  const handleCancel = () => dispatch(closeModal());

  const handleSubmit = education => {
    if (education.from) {
      education.from = education.from.format('YYYY-MM-DD');
    }
    if (education.to) {
      education.to = education.to.format('YYYY-MM-DD');
    }
    dispatch(addEducation(education));
  };

  return (
    <Form form={form} onFinish={handleSubmit} autoComplete='off'>
      <Form.Item
        name='school'
        rules={[{ required: true, message: 'School is required' }]}
      >
        <Input placeholder='School or Bootcamp' />
      </Form.Item>
      <Form.Item
        name='degree'
        rules={[{ required: true, message: 'Degree is required' }]}
      >
        <Input placeholder='Degree or Certificate' />
      </Form.Item>
      <Form.Item
        name='fieldOfStudy'
        rules={[{ required: true, message: 'Field Of Study is required' }]}
      >
        <Input placeholder='Field Of Study' />
      </Form.Item>
      <Form.Item name='from'>
        <DatePicker style={{ width: '100%' }} placeholder='From Date' />
      </Form.Item>
      <Form.Item name='current' valuePropName='checked'>
        <Checkbox onChange={handleCurrentChange}>
          Current School or Bootcamp
        </Checkbox>
      </Form.Item>
      <Form.Item name='to'>
        <DatePicker
          style={{ width: '100%' }}
          placeholder='To Date'
          disabled={current}
        />
      </Form.Item>
      <Form.Item>
        <Input.TextArea rows={3} placeholder='Program Description' />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type='primary' htmlType='submit' loading={loading}>
            Send
          </Button>
          <Button type='default' onClick={handleCancel}>
            Go Back
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

export default EducationForm;
