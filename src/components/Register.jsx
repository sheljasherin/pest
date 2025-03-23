import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import registerImage from "../assets/register.jpg"; 
function Register() {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const closeForm = () => setIsFormVisible(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message);
      } else {
        alert("registration successful! Please login.");
        navigate("/login"); 
      }
    } catch (err) {
      console.error(err);
      alert("Error during registration.");
    }
  };

  if (!isFormVisible) return null;

  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative mt-10 bg-white rounded-lg shadow-lg w-full p-6 flex" style={{ maxWidth: "1000px" }}>
        <div className="absolute top-4 right-4">
          <button onClick={closeForm} className="text-2xl text-gray-500 hover:text-gray-800">
            <FaTimes />
          </button>
        </div>
        <div className="w-1/2 pl-6">
          <h2 className="text-2xl font-semibold mb-3 text-center">Register</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" className="input w-full px-4 py-2 rounded-lg border-gray-300" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className="input w-full px-4 py-2 rounded-lg border-gray-300" placeholder="Your Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input type="tel" className="input w-full px-4 py-2 rounded-lg border-gray-300" placeholder="Your Phone Number" required value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input type="password" className="input w-full px-4 py-2 rounded-lg border-gray-300" placeholder="Your Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn bg-green-500 hover:bg-green-600 w-full p-2 text-white font-semibold rounded-lg">
              Register
            </button>
          </form>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <button type="button" onClick={() => navigate("/login")} className="text-green-500 hover:underline">
              Login
            </button>
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img src={registerImage} alt="Register" className="max-w-full h-auto rounded-lg shadow-md" style={{ maxHeight: "400px" }} />
        </div>
      </div>
    </div>
  );
}

export default Register;
