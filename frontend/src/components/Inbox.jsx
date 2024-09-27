import {useState} from "react"
import Emails from "./Emails.jsx";
import { MdCropSquare, MdInbox, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { GoTag } from "react-icons/go";

const mailType = [
    {
        icon: <MdInbox size={"20px"}/>,
        text: "Primary"
    },
    {
        icon: <GoTag size={"20px"}/>,
        text: "Promotions"
    },
    {
        icon: <FaUserFriends size={"20px"}/>,
        text: "Social"
    },
];

const Inbox = () => {
    // 0 index refers to primary and 1 to promotions and sso on 
    // this will be sued to update the down border to the menioned components
    const [selected, setSelected] = useState(0);
    return (
        <div className="flex-1 bg-white">
            <div className="flex items-center justify-between px-4 pt-1 my-2">
                <div className="flex item-center gap-5">
                    <div className="flex item-center gap-1" >
                        <MdCropSquare size={"20px"} />
                        <FaCaretDown size={"20px"} />
                    </div>
                    <div>
                        <IoMdRefresh size={"20px"} />
                    </div>
                    <div>
                        <IoMdMore size={"20px"} />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span>1 to 50</span>
                    <MdKeyboardArrowLeft size={"24px"}/>
                    <MdKeyboardArrowRight size={"24px"}/>
                </div>
            </div>
            <div className="">
                <div className="flex items-center ">
                    {
                        mailType.map((item, index)=>{
                            return(
                                // Will have to give dynamic css using template literal
                                // <button key={index} className="flex items-center gap-5 p-4 w-52 hover:bg-gray-200">
                                <button key={index} onClick={()=> setSelected(index)} className={`${selected === index ? "border-b-4 border-b-blue-600 text-blue-600" : "border-b-transparent"} flex items-center gap-5 p-4 w-52 hover:bg-gray-200`}>
                                    {item.icon}
                                    <p>{item.text}</p>
                                </button>
                            )
                        })
                    }
                </div>
                <Emails />
            </div>
        </div>
    )
}

export default Inbox