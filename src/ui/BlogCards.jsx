/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import formatTimestamp from '@/js/convertTime';
import { urlFor } from '@/lib/sanity';

const BlogCards = ({ blog }) => {
    return (
        <div className="card p-3 shadow-xl max-h-[450px] flex flex-col justify-between">
            {/* Optimized Title Image */}
            <div className="relative h-[150px] w-full">
                <Image
                    src={urlFor(blog.titleImage).url()}
                    alt={blog.title || blog?.currentSlug}
                    fill
                    sizes="(max-width: 768px) 100vw, 100vw"
                    className="object-cover"
                />
            </div>

            <div className="card-body p-0 mt-3">
                <h2 className="card-title inter text-base font-semibold">{blog?.title}</h2>
                <hr className="h-[2px]" />

                {/* Author Section */}
                <div className="flex items-center gap-2">
                    <Image
                        src={urlFor(blog?.authorImage).url()}
                        width={30}
                        height={30} // Fixed height to prevent CLS
                        className="rounded-full"
                        alt={blog.authorName}
                    />
                    <h5 className="text-xs font-bold inter">{blog?.authorName}</h5>
                </div>

                <p className="inter text-xs font-normal text-[#6C757D]">
                    {formatTimestamp(blog?.date)}
                </p>

                {/* View Post Button */}
                <Link href={`/blogs/${blog?.currentSlug}`} className="w-full">
                    <button className="btn w-full rounded-lg bg-primary text-white">View post</button>
                </Link>
            </div>
        </div>
    );
};

export default BlogCards;
