"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon } from "lucide-react";
import BlogsHero from '@/components/blogs/BlogsHero';
import Link from 'next/link';
import { blogsData } from '@/data/blogsData';


interface Blog {
  id: number;
  title: string;
  date: string;
  summary: string;
  content: string;
  heroImage?: string;
  contentImages?: { id: string; url: string; alt: string; caption?: string }[];
  tags?: string[];
  tableOfContents?: string[];
}

export default function BlogPage(): JSX.Element {
  const [openBlogId, setOpenBlogId] = useState<number | null>(null);
  
  const blogs: Blog[] = blogsData

  return (
    <main className="mx-auto p-2 w-full lg:max-w-7xl mt-20">
      <BlogsHero />

      <div className="container mx-auto px-4 py-12 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Card key={blog.id} className="flex flex-col rounded-xl h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2 font-inter">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {blog.date}
                </div>
                <CardTitle className="text-xl font-bold text-customAccent font-poppins">{blog.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow font-inter">
                <p className="text-gray-600">{blog.summary}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags?.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-customAccent/10 text-customAccent hover:bg-customAccent-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                  <Link href={`/blogs/${blog.id}`} passHref>
                    <Button className="bg-customAccent hover:bg-complementary">Read More</Button>
                  </Link>
                  </DialogTrigger>
                  {/* <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <div className="flex items-center text-sm text-gray-500 mb-2 font-inter">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {blog.date}
                      </div>
                      <DialogTitle className="text-2xl font-bold text-customAccent font-poppins">{blog.title}</DialogTitle>
                      <DialogDescription className="text-gray-600 mt-2 font-inter">{blog.summary}</DialogDescription>
                    </DialogHeader>
                    
                    <div className="mt-6">
                      <div 
                        className="prose max-w-none font-inter" 
                        dangerouslySetInnerHTML={{ __html: blog.content }} 
                      />
                    </div>
                    
                    <div className="mt-8 pt-4 border-t border-gray-200">
                      <div className="flex flex-wrap gap-2">
                        {blog.tags?.map((tag, index) => (
                          <Badge key={index} variant="outline" className="bg-blue-50 text-customAccent hover:bg-complementary font-inter">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </DialogContent> */}
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}