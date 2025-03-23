import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import registerImage from "C:/Users/Shalu/Downloads/pest/frontend/src/assets/register.jpg";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const closeForm = () => {
    setIsFormVisible(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.message);
      } else {
     
        localStorage.setItem("token", data.token);
        navigate("/Result"); 
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during login.");
    }
  };

  if (!isFormVisible) return null;

  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div
        className="relative mt-10 bg-white rounded-lg shadow-lg w-full p-6 flex"
        style={{ maxWidth: "1000px" }}
      >
        <div className="absolute top-4 right-4">
          <button
            onClick={closeForm}
            className="text-2xl text-gray-500 hover:text-gray-800"
          >
            <FaTimes />
          </button>
        </div>

        <div className="w-1/2 pl-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-3 text-center">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="input input-bordered w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-green-500 focus:border-green-500"
                  placeholder="Your Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  className="input input-bordered w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-green-500 focus:border-green-500"
                  placeholder="Your Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn bg-green-500 hover:bg-green-600 w-full p-2 text-white font-semibold rounded-lg transition-colors"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-center">
              Dont have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="text-green-500 hover:underline"
              >
                Register
              </button>
            </p>
          </div>
        </div>
        <div className="w-1/2 pl-6 pr-6 flex items-center justify-center">
          <img
            src={registerImage}
            alt="Login"
            className="max-w-full h-auto rounded-lg shadow-md"
            style={{ maxHeight: "400px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
