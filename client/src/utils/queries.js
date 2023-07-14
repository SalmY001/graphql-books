import { gql } from '@apollo/client';

export const GET_ME = gql`
query me($profileId: ID!) {
  profile(profileId: $profileId) {
    _id
    name
    skills
  }
`;