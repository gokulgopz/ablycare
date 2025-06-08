"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Linkedin, Facebook, Instagram, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

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

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch the blog post by ID from your API
    // For now, we're using a mock function that returns the blog from our sample data
    const fetchBlog = async () => {
      try {
        // Sample blogs data - in a real app, you would import this or fetch from an API
        const blogs = blogsData
        
        const blogId = parseInt(params.id);
        const foundBlog = blogs.find(b => b.id === blogId);
        
        if (foundBlog) {
          setBlog(foundBlog);
        } else {
          router.push('/blogs'); // Redirect to blogs page if blog not found
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlog();
  }, [params.id, router]);

  // Function to render content with images
  const renderContentWithImages = (content: string, images?: { id: string; url: string; alt: string; caption?: string }[]) => {
    if (!images || images.length === 0) {
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }

    // Split content by h2 tags to insert images
    const sections = content.split(/(<h2[^>]*>.*?<\/h2>)/);
    const elements = [];

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      
      if (section.includes('<h2')) {
        // Extract the id from h2 tag
        const idMatch = section.match(/id="([^"]+)"/);
        const sectionId = idMatch ? idMatch[1] : null;
        
        elements.push(
          <div key={`section-${i}`} dangerouslySetInnerHTML={{ __html: section }} />
        );
        
        // Find matching image for this section
        const matchingImage = images.find(img => img.id === sectionId);
        if (matchingImage) {
          elements.push(
            <div key={`image-${i}`} className="my-6">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src={matchingImage.url}
                  alt={matchingImage.alt}
                  fill
                  className="object-cover"
                />
              </div>
              {matchingImage.caption && (
                <p className="text-sm text-gray-600 mt-2 text-center italic">
                  {matchingImage.caption}
                </p>
              )}
            </div>
          );
        }
      } else if (section.trim()) {
        elements.push(
          <div key={`content-${i}`} dangerouslySetInnerHTML={{ __html: section }} />
        );
      }
    }

    return <>{elements}</>;
  };
  
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
  
  if (!blog) {
    return <div className="flex justify-center items-center h-screen">Blog not found</div>;
  }
  
  return (
    <main className="mx-auto p-4 w-full lg:max-w-6xl mt-20">
      {/* Back button */}
      <Link href="/blogs" passHref>
        <Button variant="ghost" className="mb-6 flex items-center gap-2 text-customAccent">
          <ArrowLeft size={18} />
          Back to Blogs
        </Button>
      </Link>
      
      {/* Blog header */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <CalendarIcon className="mr-2 h-4 w-4" />
          <span>Published</span>
          <span className="ml-2">{blog.date}</span>
        </div>
        <h1 className="text-3xl font-bold text-customAccent mb-4">{blog.title}</h1>
        
        {/* Hero Image */}
        {blog.heroImage && (
          <div className="mb-6">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src={blog.heroImage}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}
        
        <div className="text-lg text-gray-600 mb-4">
          <h2 className="text-base font-medium mb-2">Summary</h2>
          <p>{blog.summary}</p>
        </div>
        
        {/* Social share links */}
        <div className="flex space-x-4 mb-6">
          <a href="#" aria-label="Share on LinkedIn" className="text-customAccent hover:text-complementary">
            <Linkedin size={20} />
          </a>
          <a href="#" aria-label="Share on Facebook" className="text-customAccent hover:text-complementary">
            <Facebook size={20} />
          </a>
          <a href="#" aria-label="Share on Instagram" className="text-customAccent hover:text-complementary">
            <Instagram size={20} />
          </a>
        </div>
      </div>
      
      {/* Main content area with Table of Contents */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Table of Contents - appears at top on mobile, sidebar on desktop */}
        {blog.tableOfContents && (
          <div className="w-full lg:w-1/4 order-1">
            <div className="bg-gray-50 p-4 rounded-lg lg:sticky lg:top-24">
              <h3 className="font-bold text-lg mb-3 text-customAccent">Table of Contents</h3>
              <ul className="space-y-2">
                {blog.tableOfContents.map((item, index) => {
                  const anchor = item.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <li key={index} className="text-sm">
                      <a 
                        href={`#${anchor}`} 
                        className="text-gray-600 hover:text-customAccent transition-colors duration-200"
                      >
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
        
        {/* Main blog content */}
        <div className={`w-full ${blog.tableOfContents ? 'lg:w-3/4' : ''} order-2`}>
          
          <style jsx global>{`
            .blog-content h2 {
              color: var(--color-custom-accent, #4cc6f7);
              font-size: 1.5rem;
              font-weight: 700;
              margin-top: 2rem;
              margin-bottom: 1rem;
              padding-bottom: 0.5rem;
              border-bottom: 1px solid #e5e7eb;
              scroll-margin-top: 80px;
            }
            
            .blog-content p {
              margin-bottom: 1rem;
              line-height: 1.7;
            }
            
            .blog-content ul {
              list-style-type: disc;
              padding-left: 1.5rem;
              margin-bottom: 1.5rem;
            }
            
            .blog-content li {
              margin-bottom: 0.5rem;
            }
            
            .blog-content strong {
              font-weight: 600;
            }
            
            .blog-content em {
              font-style: italic;
              color: #4b5563;
            }
          `}</style>
          
          <div className="blog-content">
            {renderContentWithImages(blog.content, blog.contentImages)}
          </div>
          
          {/* Tags section */}
          <div className="mt-8 pt-4 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {blog.tags?.map((tag, index) => (
                <Badge key={index} variant="outline" className="bg-customAccent/10 text-customAccent hover:bg-complementary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}