import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  setAccessoriesData as setReduxAccessoriesData,
  setPhonesData as setReduxPhonesData,
  setProductsData as setReduxProductsData,
  setTabletsData as setReduxTabletsData,
} from '../store/itemsDataSlice';

import { useFetch } from './useFetch';

export const useDataFetch = () => {
  const dispatch = useDispatch();

  const { data: phonesData } = useFetch('/api/phones.json');
  const { data: tabletsData } = useFetch('/api/tablets.json');
  const { data: accessoriesData } = useFetch('/api/accessories.json');
  const { data: productsData } = useFetch('/api/products.json');

  useEffect(() => {
    if (phonesData) {
      dispatch(setReduxPhonesData(phonesData));
    }
  }, [phonesData]);

  useEffect(() => {
    if (tabletsData) {
      dispatch(setReduxTabletsData(tabletsData));
    }
  }, [tabletsData]);

  useEffect(() => {
    if (accessoriesData) {
      dispatch(setReduxAccessoriesData(accessoriesData));
    }
  }, [accessoriesData]);

  useEffect(() => {
    if (productsData) {
      dispatch(setReduxProductsData(productsData));
    }
  }, [productsData]);
};
