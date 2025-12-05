import { FiUser } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function RegisterPage(){
    return (
    <div className="w-full h-screen bg-[url(./loginbg.jpg)] bg-cover bg-center flex justify-center items-center">
      <div className="w-[440px] min-h-[550px] bg-white/20 backdrop-blur-lg shadow-2xl rounded-[25px] p-8 flex flex-col items-center">
        
        <img className="w-[140px] h-[50px] mb-3 object-cover cursor-pointer"
             src="/logo.png" alt="Logo"/>
            
        <h1 className="text-3xl font-bold mb-3 mt-6 text-black">Create Account</h1>
        <p className="text-black mb-12">
          Already have an account?{" "}
          <Link className="text-blue-600 font-bold cursor-pointer" to="/login">
            Login
          </Link>
        </p>

        {/* Name */}
        <div className="w-full mb-5">
          <div className="flex items-center border-4 border-gray-400 focus-within:border-blue-500 rounded-xl px-3 h-[45px] bg-white">
            <FiUser className="text-xl text-gray-600 mr-2" />
            <input
              type="text"
              placeholder="Your Name"
              
              className="w-full outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div className="w-full mb-5">
          <div className="flex items-center border-4 border-gray-400 focus-within:border-blue-500 rounded-xl px-3 h-[45px] bg-white">
            <MdEmail className="text-xl text-gray-600 mr-2" />
            <input
              type="text"
              placeholder="Email"
              
              className="w-full outline-none"
            />
          </div>
        </div>

        {/* Password */}
        <div className="w-full mb-5">
          <div className="flex items-center border-4 border-gray-400 focus-within:border-blue-500 rounded-xl px-3 h-[45px] bg-white">
            <RiLockPasswordLine className="text-xl text-gray-600 mr-2" />
            <input
              type="password"
              placeholder="Password"
              
              className="w-full outline-none"
            />
          </div>
        </div>

        <button
          
          className="w-full h-[45px] bg-blue-600 rounded-xl text-white text-md font-medium mt-2 hover:bg-blue-700 transition-all duration-300"
        >
          Register
        </button>

        

      </div>
    </div>
  );
}