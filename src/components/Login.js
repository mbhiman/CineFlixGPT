import Header from "./Header";

const Login = () => {
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

            {/* Centered Login Form */}
            <div className="flex justify-center items-center h-full relative z-10">
                <div className="bg-black bg-opacity-70 rounded-lg p-8 w-80 md:w-96">
                    <h2 className="text-3xl font-bold text-white mb-6 text-left">Sign In</h2>
                    
                    <form className="space-y-8">
                        {/* Email Input */}
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                className="w-full p-4 bg-black bg-opacity-10 text-white rounded border border-gray-400 focus:border-2 focus:border-white focus:outline-none focus:ring-2 focus:ring-white peer"
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
                                className="w-full p-4 bg-black bg-opacity-10 text-white rounded border border-gray-400 focus:border-2 focus:border-white focus:outline-none focus:ring-2 focus:ring-white peer"
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
                                Sign In
                            </button>
                        </div>
                    </form>

                    {/* Additional Links */}
                    <div className="flex justify-between items-center text-gray-400 mt-4 text-sm">
                        <div>
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember" className="ml-2">Remember me</label>
                        </div>
                        <a href="#" className="hover:underline">Need help?</a>
                    </div>

                    {/* Sign Up Link */}
                    <div className="text-center text-gray-400 mt-6 text-sm">
                        New to Netflix? <a href="#" className="text-white hover:underline">Sign up now.</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
