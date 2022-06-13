import React, { useEffect } from "react";
import Router from 'next/router'

const Home = () => {
  useEffect(() => {
    Router.push('/verify')
  });
};

export default Home;
