import { createContext } from "react";

const UserContext = createContext(
    {
        UserType: null,
        setUserType: () => {}
    });

export default UserContext;