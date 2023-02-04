import { db } from "./firebase"
import {setDoc, doc} from "firebase/firestore"
import { userName, userEmail, userPhoto } from "./Auth"

export const addUsers = () => {
   
    setDoc(doc(db, 'users', userEmail), {
        name: userName,
        email: userEmail,
        image: userPhoto ? userPhoto : 'https://vercel.com/api/www/avatar/mb7wBoryq4NHhieCvSuauWmQ?&s=60',
        saldo: 0,
        monto: '',
        moneda: '',
        fecha: ''
      })
    }

