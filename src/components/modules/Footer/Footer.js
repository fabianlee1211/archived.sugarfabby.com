import Container from '@components/elements/Container/Container';
import Icon from '@components/elements/Icon/Icon';
import { NAV_LINKS } from '@lib/utils/constants';
import { graphql, Link, useStaticQuery } from 'gatsby';
import * as React from 'react';

const year = new Date().getFullYear();

const scrollToTop = () => {
  if (typeof window !== 'undefined' && window.scroll) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
};

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socialMedia {
            link
            platform
          }
        }
      }
    }
  `);
  const { socialMedia } = data.site.siteMetadata;

  return (
    <footer>
      <Container outerClassName="bg-footer" className="py-10 max-w-screen-2xl">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-3 items-center justify-start mb-4 sm:mb-0 sm:pr-8">
            {socialMedia.map((media) => (
              <Icon
                key={media.platform}
                label={media.platform}
                icon={media.platform}
                link={media.link}
                className="block opacity-70 hover:opacity-100 h-7 w-7 bg-white transition-opacity"
              />
            ))}
          </div>
          <ul className="flex space-x-4 flex-wrap justify-center sm:justify-end">
            {NAV_LINKS.map((l) => (
              <Link
                className="text-sm text-white cursor-pointer py-2"
                key={l.to}
                to={l.to}
              >
                {l.label}
              </Link>
            ))}
            <li
              className="text-sm text-white cursor-pointer py-2"
              onClick={scrollToTop}
            >
              Back To Top
            </li>
          </ul>
        </div>
        <p
          className="text-xs text-center sm:text-left mt-6 opacity-50 tracking-wide"
          style={{ color: 'var(--color-text-footer)' }}
        >
          © {year} Fabian Lee. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
