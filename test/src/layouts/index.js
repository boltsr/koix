/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React from 'react';
import Topbar from 'components/Topbar';
import { PageLayoutContainer } from './style';


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