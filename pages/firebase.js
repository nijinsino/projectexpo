import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import  {getAuth } from 'firebase/auth';
import { getFirestore,collection,addDoc,where,query,getDocs} from 'firebase/firestore';



const firebaseConfig = {
  
};
    

  const app = initializeApp(firebaseConfig);  //start


  
  const auth =getAuth(app);
  
  
  
  const db=getFirestore(app);   //used to connect database
  
  export { auth,db ,getFirestore ,collection, addDoc,where,query,getDocs,useEffect}
