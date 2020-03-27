import React, { useState, useEffect, createContext } from 'react';

const URL = 'http://nackowskis.azurewebsites.net/api/';
const GROUP_NUM = 2230;

export const BidContext = createContext();

export const BidProvider = props => {
  const [bids, setBids] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getBidsList = id => {
    setIsLoading(true);
    fetch(`${URL}/Bud/${GROUP_NUM}/${id}`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setBids(data);
        setIsLoading(false);
      });
  };

  const addBid = bid => {
    setIsLoading(true);
    fetch(`${URL}/Bud`, { method: 'POST' })
      .then(res => res.json())
      .then(data => {
        setIsLoading(false);
      });
  };

  return <BidContext value={}>{props.children}</BidContext>;
};
