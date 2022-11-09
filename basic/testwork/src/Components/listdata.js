import db from '/Users/nikhilmakhijani/learning/react/ReactLearn/basic/testwork/src/firebase.js'
import React, {useState, useEffect} from 'react';
import {collection, getDocs} from 'firebase/firestore'

export default function Listdata() {
const [loading, setLoading] = useState(true);
  const [listdata, setlistdata ] = useState([]);
  const [value, setValue] = useState("Select yaar");
  
  useEffect(() => {
      getDocuments()
   
  },[listdata] )

  useEffect(() => {
      console.log(listdata)
   
  }, [listdata])

  function getDocuments () {
   const docRef = collection(db,'test')
   getDocs(docRef).then(response => {
    const d = response.docs.map(doc => (
        {    
             data: doc.data(),
             id: doc.id
         }))
     setlistdata(d)
    //console.log(response.docs)
   }).catch(error => console.log(error.message))
   setLoading(false);
  }

  return (
    <select
      disabled={loading}
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
    >
      {listdata.map(doc =>  
        <option key={doc.id}>
        {doc.data.id}
        </option>
      )}
    </select>
  );
}
//   return (
//     <div>
//       <h4> ListData </h4>
//       <ul>
//           {listdata.map( doc => <li key={doc.id}>{doc.data.country}</li> )}
//       </ul>
//     </div>
//   )
// }
