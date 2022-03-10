import HomeOfferSection from 'views/Home/components/HomeOffersSection/HomeOffersSection';
import HomeInfoSection from 'views/Home/components/HomeInfoSection/HomeInfoSection';
import Onlyfans from 'views/Home/components/Onlyfans/Onlyfans';
import { ReactElement } from 'react';

const Home = (): ReactElement => (
  <>
    <HomeOfferSection />
    <HomeInfoSection />
    <Onlyfans />
  </>
);

export default Home;
