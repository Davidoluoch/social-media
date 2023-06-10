import { createContext,useEffect,useState } from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const login = () => {
        //TO DO
        setCurrentUser({id:2, name:"dave", profilePic:"https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600"})
        
    };
    useEffect(() =>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);
    return (
        <AuthContext.Provider value={{currentUser, login }}>
            {children}
        </AuthContext.Provider>
    );
};