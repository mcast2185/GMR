
import Header from '../components/header';
import Banner from '../components/banner';
import CommentForm from 'components/commentForm';
import { Post } from 'typings';

interface Props {
  post: Post;
};


export default function About ({post}: Props) {
  
  return (
    <div className="contact">
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
            <div className="mt-8 px-10" >
              <h2 className="py-5 text-[#6b6b6b] text-xl leading-8 font-semibold font-Quicksand px-10 ">
                We'd love to hear from you! If you have any questions, comments, or feedback about GMRseat, please don't hesitate to get in touch. Here are some ways you can contact us: <br/>
              </h2>
                <span className="ml-15 overflow-clip">
                  <h2 className=" text-[#000000]  text-xl leading-8 font-semibold font-Quicksand px-20 ">

                  <b className='font-bold text-lg underline decoration-[#992715de]'>Email:</b> You can reach us at [insert email address here]. We'll do our best to respond to your message within 24-48 hours.
                  </h2>
                </span>

                <span className="ml-10 overflow-clip">
                  <h2 className=" text-[#000000]  text-xl leading-8 font-semibold font-Quicksand px-20 ">

                  <b className='font-bold text-lg underline decoration-[#992715de]'>Social Media:</b> Follow us on Twitter, Instagram, and Facebook to stay up-to-date on the latest news and trends in the gaming world. You can also send us a direct message on any of these platforms. 
                  </h2>
                </span>

                <span className="ml-10 overflow-clip">
                  <h2 className=" text-[#000000]  text-xl leading-8 font-semibold font-Quicksand px-20 ">

                  <b className='font-bold text-lg underline decoration-[#992715de]'>Contact Form:</b> Use our online contact form to send us a message directly through our website. We'll get back to you as soon as possible.
                  </h2>
                </span>
                <h2 className="py-5 text-[#6b6b6b]  text-xl leading-8 font-semibold font-Quicksand px-10 ">

                At GMRseat, we value your feedback and suggestions. Whether you have an idea for a new blog post, want to recommend a game for us to review, or just want to say hello, we're always happy to hear from our readers. So don't be shy - drop us a line and let us know what's on your mind!
                </h2>
            </div>
            <CommentForm post={post}/>
          </div>
        </article> 
      </div>
    </div>
  )
};

