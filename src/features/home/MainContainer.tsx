import React, {useEffect} from 'react';

import {useAppDispatch} from '@hooks/Redux';

import {entriesSelector, fetchAll, reset} from './Slice';
import About from '@components/MainComponents/About';
import {useSelector} from 'react-redux';
import AllServices from '@components/MainComponents/AllServices';

const HomeMainContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const entries = useSelector(entriesSelector);

  useEffect(() => {
    dispatch(fetchAll());

    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  const navigationById = entries[0]?.header.menu ?? null;
  const aboutContent = entries[0]?.about ?? null;
  const serviceContent = entries[0]?.service ?? null;

  return (
    <main>
      <About aboutContent={aboutContent && aboutContent} tracker={navigationById}/>
      <AllServices servicesContent={serviceContent && serviceContent} tracker={navigationById}/>
    </main>
  );
};

export default HomeMainContainer;
