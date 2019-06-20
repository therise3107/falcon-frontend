export default props => {
  const cleanedProps = { ...props }

  // delete bold
  delete cleanedProps.bold

  // delete color
  delete cleanedProps.color

  // delete theme
  delete cleanedProps.theme

  return cleanedProps
}
