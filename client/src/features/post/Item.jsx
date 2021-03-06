import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card, Avatar, Typography, Space, Button } from 'antd';
import { DeleteOutlined, LikeFilled } from '@ant-design/icons';
import { formatDate } from '../../app/utils/helper';

const { Text, Paragraph } = Typography;

function Item({
  item,
  type,
  authUser,
  onlyShowDescription = false,
  likeLoading,
  unlikeLoading,
  deleteLoading,
  likePost,
  unlikePost,
  deletePost,
  deleteComment,
}) {
  const isOwn = item.user === authUser._id;
  const isLiked =
    type === 'post' && item.likes.find(like => like.user === authUser._id);

  const handleLikePost = () => likePost(item._id);
  const handleUnlikePost = () => unlikePost(item._id);
  const handleDeletePost = () => deletePost(item._id);
  const handleDeleteComment = () => deleteComment(item._id);

  return (
    <Card
      bodyStyle={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
      style={{ width: '100%' }}
    >
      <Card.Meta
        className='post-item'
        avatar={
          <div className='post-item__avatar'>
            <Avatar
              src={item.avatar}
              alt={item.name}
              size={100}
              className='post-item__avatar-img'
            />
            <Link to={isOwn ? '/profile/me' : `/profile/${item.user}`}>
              <Text level={4} className='post-item__title'>
                {item.name}
              </Text>
            </Link>
          </div>
        }
        description={
          <div className='post-item-container'>
            <div className='post-item__description'>
              <Paragraph style={{ fontSize: 16 }}>{item.text}</Paragraph>
              {!onlyShowDescription && (
                <Text type='secondary'>Posted on {formatDate(item.date)}</Text>
              )}
            </div>
            {!onlyShowDescription && (
              <div className='post-item__actions'>
                <Space>
                  {type === 'post' && (
                    <Fragment>
                      <Button
                        size='large'
                        type={isLiked ? 'primary' : 'default'}
                        icon={<LikeFilled />}
                        loading={isLiked ? unlikeLoading : likeLoading}
                        onClick={
                          type === 'post'
                            ? isLiked
                              ? handleUnlikePost
                              : handleLikePost
                            : null
                        }
                      >
                        {item.likes.length === 0 ? '' : item.likes.length}
                      </Button>
                      <Link to={`/posts/${item._id}`}>
                        <Button type='primary' size='large'>
                          Discussion{' '}
                          <span className='discussion-number'>
                            {item.comments.length}
                          </span>
                        </Button>
                      </Link>
                    </Fragment>
                  )}

                  {isOwn && (
                    <Button
                      size='large'
                      danger
                      type='primary'
                      icon={<DeleteOutlined />}
                      loading={deleteLoading}
                      onClick={
                        type === 'post' ? handleDeletePost : handleDeleteComment
                      }
                    />
                  )}
                </Space>
              </div>
            )}
          </div>
        }
      />
    </Card>
  );
}

export default Item;
