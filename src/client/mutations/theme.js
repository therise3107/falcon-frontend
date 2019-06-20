import gql from 'graphql-tag'

const CHANGE_THEME = gql`
  mutation changeThemeMutation {
    changeTheme @client
  }
`

export default CHANGE_THEME
