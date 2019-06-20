import query from '../queries/theme'

const changeTheme = (_root, _args, { cache }) => {
  const { darkTheme } = cache.readQuery({ query })

  cache.writeData({
    data: {
      darkTheme: !darkTheme
    }
  })

  return null
}

export default { changeTheme }
