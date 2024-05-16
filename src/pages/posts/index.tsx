import React from 'react';
import { CreatePost } from '../../components/create-post';
import { useGetAllPostsQuery } from '../../app/services/postsApi';

export const Posts = () => {
  const { data } = useGetAllPostsQuery();

  return (
    <>
      <div className="mb-10 w-full flex">
        <CreatePost />
      </div>
    </>
  );
};
