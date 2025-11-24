// import React, { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../providers/AuthProvider";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// const Register = () => {
//     const {auth} = useContext(AuthContext);
//     const navigate = useNavigate();
//     const [error, setError] = useState("");


//     const handleRegister = async (e) => {
//         e.preventDefault();
//         setError("");

//         const name = e.target.name.value;
//         const photo = e.target.photo.value;
//         const email = e.target.email.value;
//         const password = e.target.password.value;

//         if(password.length < 6) {
//           return setError("Password must be at least 6 characters");
//         }
//         if(!/[A-Z]/.test(password)){
//           return setError("Password must contain at least one uppercase letter");
//         }
//         if(!/[a-z]/.test(password)){
//           return setError("password must contain at least one lowercase letter");
//         }

//         try{
//           const result = await createUserWithEmailAndPassword(auth, email, password);

//           await updateProfile(result.user, {
//               displayName: name,
//               photoURL: photo,
//           });
//           navigate("/");
//         }catch(err){
//           console.log("Registration error:", err);
//           setError(err.message);
//         }


//     //     createUserWithEmailAndPassword(auth, email, password)
//     //     .then(result => {
//     //         updateProfile(result.user, {
//     //             displayName: name,
//     //             photoURL: photo
//     //         });
//     //         navigate("/");
//     //     })
//     //     .catch(err => console.log(err));
//     }

// //   const handleChange = (e) => {
// //     const [form, setForm] = useState({
// //       name: "",
// //       photo: "",
// //       email: "",
// //       password: "",
// //     });

// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };
       
// //   const handleRegister = (e) => {
// //     e.preventDefault();
// //     console.log("Register form :", form);
// //   };
//   return (
//     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto p-10 m-10">
//       <h1 className="text-4xl font-bold text-center">Register now!</h1>
//       <div className="card-body">
//         <form onSubmit={handleRegister}>
//           {/* name  */}
//           <label className="label">Name</label>
//           <input
//             type="text"
//             name="name"
//             className="input input-bordered w-full mb-3"
//             placeholder="User Name.."
//             // onChange={handleChange}
//           />
//           <label className="label">Photo</label>
//           <input
//             type="text"
//             name="photo"
//             className="input input-bordered w-full mb-3"
//             placeholder="Photo URL"
//             // onChange={handleChange}
//           />
//           <label className="label">Email</label>
//           <input
//             type="email"
//             name="email"
//             className="input input-bordered w-full mb-3"
//             placeholder="Email"
//             // onChange={handleChange}
//           />
//           <label className="label">Password</label>
//           <input
//             type="password"
//             name="password"
//             className="input input-bordered w-full mb-3"
//             placeholder="Password"
//             // onChange={handleChange}
//           />
//           <div>
//             <a className="link link-hover">Forgot password?</a>
//           </div>
//           {error && <p className="text-red-500 mt-3">{error}</p>}
//           <button
//             type="submit"
//             className="btn btn-neutral mt-4 w-full hover:btn-primary"
//           >
//             Register
//           </button>
//         </form>
//         <p className="mt-4">
//           New here?{" "}
//           <Link
//             to="/login"
//             className="font-semibold text-primary hover:underline"
//           >
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
// import { auth, googleProvider } from "../../firebase/config";
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase/firebase.config";

const Register = () => {
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Password validation function
  const validatePassword = (password) => {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;
    return hasUpper && hasLower && hasMinLength;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!validatePassword(password)) {
      setError("Password must contain at least 1 uppercase, 1 lowercase, and 6+ characters.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Update user profile with name & photo
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photoURL
      });

      alert("Registration successful!");
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google login successful!");
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="bg-gray-800 p-8 rounded-xl w-full max-w-md text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>

        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="text"
            placeholder="Photo URL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 py-3 rounded font-semibold"
          >
            Register
          </button>
           <button type="button"
          onClick={handleGoogleRegister}
          className="btn bg-white text-black border-[#e5e5e5]">
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
          </button>
        </form>

        <div className="flex justify-between mt-4 text-sm text-gray-300">
          <a href="/login" className="hover:underline">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
