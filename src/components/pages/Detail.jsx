import { useEffect, useState } from "react";
import Navbar from "../templates/Navbar";
import { BsPencilSquare } from "react-icons/bs";
import { FaTrash } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { usePostsContext } from "../../context";

export default function DetailPost() {
    const { post_id } = useParams();
    const [post, setPost] = useState({});
    const posts = usePostsContext((state) => state.posts);

    useEffect(() => {
        const filteredPosts = posts.filter((post) => {
            return post.id == post_id;
        });

        setPost(filteredPosts[0]); 
    }, []);

    return (
        <section className="flex flex-col w-screen min-h-screen bg-white">
            <Navbar />
            <div className="flex flex-col w-full justify-center items-center pt-6">
                <div className="flex flex-col w-3/4 justify-center items-center">
                    <div className="flex flex-col w-full justify-center">
                        <div className="flex flex-col w-full justify-center items-center pt-2 pb-3">
                            <img
                                src={post?.img_url}
                                alt="tes"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-2/3 pt-2 pb-4">
                        <div className="flex w-full justify-center mb-6">
                            <span className="text-3xl font-bold underline">{post?.title}</span>
                        </div>
                        <div className="flex flex-row w-full gap-2 items-center mb-1 mt-2 mx-3">
                            <img
                                src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                                width={24}
                                height={24}
                                className="rounded-full"
                            />
                            <span className="text-sm font-semibold">{post?.author}</span>
                            <span>|</span>
                            <span className="text-sm font-light">{post?.created_at}</span>
                            <span>|</span>
                            <div className="flex rounded-full px-4 py-1 mt-1 bg-sky-100">
                                <span className="font-semibold text-xs">{post?.tags}</span>
                            </div>
                        </div>
                        <div className="flex w-full flex-row py-2 px-3 my-1 gap-2">
                            <Link to={`/edit-post/${post_id}`} className="flex flex-row gap-2 rounded-full px-4 py-1 cursor-pointer bg-orange-100">
                                <span className="font-semibold text-xs text-orange-500">Edit</span>
                                <BsPencilSquare color="orange" />
                            </Link>
                            <div className="flex flex-row gap-2 rounded-full px-4 py-1 cursor-pointer bg-rose-100">
                                <span className="font-semibold text-xs text-red-500">Delete</span>
                                <FaTrash color="red" />
                            </div>
                        </div>
                        <div className="flex w-full px-3 py-2">
                            {post.body}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}