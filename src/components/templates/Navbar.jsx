import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="flex w-full py-6 justify-center items-center bg-white sticky top-0">
            <div className="flex flex-row w-5/6 gap-8">
                <div className="flex w-1/5 text-3xl items-center">
                    <span className="font-bold">My</span><span>Space</span>
                </div>
                <div className="flex flex-row w-4/5 gap-12 items-end">
                    <Link to={'/'} className="flex hover:font-semibold cursor-pointer">
                        <span className="text-xl">Home</span>
                    </Link>
                    <Link to={'/?tags=technology'} className="flex hover:font-semibold cursor-pointer">
                        <span className="text-xl">Technology</span>
                    </Link>
                    <Link to={'/?tags=science'} className="flex hover:font-semibold cursor-pointer">
                        <span className="text-xl">Science</span>
                    </Link>
                    <Link to={'/?tags=social'} className="flex hover:font-semibold cursor-pointer">
                        <span className="text-xl">Social</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}