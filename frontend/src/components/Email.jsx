import { MdCropSquare } from "react-icons/md"
import { RiStarLine } from "react-icons/ri"
const Email = () => {
    return (
        <div className="flex items-center border-b justify-between hover:cursor-pointer px-4 py-3 text-sm">
            <div className="flex gap-3">
                <div>
                    <MdCropSquare size={"20px"} />
                </div>
                <div>
                    <RiStarLine size={"20px"} />
                </div>
                <div>
                    <h1>Ar7Coding</h1>
                </div>
            </div>
            <div className="flex-none">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repellat nobis velit.</p>
            </div>
            <div className="flex-none">
                <p>12 days ago</p>
            </div>
        </div>
    )
}

export default Email