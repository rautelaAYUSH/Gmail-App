import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { TbGridDots } from "react-icons/tb";
import Avatar from "react-avatar";

const Navbar = () => {
    return (
        <div className="flex items-center justify justify-between mx-3 h-16">
            <div className="flex items-center gap-10">
                <div className="flex items-center gap-2">
                    <div className="hover:bg-gray-200 p-3 rounded-full cursor-pointer">
                        <RxHamburgerMenu />
                    </div>
                    <img className="w-8" src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="gmail logo" />
                    <h1 className="text-2xl font-medium text-gray-500">Gmail</h1>
                </div>
            </div>
            <div className="mr-60 w-[50%]">
                <div className="flex items-center bg-[#EAF1FB] rounded-full px-2 py-3">
                    <IoIosSearch size={'24px'} className="text-gray-700" />
                    <input
                        type="text"
                        placeholder="Search Mail"
                        className="bg-transparent rounded-full px-1 w-full outline-none"
                    />
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div className="hover:bg-gray-200 cursor-pointer rounded-full px-2 py-2">
                    <CiCircleQuestion size={'24px'} />
                </div>
                <div className="hover:bg-gray-200 cursor-pointer rounded-full px-2 py-2">
                    <CiSettings size={'24px'} />
                </div>
                <div className="hover:bg-gray-200 cursor-pointer rounded-full px-2 py-2">
                    <TbGridDots size={'24px'} />
                </div>
                <Avatar className="cursor-pointer" googleId="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg" size="40" round={true} />
            </div>
        </div>
    )
}

export default Navbar;