import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($input: LoginUser!) {
    login(input: $input) {
      loginName
      token
    }
  }
`;