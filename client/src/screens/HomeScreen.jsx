import React, { Component, useState, useEffect } from 'react';
import Nav from '../components/nav/Nav';
import '../index.css';
import CategoryList from '../components/category/CategoryList';
import starIcon from '../assets/star-icon.svg';
import flamesIcon from '../assets/flames-icon.svg';
import purpleHeart from '../assets/purpleheart-icon.svg';

const urls = [
  '/products/recent?limit=30',
  '/products/trending?limit=30',
  '/products/staff',
];

const HomeScreen = () => {
  return (
    <div className='h-full'>
      <Nav></Nav>
      <div className='w-11/12 h-fit m-auto py-16 bg-brand-darkgrey px-24 flex flex-col gap-y-20'>
        <CategoryList
          category={'Newly Added'}
          icon={starIcon}
          iconWidth={'20px'}
          url={urls[0]}
        />
        <CategoryList
          category={'Weekly Trends'}
          icon={flamesIcon}
          iconWidth={'20px'}
          url={urls[1]}
        />
        <CategoryList
          category={'Staff Picks'}
          icon={purpleHeart}
          iconWidth={'20px'}
          url={urls[2]}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
