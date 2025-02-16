import Banner from '@components/HeaderComponents/Banner';
import TopArea from '@components/HeaderComponents/TopArea';
import React, {useEffect} from 'react';
import { entriesSelector, fetchAll, reset} from './Slice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@hooks/Redux';

export default function HomeHeaderContainer() {

  const dispatch = useAppDispatch();
  const entries = useSelector(entriesSelector);

  useEffect(() => {
    dispatch(fetchAll());

    return () => {
      dispatch(reset())
    }
  }, [dispatch]);

  const headerContent = entries[0]?.header ?? null;
  const bannerContent = entries[0]?.banner[0] ?? null;

  return (
    <header>
      <TopArea 
        logo={headerContent && headerContent?.logo}
        menu={headerContent && headerContent?.menu}
      />
      <Banner 
        bannerContent={bannerContent}
      />
    </header>
  );
}
