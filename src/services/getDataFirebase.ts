import { db } from "@/config/Firebase";
import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";

export const getExperiences = async () => {
    try {
        let list = []
        const queryData = query(collection(db, "experience"), orderBy('dateNow', 'desc'));
        const get = await getDocs(queryData);
    
        get.forEach((doc) => {
            list.push({id: doc.id, ...doc.data()});
        });
        return list
    } catch (error) {
        console.log(error)
    }
}


export const getInfoMe = async () => {
    try {
        const get = await getDoc(doc(db, "me", process.env.NEXT_PUBLIC_API as string));
        return get.data()
    } catch (error) {
        console.log(error)
    }
  }