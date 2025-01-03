import React from 'react';
import { useSelector } from 'react-redux';

import { Breadcrumb } from '../Breadcrumb';
import { DeviceCard } from '../Shared/DeviceCard';

export const FavoritePhones = () => {
  const { favorites } = useSelector((state) => state.favorites);

  if (!favorites || favorites.length === 0) {
    return (
      <div className="container">
        <Breadcrumb />
        <h1 className="title">Favorites</h1>
        <p className="subtitle">Your favorites list is empty.</p>
      </div>
    );
  }

  const deviceCount = favorites.length;

  return (
    <div className="container">
      <Breadcrumb />
      <div className="title">Favorites</div>
      <p className="subtitle">{deviceCount} models</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((phone) => (
          <DeviceCard
            key={phone.id}
            item={phone}
            itemType="phones"
            isShowDiscount={false}
          />
        ))}
      </div>
    </div>
  );
};
