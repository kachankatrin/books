import React from 'react';

function Capitalize(str) {
  if(str) {
    str = `${str[0].toUpperCase()}${str.slice(1)}`
  }
  return str
}
export default Capitalize;