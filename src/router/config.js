import FeaturedAuctionPage from '../components/pages/FeaturedAuctionPage';
import ItemDetailPage from '../components/pages/ItemDetailPage';

export const config = [
  {
    path: ['/', '/featured/:keyword'],
    component: FeaturedAuctionPage,
  },
  {
    path: '/item/:id/',
    component: ItemDetailPage,
  },
];

