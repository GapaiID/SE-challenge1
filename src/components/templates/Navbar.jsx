export default function Navbar() {
    return (
        <div className="flex w-full py-6 justify-center items-center bg-white sticky top-0">
            <div className="flex flex-row w-5/6 gap-8">
                <div className="flex w-1/5 text-3xl items-center">
                    <span className="font-bold">My</span><span>Space</span>
                </div>
                <div className="flex flex-row w-4/5 gap-12 items-end">
                    <div className="flex hover:font-semibold cursor-pointer">
                        <span className="text-xl">Home</span>
                    </div>
                    <div className="flex hover:font-semibold cursor-pointer">
                        <span className="text-xl">Technology</span>
                    </div>
                    <div className="flex hover:font-semibold cursor-pointer">
                        <span className="text-xl">Science</span>
                    </div>
                    <div className="flex hover:font-semibold cursor-pointer">
                        <span className="text-xl">Social</span>
                    </div>
                </div>
            </div>
        </div>
    )
}