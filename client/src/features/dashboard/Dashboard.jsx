import React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { Spin, Divider, Button, Typography } from 'antd';
import { LoadingIcon } from '../../app/layout/common/Icons';
import DashboardHeader from './DashboardHeader';
import DashboardContainer from './DashboardContainer';
import DashboardAction from './DashboardAction';
import { openModal } from '../modal/modal.actions';
import {
  deleteExperience,
  deleteEducation,
  deleteAccount,
} from '../profile/profile.actions';

const { Title } = Typography;

function Dashboard(props) {
  const dispatch = useDispatch();
  const { loading, type, id: elmId } = useSelector(state => state.async);

  const user = useSelector(state => state.auth.user);
  const profile = useSelector(state => state.profile.current);
  const experience = profile ? profile.experience : [];
  const education = profile ? profile.education : [];

  const getProfileLoading = type === 'getProfile' ? loading : false;
  const exDeleteLoading = type === 'deleteExperience' ? loading : false;
  const edDeleteLoading = type === 'deleteEducation' ? loading : false;
  const accDeleteLoading = type === 'deleteAccount' ? loading : false;

  const handleAddExperience = () => dispatch(openModal('ModalExperience'));
  const handleAddEducation = () => dispatch(openModal('ModalEducation'));
  const handleDeleteExperience = exId => dispatch(deleteExperience(exId));
  const handleDeleteEducation = edId => dispatch(deleteEducation(edId));
  const handleDeleteAccount = () => dispatch(deleteAccount());

  const openProfileAction = profile =>
    dispatch(openModal('ModalProfileAction', { profile }));

  return (
    <Spin spinning={getProfileLoading} indicator={LoadingIcon}>
      <div className='dashboard'>
        <DashboardHeader
          user={user}
          addExperience={handleAddExperience}
          addEducation={handleAddEducation}
          profile={profile}
          updateProfile={openProfileAction}
        />
        <Divider />
        {profile ? (
          <DashboardContainer
            experience={experience}
            education={education}
            addExperience={handleAddExperience}
            addEducation={handleAddEducation}
            deleteExperience={handleDeleteExperience}
            deleteEducation={handleDeleteEducation}
            exDeleteLoading={exDeleteLoading}
            edDeleteLoading={edDeleteLoading}
            elmId={elmId}
          />
        ) : (
          <div>
            <Title level={4}>
              You haven't yet setup a profile, please add some info
            </Title>
            <Button type='primary' onClick={openProfileAction}>
              Create a new profile
            </Button>
          </div>
        )}

        <Divider />
        <DashboardAction
          deleteAccount={handleDeleteAccount}
          loading={accDeleteLoading}
        />
      </div>
    </Spin>
  );
}

export default Dashboard;
