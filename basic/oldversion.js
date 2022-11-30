import logo from './logo.svg';
import './App.css';
import {firestore} from './firebase.tsx'
import firebase from 'firebase/app'
//import db from '/Users/nikhilmakhijani/learning/react/ReactLearn/basic/lfg/src/firebase.tsx'
import React, {Component, useState, useEffect} from 'react';
import { getDocs} from 'firebase/firestore'

//const db = firebase.firestore();

export default class App extends Component {
  state = {
    value : "",
    data: []
  }

 handleValue = e => {
   this.setState({value: e.target.value})
 }

// componentDidMount() {
//    const docRef = firestore.collection('test')
//    //console.log(docRef)
//     docRef.get()
//            .then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//                 console.log(doc.id, " => ", doc.data());

//             });
//         })
//         .catch((error) => {
//             console.log("Error getting documents: ", error);
//         });
//     }

componentDidMount() {
   const docRef = firestore.collection('test')
   //console.log(docRef)
    docRef.get().then(response => {
      const d = response.docs.map(doc => (
           {    
             data: doc.data(),
              id: doc.id
           }))
       console.log(d)
       this.setState({data: d})
          }).catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }
      

 
    // const db = firebase.firestore();
    // 
    //     .get()
    //     .then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             // doc.data() is never undefined for query doc snapshots
    //             console.log(doc.id, " => ", doc.data());
    //         });
    //     })
    //     .catch((error) => {
    //         console.log("Error getting documents: ", error);
    //     });

  render() {
    const {value, data} = this.state
 
    return (
      <form>
      <h1>id is : {value}</h1>
      <select
      value={value}
      onChange={this.handleValue}
    >
      {data.map(doc =>  
        <option key={doc.id}>
        {doc.data.id}
        </option>
      )}
    </select>
      </form>
    )
  }

}
//  Listdata() {
// const [loading, setLoading] = useState(true);
//   const [listdata, setlistdata ] = useState([]);
//   const [rechargerId, setRechargerId] = useState("Select yaar");
  
//   useEffect(() => {
//       getDocuments()
   
//   },[listdata] )


//   function getDocuments () {
//    const docRef = collection(db,'test')
//    getDocs(docRef).then(response => {
//     const d = response.docs.map(doc => (
//         {    
//              data: doc.data(),
//              id: doc.id
//          }))
//      setlistdata(d)
//     //console.log(response.docs)
//    }).catch(error => console.log(error.message))
//    setLoading(false);
//   }

//   return (
//     <select
//       disabled={loading}
//       value={rechargerId}
//       onChange={(e) => (e.currentTarget.value)}
//     >
//       {listdata.map(doc =>  
//         <option key={doc.id}>
//         {doc.data.id}
//         </option>
//       )}
//     </select>
//   );
// }
// //   return (
//     <div>
//       <h4> ListData </h4>
//       <ul>
//           {listdata.map( doc => <li key={doc.id}>{doc.data.country}</li> )}
//       </ul>
//     </div>
//   )
// }
