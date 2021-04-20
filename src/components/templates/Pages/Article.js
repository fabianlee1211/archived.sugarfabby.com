import Container from '@components/elements/Container/Container';
import Arrow from '@components/elements/Icon/Arrow';
import Link from '@components/elements/MDX/Link';
import Pill from '@components/elements/Pill/Pill';
import SEO from '@components/elements/SEO/SEO';
import Share from '@components/elements/Share/Share';
import Footer from '@components/modules/Footer/Footer';
import { graphql, Link as NavLink } from 'gatsby';
import { GatsbyImage, getSrc } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import 'prism-theme-night-owl';
import * as React from 'react';
import config from '../../../../config';

const Article = ({ data: { mdx }, pageContext }) => {
  const { next, prev } = pageContext;
  const { body, frontmatter, fields, timeToRead } = mdx;
  const { slug, editLink } = fields;
  const {
    title,
    description,
    banner,
    bannerCredit,
    bannerLink,
    date,
    category,
    keywords,
  } = frontmatter;

  const blogPostUrl = `${config.siteUrl}${slug}`;
  const categorySlug = category && category.replace(/\s/g, '-').toLowerCase();

  return (
    <>
      <SEO
        frontmatter={{ ...frontmatter, slug }}
        metaImage={getSrc(banner)}
        isBlogPost
      />
      <Container isBlog className="max-w-screen-md pt-12 pb-12">
        <article>
          <div className="flex flex-col mb-10">
            <div className="flex items-center space-x-2">
              {category && (
                <Pill
                  to={`/${categorySlug}`}
                  className="text-primary bg-blue-500 bg-opacity-20 py-1 hover:text-white hover:bg-primary"
                >
                  {category}
                </Pill>
              )}
              <p
                className="text-xs font-medium"
                style={{ color: 'var(--color-text-secondary)' }}
              >{`${date} • ${timeToRead} minute read`}</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold my-4">{title}</h2>
            <p className="text-lg md:text-xl font-extralight">{description}</p>
          </div>

          {banner && (
            <div className="flex flex-col mb-10">
              <GatsbyImage
                image={banner.childImageSharp.gatsbyImageData}
                className="md:rounded-md -mx-4"
                alt="post-banner"
              />
              {bannerCredit && (
                <p className="text-gray-500 my-3 text-center text-xs tracking-wide">
                  Photo By&nbsp;
                  <Link href={bannerLink}>{bannerCredit}</Link>
                </p>
              )}
            </div>
          )}

          <MDXRenderer>{body}</MDXRenderer>

          <div className="flex items-end flex-col mt-16 mb-5">
            <p className="font-bold">Thanks For Reading</p>
            <div className="mt-1">
              <p className="text-right">
                <Link
                  href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
                    blogPostUrl,
                  )}`}
                >
                  Discuss on Twitter
                </Link>
                <span className="mx-2">{` • `}</span>
                <Link href={editLink}>Edit Post on GitHub</Link>
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row items-end justify-between md:items-center border-b border-gray-300 dark:border-gray-800 mb-10 py-1">
            <div className="flex space-x-2">
              <p className="text-xs">Tags:</p>
              <div className="flex flex-wrap space-x-2">
                {keywords.map((k) => (
                  <React.Fragment key={k}>
                    <NavLink
                      className="text-gray-400 text-xs hover:underline hover:text-primary"
                    >
                      {k}
                    </NavLink>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <Share
              url={blogPostUrl}
              title={title}
              description={description}
              twitterId={config.twitterId}
              siteUrl={config.siteUrl}
            />
          </div>

          {/* Next and Previous Articles */}
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {prev && (
              <div className="flex flex-col bg-background-dark p-6 rounded-lg md:col-start-1">
                <div className="flex items-center">
                  <Arrow type="left" />
                  <p>Previous</p>
                </div>
                <NavLink
                  className="font-bold text-primary hover:underline"
                  to={prev.fields.slug}
                >
                  {prev.frontmatter.title}
                </NavLink>
              </div>
            )}
            {next && (
              <div className="flex flex-col bg-background-dark p-6 rounded-lg md:col-start-2">
                <div className="flex items-center self-end">
                  <p>Next</p>
                  <Arrow />
                </div>
                <NavLink
                  className="font-bold text-right text-primary hover:underline"
                  to={next.fields.slug}
                >
                  {next.frontmatter.title}
                </NavLink>
              </div>
            )}
          </div>
        </article>
      </Container>
      <Footer />
    </>
  );
};

// id comes from the context when we create the pages
export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      timeToRead
      fields {
        slug
        editLink
      }
      frontmatter {
        title
        date
        description
        author
        bannerCredit
        bannerLink
        category
        keywords
        banner {
          childImageSharp {
            gatsbyImageData(
              width: 768
              quality: 100
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`;

export default Article;
