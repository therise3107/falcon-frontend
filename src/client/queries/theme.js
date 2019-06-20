import gql from 'graphql-tag'

const GET_THEME = gql`
  query getTheme {
    darkTheme @client
  }
`
export default GET_THEME
