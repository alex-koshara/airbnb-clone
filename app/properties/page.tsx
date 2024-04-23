import getCurrentUser from '../actions/getCurrentUser';
import getListings from '../actions/getListings';

import EmptyState from '../components/EmptyState';
import PropertiesClient from './PropertiesClient';
import { Suspense } from 'react';

const PropertiesPage = async() => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState
        title='Unauthorized'
        subtitle='Please login'
      />
    )
  }

  const listings = await getListings({
    userId: currentUser.id
  });

  if (listings.length === 0) {
    return (
      <EmptyState
        title='No properties found'
        subtitle='Looks like you havent properties'
      />
    )
  }

  return (
    <Suspense>
      <PropertiesClient
        listings={listings}
        currentUser={currentUser}
      />
    </Suspense>
  )
}


export default PropertiesPage;