function capitalize(str) {
  if(str) {
    str = `${str[0].toUpperCase()}${str.slice(1)}`
  }
  return str;
}
export default capitalize;