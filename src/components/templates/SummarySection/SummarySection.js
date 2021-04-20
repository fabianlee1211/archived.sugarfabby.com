import Container from '@components/elements/Container/Container';
import { graphql, Link as NavLink, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { PostItem } from './SummaryItems';

const SummarySection = () => {
  const data = useStaticQuery(graphql`
    query {
      blog: allMdx(
        filter: {
          fileAbsolutePath: { regex: "//content/blog//" }
          frontmatter: { published: { eq: true } }
        }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 3
      ) {
        nodes {
          id
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
            category
          }
        }
      }
    }
  `);

  const posts = data.blog.nodes;

  return (
    <Container className="py-14 max-w-screen-xl bg-b">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-4">
          <p className="uppercase tracking-widest text-primary">
            Latest Articles
          </p>
          <div className="grid grid-cols-1 gap-6">
            {posts.map((p) => {
              return (
                <PostItem
                  key={p.id}
                  {...p.frontmatter}
                  link={p.fields.slug}
                  timeToRead={p.timeToRead}
                />
              );
            })}
          </div>
          <NavLink className="text-primary hover:underline" to="/blog">
            View All
          </NavLink>
        </div>
      </div>
    </Container>
  );
};

export default SummarySection;
