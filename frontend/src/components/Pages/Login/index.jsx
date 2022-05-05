import styled from "styled-components";
import { Login_Form } from "./partials/Login_form";

const Login__container = styled.div`
  background-image: url("https://storage.googleapis.com/theme-vessel-items/checking-sites/oddo-2-html/HTML/main/assets/img/img-19.jpg");
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Login = () => {
  return (
    <>
      <Login__container>
        <Login_Form />
      </Login__container>
    </>
  );
};

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// export const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess(false);
//     const data = {
//       email,
//       password,
//     };
//     try {
//       const response = await axios.post("/api/auth/login", data);
//       if (response.data.success) {
//         setSuccess(true);
//         setLoading(false);
//         setTimeout(() => {
//           setSuccess(false);
//         }, 3000);
//       } else {
//         setError(response.data.message);
//         setLoading(false);
//       }
//     } catch (err) {
//       setError("Something went wrong");
//       setLoading(false);
//     }
//   };
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 m-auto">
//           <div className="card bg-white p-4">
//             <div className="card-body">
//               <h1 className="text-center">
//                 <span className="text-primary"></span>
//                 <span className="text-primary">Login</span>
//               </h1>
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label>Email</label>

//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     about="password"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="btn btn-primary btn-block"
//                   disabled={loading}
//                 >
//                   {loading ? "Loading..." : "Login"}
//                 </button>
//                 {error && <div className="alert alert-danger">{error}</div>}
//                 {success && (
//                   <div className="alert alert-success">Login Successful</div>
//                 )}
//               </form>
//               <div className="text-center">
//                 <Link to="/register">
//                   <button className="btn btn-outline-primary btn-block">
//                     Create an account
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Login;
