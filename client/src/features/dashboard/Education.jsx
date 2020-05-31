import React from 'react';
import { Typography, Table, Button } from 'antd';
import { Fragment } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { formatRowData } from '../../app/utils/helper';

const { Title, Text } = Typography;

const EducationActions = ({ deleteEducation, deleteLoading }) => (
  <Fragment>
    <Button
      danger
      icon={<DeleteOutlined />}
      type='primary'
      onClick={deleteEducation}
      loading={deleteLoading}
    >
      Delete
    </Button>
  </Fragment>
);

function Education({
  education,
  addEducation,
  deleteEducation,
  loading,
  edId,
}) {
  const columns = [
    {
      title: 'School',
      dataIndex: 'school',
      key: 'school',
    },
    {
      title: 'Degree',
      dataIndex: 'degree',
      key: 'degree',
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: item => (
        <EducationActions
          deleteEducation={() => deleteEducation(item._id)}
          deleteLoading={item._id === edId ? loading : false}
        />
      ),
    },
  ];

  return (
    <Fragment>
      <Title level={2}>Education Credentials</Title>
      {education.length > 0 ? (
        <Table
          bordered
          dataSource={formatRowData(education)}
          columns={columns}
          pagination={false}
        />
      ) : (
        <Text>
          You don't have any education, create{' '}
          <Button type='link' style={{ padding: 0 }} onClick={addEducation}>
            here
          </Button>
        </Text>
      )}
    </Fragment>
  );
}

export default Education;
