import gql from 'graphql-tag';

export const allPokemons = gql`
  query allPokemons {
    pokemons(first: 5) {
      id
      number
      name
    }
  }
`;
