import { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Import FontAwesome close icon
import registerImage from 'C:/Users/Shalu/Downloads/pest/frontend/src/assets/register.jpg'; // Import your register image

function Login() {
    const [isLogin, setIsLogin] = useState(false); // Initially show Register form
    const [isFormVisible, setIsFormVisible] = useState(true); // State to manage form visibility

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const closeForm = () => {
        setIsFormVisible(false); // Hide the form when close icon is clicked
    };

    if (!isFormVisible) {
        return null; // If form is hidden, don't render anything
    }

    return (
        <div className="relative min-h-screen flex justify-center items-center">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative mt-10 bg-white rounded-lg shadow-lg w-full p-6 flex" style={{ maxWidth: '1000px' }}>
                <div className="absolute top-4 right-4">
                    <button onClick={closeForm} className="text-2xl text-gray-500 hover:text-gray-800">
                        <FaTimes />
                    </button>
                </div>

                <div className="w-1/2 pl-6"> {/* Left side: Form */}
                    {isLogin ? (
                        <div className="space-y-4"> {/* Login Form */}
                            <h2 className="text-2xl font-semibold mb-3 text-center">Login</h2>
                            <form>
                                <div className="mb-3">
                                    <label className="block text-sm font-medium mb-1">Email</label>
                                    <input type="email" className="input input-bordered w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-green-500 focus:border-green-500" placeholder="Your Email" required />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-sm font-medium mb-1">Password</label>
                                    <input type="password" className="input input-bordered w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-green-500 focus:border-green-500" placeholder="Your Password" required />
                                </div>
                                <button type="submit" className="btn bg-green-500 hover:bg-green-600 w-full p-2 text-white font-semibold rounded-lg transition-colors">Login</button>
                            </form>
                        </div>
                    ) : ( // Register Form
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold mb-3 text-center">Register</h2>
                            <form>
                                <div className="mb-3">
                                    <label className="block text-sm font-medium mb-1">Name</label>
                                    <input type="text" className="input input-bordered w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-green-500 focus:border-green-500" placeholder="Your Name" required />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-sm font-medium mb-1">Email</label>
                                    <input type="email" className="input input-bordered w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-green-500 focus:border-green-500" placeholder="Your Email" required />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-sm font-medium mb-1">Phone</label>
                                    <input type="tel" className="input input-bordered w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-green-500 focus:border-green-500" placeholder="Your Phone Number" required />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-sm font-medium mb-1">Password</label>
                                    <input type="password" className="input input-bordered w-full px-4 py-2 rounded-lg border-gray-300 focus:ring-green-500 focus:border-green-500" placeholder="Your Password" required />
                                </div>
                                <button type="submit" className="btn bg-green-500 hover:bg-green-600 w-full p-2 text-white font-semibold rounded-lg transition-colors">Register</button>
                            </form>
                            <p className="mt-4 text-center">
                                Already have an account?{" "}
                                <button type="button" onClick={toggleForm} className="text-green-500 hover:underline">Login</button>
                            </p>
                        </div>
                    )}
                </div>
                <div className="w-1/2 pl-6 pr-6 flex items-center justify-center"> {/* Right side: Image */}
                    <img src={registerImage} alt="Register" className="max-w-full h-auto rounded-lg shadow-md" style={{ maxHeight: '400px' }} />
                </div>
            </div>
        </div>
    );
}

export default Login;
