import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Post } from '../typings.d';
import Image from 'next/image';
import urlFor from '../lib/urlFor';
import ClientSideRoute from './clientSideRoute';

type Props = {
  posts: Post[];
};

// Component organizes the created blogs for the home page.

export default function BlogList({posts}: Props) {
  const filteredPosts = posts.slice(0, 6);

  return (
    <div>
      <hr className="border-[#992715de] mb-10"/>
      <div className="grid grid-cols-1 
        md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {filteredPosts.map((post) => (
          <ClientSideRoute key={post._id} 
            route={`/post/${post.slug.current}`}>
            <div className="group cursor-pointer overflow-hidden flex flex-col">
              <div className="relative w-full h-80 drop-shadow-xl 
                group-hover:scale-105 overflow-hidden transition-transform duration-200 ease-out">
                <Image
                  priority
                  className='object-cover 
                  object-left lg:object-center'
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  sizes='height: auto, width: auto'
                  fill
                />
                <div className="absolute bottom-0 w-full 
                  bg-opacity-40 bg-black backdrop-blur-lg 
                  rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold font-Montserrat" >
                      {post.title}
                    </p>
                    <p className="font-Quicksand font-bold text-base">
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row 
                    gap-y-2 md:gap-x-2 items-center">
                    {post.categories.map((category) => (
                      <div className="bg-[#992715de] font-Quicksand text-center 
                        text-white px-3 py-1 rounded-full text-sm font-bold">
                       <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex-1">
                <p className="underline text-lg 
                  font-extrabold font-JuliusSansOne">
                  {post.title}
                </p>
                <p className="line-clamp-2 text-gray-500 
                  text-base font-Quicksand font-extrabold">
                  {post.description}
                </p>
              </div>
              <p className="mt-5 font-MontserratAlternates 
                font-bold flex items-center group-hover:underline">
                Read Post
                <ArrowRightIcon className='ml-2 h-4 w-4'/>
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

