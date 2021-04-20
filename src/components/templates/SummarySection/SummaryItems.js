import Link from '@components/elements/MDX/Link';
import Pill from '@components/elements/Pill/Pill';
import { Link as NavLink } from 'gatsby';
import * as React from 'react';

export const PostItem = ({
  category,
  link,
  title,
  description,
  date,
  timeToRead,
  ...props
}) => {
  return (
    <div className={props.className}>
      <div className="flex flex-col">
        {category && (
          <Pill className="leading-relaxed w-max mb-2 bg-blue-500 bg-opacity-20 text-primary">
            {category}
          </Pill>
        )}
        <NavLink to={link}>
          <h5 className="text-xl font-bold hover:text-primary mb-1">{title}</h5>
        </NavLink>
        <p
          className="mb-2"
          style={{
            color: 'var(--color-text-secondary)',
          }}
        >
          {description}
        </p>
        <p className="text-xs tracking-wide">{`${date} • ${timeToRead} minute read`}</p>
      </div>
    </div>
  );
};

export const ProjectItem = ({
  title,
  description,
  publishedDate,
  demoLink,
  sourceLink,
}) => {
  return (
    <div className="flex flex-col">
      <Link
        style={{ color: 'var(--color-text)', textDecoration: 'none' }}
        href={demoLink || sourceLink}
      >
        <h5 className="text-xl font-bold mb-1 hover:text-primary">{title}</h5>
      </Link>
      <p
        className="mb-2"
        style={{
          color: 'var(--color-text-secondary)',
        }}
      >
        {description.excerpt}
      </p>
      <p className="text-xs tracking-wide">
        {new Date(publishedDate).getFullYear()}
      </p>
    </div>
  );
};
