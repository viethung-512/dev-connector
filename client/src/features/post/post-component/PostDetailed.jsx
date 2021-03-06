import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AddItem from '../AddItem';
import Item from '../Item';
import { getPost, commentOnPost, deleteComment } from '../post.actions';
import { Divider, Button, Spin } from 'antd';
import { LoadingIcon } from '../../../app/layout/common/Icons';
import Comments from '../comment/Comments';

function PostDetailed(props) {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const post = useSelector(state => state.post.current);
  const { user: authUser } = useSelector(state => state.auth);
  const { loading, type, id: elmId } = useSelector(state => state.async);

  const loadingPost = type === 'getPost' ? loading : false;
  const commentLoading = type === 'commentOnPost' ? loading : false;

  const postDetailedLoading = loadingPost;

  useEffect(() => {
    if (postId) {
      dispatch(getPost(postId));
    }

    return () => {};

    // eslint-disable-next-line
  }, [postId]);

  const handleComment = comment => dispatch(commentOnPost(comment, postId));
  const handleDeleteComment = commentId =>
    dispatch(deleteComment(commentId, postId));

  return (
    <div className='post'>
      <Spin spinning={postDetailedLoading} indicator={LoadingIcon}>
        <Link to='/posts'>
          <Button type='default' style={{ marginBottom: 12 }}>
            Back To Posts
          </Button>
        </Link>
        {post && authUser && (
          <Item
            item={post}
            onlyShowDescription={true}
            type='post'
            authUser={authUser}
          />
        )}
        <Divider />
        <AddItem
          placeholder='Comment on this post'
          title='Leave A Comment'
          onSubmit={handleComment}
          loading={commentLoading}
        />
        {post && (
          <Comments
            comments={post.comments}
            authUser={authUser}
            deleteComment={handleDeleteComment}
            loading={loading}
            loadingType={type}
            loadingElm={elmId}
          />
        )}
      </Spin>
    </div>
  );
}

export default PostDetailed;
