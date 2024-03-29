import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { useAuthUser } from '@crema/hooks/AuthHooks';
import AppLoader from '@crema/components/AppLoader';

const withData = (ComposedComponent) => (props) => {
  const { user, isLoading } = useAuthUser();
  const { asPath } = useRouter();
  const queryParams = asPath.split('?')[1];
  console.log('withData isLoading', isLoading);
  useEffect(() => {
    if (!user && !isLoading) {
      Router.push('/signin' + (queryParams ? '?' + queryParams : ''));
    }
  }, [user, isLoading, queryParams]);

  if (!user || isLoading) return <AppLoader />;

  return <ComposedComponent {...props} />;
};
export default withData;
