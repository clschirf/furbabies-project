'use client';

import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import PetsIcon from '@mui/icons-material/Pets';

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

  const GridContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
  `;

  const FurbabyCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    min-width: 250px;
    max-width: 250px;
    width: 250px;
    min-height: 225px;
    max-height: 225px;
    height: 225px;
    margin: 2em;
    padding: 1em;
    border: 1px solid black;
  `;

  const generateFurbabyCards = () => {
    return furbabies.map((f: Furbaby) => {
      return (
        <FurbabyCard key={f.id}>
          <div>
            <PetsIcon />
          </div>
          <h2>{f.name}</h2>
        </FurbabyCard>
      );
    });
  };

  return (
    <Container>
      <h1>Furbabies</h1>
      <GridContainer>{generateFurbabyCards()}</GridContainer>
    </Container>
  );
}
