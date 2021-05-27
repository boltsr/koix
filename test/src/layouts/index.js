/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React from 'react';
import { PageLayoutContainer } from './style';
import Topbar from './Topbar';

const PageLayout = ({ children }) => {
  
  return (
    <PageLayoutContainer>
      <Topbar />
      <div className='page-content'>
        {children}
      </div>
    </PageLayoutContainer>
  );
}

export default PageLayout;