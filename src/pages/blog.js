import Container from '@components/elements/Container/Container';
import SEO from '@components/elements/SEO/SEO';
import Footer from '@components/modules/Footer/Footer';
import BlogSection from '@components/templates/BlogSection/BlogSection';
import * as React from 'react';

const BlogPage = ({ location }) => {
  const frontmatter = {
    title: 'Articles | Fabian Lee',
    slug: location.pathname,
  };

  return (
    <>
      <SEO frontmatter={frontmatter} />
      <Container className="pt-12 pb-8 max-w-screen-xl">
        <h2 className="text-4xl font-bold mb-2 text-primary">Articles</h2>
        <p className="text-lg max-w-xl">
          I write about stuff that I&apos;m interested in and hopefully they
          resonates with you too.
        </p>
      </Container>
      <BlogSection />
      <Footer />
    </>
  );
};

export default BlogPage;
