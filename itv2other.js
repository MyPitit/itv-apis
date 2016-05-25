// import React, { Component } from 'react';

// class Itv2 extends Component {
//   constructor() {
//     super()
//     this.state = {
//       productions: []
//     }
//   }

//   sendRequest (program) {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         this.setState({
//           productions: JSON.parse(xhr.responseText)._embedded.productions

//         });
//       }
//     }
//     xhr.open('get', '/' + program);

//     xhr.send();
//   }

//   componentWillMount() {
//     this.sendRequest();
//   }

//   render () {
//     return (
//       <ul>
//         {
//           this.state.productions.map((production, i) => {
//             return (
//               <li key={i} style={styles}>
//                 <p><span>Title: </span>{production.programmeTitle}</p>
//               </li>
//             );
//           })
//         }
//       </ul>
//     )
//   }
// }

// const styles = {
//   listStyleType: 'none'
// }

// export default Itv2;