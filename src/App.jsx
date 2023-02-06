import { useEffect, useState } from "react";
import { addUserFS, deleteUser, getUsers, updateUser } from "./crud";

export const App = () => {

        
    const [user, setUser] = useState("")
    const [users,setUsers] = useState(null);
    
    const [id, setId] = useState("");
    const [userToEdit, setUserToEdit] = useState("");
    const [deleteClicked, setDeleteClicked] = useState(false);

    useEffect( () => {
        getUsuarios();
    },[user,deleteClicked]);
    
    const handleInputChange = ({target}) => {
        setUser(target.value)
    };

    const getUsuarios = async () => {
        const u = await getUsers();
        // console.log(u.docs[0].id)
        setUsers(u.docs)
    }

    const addUser = () => {
        if(user !== "" ){
            addUserFS(user);
            setUser("");
        }
    };

    const activeUpdateUser = (id,username) => {
        setId(id);
        setUser(username);
        setUserToEdit(username)
        
    }
    const callUpdateUser = () => {
        if(user !== "" && id.length > 1 && user !== userToEdit) {
            updateUser(id,user);
            setUser("");
            setId("");
        } else {
            console.log('epale el usuario es el mismo no seas pendejo')
            setUser("");
            setId("");
        }
    }

    const callDeleteUser = async (id) => {
        await deleteUser(id);
        setDeleteClicked(!deleteClicked);
    }

    return (
        <div className="app">
            <div className="app__title">
                <h1>CRUD de usuarios</h1>
            </div>
            <div className="app__crud">
                <div className="crud__searchbar">
                    <div className="crud__searchbar-input">
                        <label>Igresa Usuario:</label>
                        <input type="text" placeholder="Juanito Perez" onChange={handleInputChange} value={user}/>
                    </div>
                    <div className="crud__searchbar-buttons">
                        <button disabled={user.length<1 || id.length>1} type="button" className="btn btn-add" onClick={addUser}>Add</button>
                        <button disabled={id.length<1} type="button" className="btn btn-del" onClick={callUpdateUser}>Update</button>
                    </div>
                </div>
                <div className="crud__list">
                    <h2 className="list__title">Lista de usuarios:</h2>
                    <ul className="crud__list-list">
                        {
                            users && users.map( (user,i) => (
                                <li key={i} className="list__item">
                                    <p className="list__user">{user.data().username}</p>
                                    <div>
                                        <button className="btn btn-u" onClick={() => activeUpdateUser(user.id,user.data().username)}>editar</button>
                                        <button className="btn btn-u" onClick={() => callDeleteUser(user.id)}>eliminar</button>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}