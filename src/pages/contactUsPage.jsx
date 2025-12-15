import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";


export default function ContactUsPage() {
    return (
        <div className="w-full h-full flex p-5 justify-center bg-[url(./contact.jpg)] bg-cover  ">
            {/*Left part */}
            <div className="w-[40%] h-full flex-col  rounded-2xl items-start pt-15 pl-25 ml-5 bg-black/5 backdrop-blur-sm " >

                <div className="text-2xl text-white font-bold flex items-center gap-4  ">
                    <FaPhoneAlt/>
                    <span>Call Us</span>
                </div>
                <div className="mt-2 text-white">+9476 2345 234 | 011 233 3434</div>

                <div className="text-2xl text-white font-bold flex items-center gap-4 mt-9 ">
                    <FaEnvelope/>
                    <span>Email</span>
                </div>
                <div className="mt-2 text-white">beautycosmetics99@gmail.com</div>

                <div className="text-2xl text-white font-bold flex items-center gap-4 mt-9 ">
                    <FaMapMarkerAlt/>
                    <span>Location</span>
                </div>
                <div className="mt-2 text-white">N0: 8/2A , Pepiliyana Mawatha, Nugegoda</div>

            </div>

            {/*Right part  FaEnvelope, FaMapMarkerAlt*/}
            <div className="w-[45%] h-full bg-[#e4d5ca] rounded-2xl flex flex-col items-center p-5 gap-6">
                <div className="text-secondary font-bold text-3xl ">Contact Us</div>

                <div className="flex items-center w-[450px]  border-none rounded-xl px-5 h-[55px] bg-white">
                    
                    <input type="text" placeholder="Enter your name" 
                    className="w-full outline-none"/>
                </div>

                <div className="flex items-center w-[450px]  border-none rounded-xl px-5 h-[55px] bg-white">
                    
                    <input type="text" placeholder="Enter your email" 
                    className="w-full outline-none"/>
                </div>

                <div className="flex items-center w-[450px]  border-none rounded-xl px-5 h-[55px] bg-white">
                    
                    <input type="text" placeholder="Enter your message" 
                    className="w-full outline-none"/>
                </div>

                <button className="className= w-[450px] h-[60px] bg-accent rounded-xl text-white text-md font-medium mt-2 transition-all duration-200 cursor-pointer">
                    Submit
                </button>

            </div>

        </div>
        
    );
}
