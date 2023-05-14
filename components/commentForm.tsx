"use client";

import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

import { Post } from '../typings.d';

interface FormInput {
  _id: string;
  name: string;
  email: string;
  comment: string;
};

interface Props {
  post: Post;
};


const CommentForm = ({post}: Props) => {
  const [submitted, setSubmitted] = useState(false);
  const {register, handleSubmit, formState: {errors}} = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async(data) => {
    await fetch('/api/create-comment', {
      method: "POST",
      body: JSON.stringify(data),
    })
    .then(() => {
      setSubmitted(true);
    })
    .catch((e) => {
      console.error(e);
      setSubmitted(false);
    });
  };

  return (
    <div>
      {submitted ? (
       <div className="flex 
        flex-col p-10 my-10 
        bg-[#992715de] text-white 
        max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold">
          Thank you for submitting your comment
        </h3>
        <p>
          Give us a second to review!
        </p>
       </div>
      ): (
      <form className="flex flex-col
        p-5 max-w-2xl
        mx-auto mb-10"
        onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-sm text-[#992715de]">
          Enjoyed this article?
        </h3>
        <h4 className="text-3xl font-bold">
          Leave a comment below!
        </h4>
        <hr className="py-3 mt-2" />
        <input type="hidden"
          {...register("_id")}
          name="_id"
          value={post && post._id} />
        <label className="block mb-5">
          <span className="text-gray-700">Name</span>
          <input className="shadow border 
            rounded py-2 px-3 
            form-input mt-1 block 
            w-full ring-[#992715de]
            outline-none focus:ring"
            {...register("name", { required: true })} 
            placeholder="Name" 
            type="text" />
        </label>
        <label className="block mb-5">
          <span className="text-gray-700">Email</span>
          <input className="shadow border 
            rounded py-2 px-3 
            form-input mt-1 block 
            w-full ring-[#992715de]
            outline-none focus:ring" 
            {...register("email", { required: true })}
            placeholder="Email" 
            type="text" />
        </label>
        <label className="block mb-5">
          <span className="text-gray-700">Comment</span>
          <textarea className="shadow border 
            rounded py-2 px-3 
            form-textarea mt-1 block 
            w-full ring-[#992715de]
            outline-none focus:ring" 
            {...register("comment", { required: true })}
            placeholder="Leave a Comment" 
            rows={8} />
        </label>
        <div className="flex flex-col p-5">
          {errors.name && (
            <span className="text-red-500">
              - The Name Field is Required
            </span>
          )}
          {errors.email && (
            <span className="text-red-500">
              - The Email Field is Required
            </span>
          )}
          {errors.comment && (
            <span className="text-red-500">
              - The Comment Field is Required
            </span>
          )}
        </div>
        <input type="submit" 
          className="shadow bg-transparent
          border-[#992715de]
          border-2
          hover:border-amber-300
          hover:text-amber-300
          focus:shadow-outline
          focus:outline-none
          text-[#992715de] font-bold
          py-2 px-4 rounded
          cursor-pointer"/>
      </form>
      )}
      <div className="flex flex-col 
        p-5 my-5 max-w-2xl
        mx-auto shadow-[#992715de]
        shadow space-y-2">
        <h3 className="text-3xl">Comments</h3>
        <hr className="pb-2"/>

        {post && post.comments.map((comment: any) => (
          <div key={comment._id!}>
            <p>
              <span className="text-[#992715de]">
                {comment.name!}: </span>{comment.comment!}
            </p>
          </div>
        ))}
      </div>    
    </div>
  );
};


export default CommentForm;