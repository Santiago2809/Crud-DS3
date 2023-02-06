import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc } from "firebase/firestore/lite"
import { db } from "./firebase/firebase"



export const addUserFS = async (user) => {
    try {
        const docRef = await addDoc(collection(db, "users"),{
            username: user
        })
        console.log("Registro exitoso," + docRef.id);
    } catch (e) {
        console.log("error adding user, error code: " + e);
    }
}
// export const fetchUsers = async () => {
//     let users = [];
//     try {
//         const q = query(collection(db,"users"));
//         const docSnap = await getDocs(q);
//         docSnap.forEach( doc => {
//             users.push(doc.data().username);
//         })
//     } catch (e) {
//         console.log(e);
//     }
//     return users;
// }

export const getUsers = async () => {
    const result = await getDocs(collection(db,"users"));
    return result
}

export const updateUser = async (id,name) => {
    if(id !== "") {
        try {
            const docRef = doc(db,"users",id);
            await updateDoc(docRef,{
                username: name
            })
        } catch (e) {
            console.log(e);
        }
    }
}

export const deleteUser = async (id) => {
    try {
        const res = await deleteDoc(doc(db,"users",id));
        console.log(res);
    } catch (e) {
        console.log(e);
    }
}

// export const getUsers = () => {
//     let users = [];
//     fetchUsers().then( u => {
//         u.forEach( us => {
//             users.push(us);
//         })
//     })
//     return users;
// }