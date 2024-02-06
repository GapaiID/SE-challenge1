import { IoChatbubblesOutline, IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function Card({ post }) {
    const formattedBody = post.body.substring(0, 250);
    const likes = Math.ceil(Math.random() * 999);
    const comments = Math.floor(Math.random() * 100);

    return (
        <div className="flex flex-row w-full bg-white py-6 px-4 border-b border-slate-200">
            <div className="flex flex-col w-1/5 justify-center items-center py-2 pl-2 pr-6">
                <img
                    src={post.img_url}
                    alt={post.title}
                    width={124}
                    height={124}
                />
            </div>
            <div className="flex flex-col w-4/5 p-2">
                <Link to={`/posts/${post.id}`} className="flex w-full hover:underline cursor-pointer">
                    <span className="text-2xl font-bold ">{post.title}</span>
                </Link>
                <div className="flex flex-row w-full py-2 gap-3 items-center">
                    <img
                        src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                        width={24}
                        height={24}
                        className="rounded-full"
                    />
                    <span className="text-sm font-semibold">{post.author}</span>
                    <span>|</span>
                    <span className="text-sm font-light">{post.created_at}</span>
                </div>
                <div className="flex w-full flex-row py-2">
                    <div className={`flex rounded-full px-4 py-1 bg-sky-100 ${post.tags === "Technology" ? "bg-sky-100" : post.tags === "Science" ? "bg-green-100" : "bg-orange-100"}`}>
                        <span className={`font-semibold text-xs ${post.tags === "Technology" ? "text-sky-500" : post.tags === "Science" ? "text-green-500" : "text-orange-500"}`}>{post.tags}</span>
                    </div>
                </div>
                <div className="flex w-full my-1">
                    {formattedBody}...
                </div>
                <div className="flex flex-row w-full gap-6 mt-6">
                    <div className="flex flex-row gap-1 justify-center items-center cursor-pointer">
                        <IoHeartOutline size={22} />
                        <span className="text-sm">{likes}</span>
                    </div>
                    <div className="flex flex-row gap-1 justify-center items-center cursor-pointer">
                        <IoChatbubblesOutline size={22} />
                        <span className="text-sm">{comments}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}