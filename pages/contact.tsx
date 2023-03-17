"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Post } from '../typings.d';
import Header from '../components/header';
import Banner from '../components/banner';
import Mouse from 'components/mouse';


interface FormInput {
  _id: string;
  name: string;
  email: string;
  comment: string;
};

interface Props {
  post: Post;
};


export default function Contact ({post}: Props) {
  const [submitted, setSubmitted] = useState(false);
  const {register, handleSubmit, formState: {errors}} = useForm<FormInput>()



  const onSubmit: SubmitHandler<FormInput> = async(data) => {
    console.log(data);
    
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
    })
  };
  
  return (
    <div className="contact">
      <Mouse/>
      <div className="max-w-5xl mx-auto">
        <Header/>
        <Banner/>
        <article className="px-10 pb-10">
          <section className="space-y-1 border-transparent text-black">
            <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
              <section className="p-4 bg-transparent w-full">
                <div className="flex flex-col md:flex-row justify-between gap-y-5">
                  <div>
                    <h1 className="text-6xl font-extrabold font-MontserratAlternates">
                      Contact
                    </h1>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <div className="border-r-black border-l-black border border-opacity-10 
            bg-[#fff6f06c] border-t-transparent border-b-transparent cursor-default" >
            <div className=" px-10" >
              <h2 className="mt-16 text-[#000000] text-xl leading-8 font-semibold font-Quicksand px-10 ">
                <b className="text-5xl font-bold">W</b>e'd love to hear from you! If you have any questions, comments, or feedback about <i>GMRseat</i>, please don't hesitate to get in touch. Here are some ways you can contact us: <br/>
              </h2>
              <div className="py-10" >
               

              <span className="ml-10 overflow-clip">
                <h2 className=" text-[#6b6b6b]  text-xl leading-8 font-semibold font-Quicksand px-20 ">

                <b className='font-bold text-lg underline decoration-[#992715de]'>Email:</b> You can reach us at <u>gmrseat@gmail.com</u>. We'll do our best to respond to your message within 24-48 hours.
                </h2>
              </span>

              <span className="ml-10 overflow-clip">
                <h2 className=" text-[#6b6b6b]  text-xl leading-8 font-semibold font-Quicksand px-20 ">

                <b className='font-bold text-lg underline decoration-[#992715de]'>Social Media:</b> Follow us on Twitter, Instagram, and Facebook to stay up-to-date on the latest news and trends in the gaming world. You can also send us a direct message on any of these platforms. 
                </h2>
              </span>

              <span className="ml-10 overflow-clip">
                <h2 className=" text-[#6b6b6b]  text-xl leading-8 font-semibold font-Quicksand px-20 ">

                <b className='font-bold text-lg underline decoration-[#992715de]'>Contact Form:</b> Use our online contact form to send us a message directly through our website. We'll get back to you as soon as possible.
                </h2>
              </span>
              <h2 className="mt-16 text-[#000000]  text-xl leading-8 font-semibold font-Quicksand px-10 ">

                At <i>GMRseat</i>, we value your feedback and suggestions. Whether you have an idea for a new blog post, want to recommend a game for us to review, or just want to say hello, we're always happy to hear from our readers. So don't be shy - drop us a line and let us know what's on your mind!
              </h2>
              </div>
            </div>
            <div>
              {submitted ? (
              <div className="flex 
                flex-col p-10 my-10 
                bg-[#992715de] text-white 
                max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold">
                  Thank you for reaching out!
                </h3>
                <p>
                  Give us a second to look you message over!
                </p>
              </div>
              ): (
              <form className="flex flex-col
                p-5 max-w-2xl
                mx-auto mb-10"
                onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-sm text-[#992715de]">
                  Want to reach out?
                </h3>
                <h4 className="text-3xl font-bold">
                  Email us below!
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
                    placeholder="Contact us here" 
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
            </div>
          </div>
        </article> 
      </div>
    </div>
  );
};

