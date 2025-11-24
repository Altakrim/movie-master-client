import React from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const UserDropdown = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser()
         .then(() => console.log("User logged out"))
     .catch((error) => console.log(error));
    };

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                        src={user?.photoURL || "https://i.ibb.co/7zK1m8f/user.png"}
                        alt="User"
                    />
                </div>
            </div>

            <ul
                tabIndex={0}
                className="dropdown-content menu p-4 shadow bg-base-100 rounded-xl w-48"
            >
                
                <div className="flex flex-col items-center space-y-2">
                    <img
                        className="w-16 h-16 rounded-full border-2 border-primary"
                        src={user?.photoURL || "https://i.ibb.co/7zK1m8f/user.png"}
                        alt="User"
                    />

                    <p className="font-semibold text-center text-sm">
                        {user?.displayName || user?.email || "User"}
                    </p>

                    <button
                        onClick={handleLogout}
                        className="btn btn-sm btn-error text-white w-full rounded-full"
                    >
                        Logout
                    </button>
                </div>
            </ul>
        </div>
    );
};

export default UserDropdown;
