import {FooterContent} from '@components/FooterComponents/FooterContent';
import React, {useEffect} from 'react';
import {entriesSelector, fetchAll, reset} from './Slice';
import { useAppDispatch } from '@hooks/Redux';
import { useSelector } from 'react-redux';

export default function FooterContainer() {
  const dispatch = useAppDispatch();
  const entries = useSelector(entriesSelector);

  useEffect(() => {
    dispatch(fetchAll());

    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  const navigationById = entries[0]?.header.menu ?? null;

  return (
    <footer>
      <FooterContent tracker={navigationById} />
    </footer>
  );
}
