import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div className="relative h-screen w-full">
            <Header />

            {/* Background Image with a Grey Overlay */}
            <div className="absolute inset-0">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg"
                    alt="background-image"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>

            {/* Centered Login/Signup Form */}
            <div className="flex justify-center items-center h-full relative z-10">
                <div className="bg-black bg-opacity-70 rounded-lg p-8 w-80 md:w-96">
                    <h2 className="text-3xl font-bold text-white mb-6 text-left">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h2>

                    <form className="space-y-8">
                        {/* Full Name (only for Sign Up) */}
                        {!isSignInForm && (
                            <div className="relative">
                                <input
                                    type="text"
                                    id="fullname"
                                    className="w-full p-4 bg-black bg-opacity-20 text-white rounded border border-gray-400 focus:border-2 focus:border-white focus:outline-none focus:ring-2 focus:ring-white peer"
                                    required
                                />
                                <label
                                    htmlFor="fullname"
                                    className="absolute left-4 top-1/2 text-white opacity-70 px-1 bg-black bg-opacity-70 rounded transform -translate-y-1/2 scale-100 transition-all duration-200 peer-focus:top-2 peer-focus:scale-90 peer-valid:top-2 peer-valid:scale-90"
                                >
                                    Full Name
                                </label>
                            </div>
                        )}

                        {/* Email Input */}
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                className="w-full p-4 bg-black bg-opacity-20 text-white rounded border border-gray-400 focus:border-2 focus:border-white focus:outline-none focus:ring-2 focus:ring-white peer"
                                required
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-4 top-1/2 text-white opacity-70 px-1 bg-black bg-opacity-70 rounded transform -translate-y-1/2 scale-100 transition-all duration-200 peer-focus:top-2 peer-focus:scale-90 peer-valid:top-2 peer-valid:scale-90"
                            >
                                Email
                            </label>
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <input
                                type="password"
                                id="password"
                                className="w-full p-4 bg-black bg-opacity-20 text-white rounded border border-gray-400 focus:border-2 focus:border-white focus:outline-none focus:ring-2 focus:ring-white peer"
                                required
                            />
                            <label
                                htmlFor="password"
                                className="absolute left-4 top-1/2 text-white opacity-70 px-1 bg-black bg-opacity-70 rounded transform -translate-y-1/2 scale-100 transition-all duration-200 peer-focus:top-2 peer-focus:scale-90 peer-valid:top-2 peer-valid:scale-90"
                            >
                                Password
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-red-600 py-2 rounded text-white font-semibold hover:bg-red-700 transition duration-300"
                            >
                                {isSignInForm ? "Sign In" : "Sign Up"}
                            </button>
                        </div>
                    </form>

                    {/* Additional Links */}
                    <div className="flex justify-between items-center text-gray-400 mt-4 text-sm">
                        <div>
                            <input type="checkbox" id="remember" className="cursor-pointer w-5" />
                            <label htmlFor="remember" className="ml-2">
                                {isSignInForm ? "Remember me" : ""}
                            </label>
                        </div>
                        <a href="#" className="hover:underline">
                            Need help?
                        </a>
                    </div>

                    {/* Toggle Sign Up/Sign In Link */}
                    <div className="text-center text-gray-400 mt-6 text-sm">
                        {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
                        <button
                            onClick={toggleSignInForm}
                            className="text-white hover:underline focus:outline-none"
                        >
                            {isSignInForm ? "Sign Up Now." : "Sign In"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
