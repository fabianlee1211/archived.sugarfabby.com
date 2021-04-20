import Video from '@components/elements/Video/Video';
import Navbar from '@components/modules/Navbar/Navbar';
import ThemeProvider from '@lib/theme/ThemeProvider';
import { MDXProvider } from '@mdx-js/react';
import * as React from 'react';
import mdxComponents from '../MDX/Mdx';

const customComponents = { Video };

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="flex flex-col w-full min-h-screen">
        <Navbar />
        <main className="flex flex-col" style={{ flex: '1 0 auto' }}>
          <MDXProvider components={{ ...mdxComponents, ...customComponents }}>
            {children}
          </MDXProvider>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
