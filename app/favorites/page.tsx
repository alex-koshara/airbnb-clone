import getCurrentUser from '../actions/getCurrentUser';
import getFavoriteListings from '../actions/getFavoriteListings';
import EmptyState from '../components/EmptyState';
import FavoritesClient from './FavoritesClient';
import { Suspense } from 'react';

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <EmptyState
        title='No favorites found'
        subtitle='Looks like you have no favorite listings'
      />
    )
  }



  return (
    <Suspense>
      <FavoritesClient
        listings={listings}
        currentUser={currentUser}
      />
    </Suspense>
  )
}

export default ListingPage;