import {
  PrimaryButton,
  SecondaryButton,
} from '@components/elements/Button/Button';
import Card from '@components/elements/Card/Card';
import * as React from 'react';

const ProjectCard = ({ project }) => {
  const {
    title,
    demoLink,
    sourceLink,
    techUsed,
    description: { excerpt },
    screenshot,
  } = project;

  return (
    <Card image={screenshot} title={title}>
      <div className="flex flex-col p-4 space-y-2">
        <h5 className="text-xl font-bold">{title}</h5>
        <h6 className="text-md font-medium">{excerpt}</h6>
        <div className="flex flex-col space-y-1">
          <p
            className="text-xs font-semibold tracking-wide"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Skills Used:
          </p>
          <p
            className="text-xs tracking-wide"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {techUsed.join(', ')}
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-auto mb-4 px-4 space-x-4">
        <SecondaryButton
          disabled={!sourceLink}
          link={sourceLink}
          className="w-full"
        >
          View Source
        </SecondaryButton>
        <PrimaryButton disabled={!demoLink} link={demoLink} className="w-full">
          View Demo
        </PrimaryButton>
      </div>
    </Card>
  );
};

export default React.memo(ProjectCard);
