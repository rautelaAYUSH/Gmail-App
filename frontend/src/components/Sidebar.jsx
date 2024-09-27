import { LuPencilLine } from "react-icons/lu";
import { MdMoveToInbox, MdOutlineWatchLater, MdOutlineDrafts, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { TbSend2 } from "react-icons/tb";

const sidebarItems = [
  {
    icon: <MdMoveToInbox size={"24px"} />,
    text: "Inbox"
  },
  {
    icon: <IoMdStar size={"24px"} />,
    text: "Starred"
  },
  {
    icon: <MdOutlineWatchLater size={"24px"} />,
    text: "Snoozed"
  },
  {
    icon: <TbSend2 size={"24px"} />,
    text: "Sent"
  },
  {
    icon: <MdOutlineDrafts size={"24px"} />,
    text: "Drafts"
  },
  {
    icon: <MdOutlineKeyboardArrowDown size={"24px"} />,
    text: "More"
  },
]

const Sidebar = () => {
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button className="flex items-center justify-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl">
          <LuPencilLine size={"24px"} />
          {/* Compose */}
          <p>Compose</p>
        </button>
      </div>
      <div className="text-gray-500" >
        {/* will use the map property to display the sidebar elements. */}
        {/* <div className="flex items-center gap-4 rounded-r-full px-6 py-1 hover:cursor-pointer hover:bg-gray-200" >
            <MdMoveToInbox size={"24px"}/>
            <p>Inbox</p>
          </div> */}
        {
          sidebarItems.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-4 rounded-r-full px-6 py-1 hover:cursor-pointer hover:bg-gray-200" >
                {item.icon}
                <p>{item.text}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Sidebar;

