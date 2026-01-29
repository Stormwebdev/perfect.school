import React from 'react';
import { motion } from 'motion/react';
import { Card } from '../components/card';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'The Future of Web Development in 2024',
      excerpt: 'Explore the latest trends and technologies shaping the future of web development.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      category: 'Web Development',
      date: 'Jan 25, 2024',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Design Systems That Scale',
      excerpt: 'Learn how to build and maintain design systems for growing organizations.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      category: 'Design',
      date: 'Jan 20, 2024',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'AI in Modern Applications',
      excerpt: 'Discover how artificial intelligence is revolutionizing user experiences.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      category: 'Technology',
      date: 'Jan 15, 2024',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Performance Optimization Tips',
      excerpt: 'Essential techniques to make your web applications lightning fast.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      category: 'Performance',
      date: 'Jan 10, 2024',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Mobile-First Development',
      excerpt: 'Why mobile-first approach is crucial for modern web applications.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      category: 'Mobile',
      date: 'Jan 5, 2024',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Security Best Practices',
      excerpt: 'Protect your applications with these essential security measures.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop',
      category: 'Security',
      date: 'Jan 1, 2024',
      readTime: '9 min read'
    },
  ];
  
  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);
  
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Insights & Updates
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert perspectives on design, development, and digital innovation
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Post */}
      {featuredPost && (
        <section className="px-6 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="aspect-video lg:aspect-auto overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 lg:p-0 lg:pr-8">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4 w-fit">
                      Featured
                    </span>
                    <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                    <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <button className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors w-fit">
                      Read More <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Blog Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="inline-block px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs mb-3 w-fit">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
