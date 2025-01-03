import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Accessories } from './components/Accessories';
import { AccessoryDetails } from './components/AccessoryDetails';
import { CartPage } from './components/Cart/CartPage';
import { ComparisonPage } from './components/ComparisonPage';
import { FavoritePhones } from './components/FavoritePhones';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { MobilePhones } from './components/MobilePhones';
import { PhoneDetails } from './components/PhoneDetails';
import { ScrollToTop } from './components/ScrollToTop';
import { TabletDetails } from './components/TabletDetails';
import { Tablets } from './components/Tablets';
import { useDataFetch } from './hooks/useDataFetch';
import { getItemsWithNumericId } from './utils/getItemsWithNumericId';

function App() {
  useDataFetch();
  const {
    phonesData = [],
    tabletsData = [],
    accessoriesData = [],
    productsData = [],
  } = useSelector((state) => state.itemsData || {});

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col gap-8 pt-[100px]">
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                phonesData={phonesData}
                productsData={productsData}
                tabletsData={tabletsData}
                accessoriesData={accessoriesData}
              />
            }
          />
          <Route
            path="/phones"
            element={<MobilePhones phones={phonesData} />}
          />
          <Route path="/tablets" element={<Tablets tablets={tabletsData} />} />
          <Route
            path="/tablets/:id"
            element={
              <TabletDetails
                tablets={getItemsWithNumericId(tabletsData, productsData)}
              />
            }
          />
          <Route
            path="/accessories"
            element={<Accessories accessories={accessoriesData} />}
          />
          <Route
            path="/accessories/:id"
            element={
              <AccessoryDetails
                accessories={getItemsWithNumericId(
                  accessoriesData,
                  productsData,
                )}
              />
            }
          />
          <Route
            path="/phones/:id"
            element={
              <PhoneDetails
                phones={getItemsWithNumericId(phonesData, productsData)}
              />
            }
          />
          <Route path="/favorites" element={<FavoritePhones />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/comparison" element={<ComparisonPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
