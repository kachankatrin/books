import React from 'react';
import myBooks from '../books';
const listEl = myBooks.map(function(item) {
  return `${item.bookName}, ${item.authorName}, ${item.year}`;
})
// function ListItem(props) {
//   return(
//     <li>{props.item}</li>
  
//   //   <ul>{
//   //     props.list.map((item, index) => <li className={props.className} key={index}>{item}</li>)
//   // }
//   //   </ul>
//   )
// }
export default listEl;
