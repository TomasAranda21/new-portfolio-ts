import { auth } from "@/config/Firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

export const loginFirebase = async (email : string, password:string) => {
    try {
        const data = await signInWithEmailAndPassword(auth, email, password)
        const user = {
            email: data.user.email,
            emailVerified: data.user.emailVerified,
            uid: data.user.uid,
            displayName: data.user.displayName
        }
   
       return user
    } catch (error) {
        console.log(error)

        return null
    }
}