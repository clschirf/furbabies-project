'use client';

import { useEffect, useState } from 'react';

import Container from '@mui/material/Container';

import { getAllFurbabies, Furbaby } from '@/apis/furbaby-api';

export default function Home() {
  const [furbabies, setFurbabies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllFurbabies();
        setFurbabies(response);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  return <Container>main page</Container>;
}
