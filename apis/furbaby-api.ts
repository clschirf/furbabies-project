export enum GenderCodes {
  M = 'male',
  F = 'female',
  U = 'unknown',
}

export enum Species {
  CAT = 'Cat',
  DOG = 'Dog',
}

export interface Furbaby {
  id: number;
  name: string;
  sex: keyof typeof GenderCodes;
  species: keyof typeof Species;
  breed: string;
  photoUri?: string;
  dob?: string;
  color?: string;
}

const furbabies: Array<Furbaby> = [
  {
    id: 1,
    name: 'Lucy',
    sex: 'F',
    species: 'CAT',
    breed: 'Domestic Shorthair',
    photoUri: '/lucy.jpeg',
    dob: '2012-05-20',
    color: 'Calico',
  },
  {
    id: 2,
    name: 'Charlie',
    sex: 'M',
    species: 'DOG',
    breed: 'Labrador',
    photoUri: '/charlie.jpeg',
    dob: '2018-3-09',
    color: 'Chocolate',
  },
  {
    id: 3,
    name: 'Beau',
    sex: 'M',
    species: 'DOG',
    photoUri: '/beau.jpeg',
    breed: 'Beagle',
    dob: '2021-07-12',
  },
  {
    id: 4,
    name: 'Mishmish',
    sex: 'F',
    species: 'CAT',
    breed: 'Siamese',
    photoUri: '/mishmish.jpeg',
    dob: '2012-05-20',
    color: 'Seal point',
  },
  {
    id: 5,
    name: 'Ollie',
    sex: 'M',
    species: 'CAT',
    breed: 'American Shorthair',
    dob: '2022-06-08',
    color: 'Ginger',
  },
  {
    id: 6,
    name: 'Milo',
    sex: 'M',
    species: 'CAT',
    breed: 'Maine Coon',
    photoUri: '/milo.jpeg',
    dob: '2019-04-28',
    color: 'Silver tabby',
  },
  {
    id: 7,
    name: 'Piper',
    sex: 'F',
    species: 'DOG',
    breed: 'Golden Retriever',
    dob: '2019-07-01',
    color: 'Cream',
  },
  {
    id: 8,
    name: 'Huey',
    sex: 'M',
    species: 'CAT',
    breed: 'French Bulldog',
    dob: '2022-05-03',
    color: 'Brindle',
  },
];

export const getAllFurbabies = () => {
  return new Promise(resolve =>
    resolve(furbabies.map(f => ({ id: f.id, name: f.name, photoUri: f.photoUri }))),
  );
};

export const getFurbaby = (id: number): Promise<Furbaby | undefined> =>
  new Promise(resolve =>
    resolve(furbabies.find((ele: Furbaby) => ele.id === id)),
  );
