import Navbar from "../templates/Navbar";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Card from "../templates/Card";
import { useState } from "react";
import { dataPosts } from "../../database";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [posts, setPosts] = useState([]);
    function searchPost() {
        const filteredPosts = dataPosts.filter((post) => {
            return post.title.toLowerCase().includes(searchQuery.toLowerCase());
        });

        setPosts(filteredPosts);
    };

    useState(() => {
        setPosts(dataPosts);
    }, [posts]);
    return (
        <section className="flex flex-col w-screen min-h-screen bg-white">
            <Navbar />
            <div className="flex flex-row w-full justify-center  ">
                <div className="flex flex-col w-3/5">
                    {/* Cards */}
                    {
                        posts.length > 0
                        &&
                        posts.map((post) => (
                            <Card key={post.id} post={post} />
                        ))
                    }
                </div>
                <div className="flex flex-col w-1/5 bg-white mt-6">
                    <div className="p-4 w-full flex flex-col  bg-white rounded-xl border border-slate-200">
                        <div className="flex flex-row w-full h-8 border border-slate-200 rounded-full">
                            <input
                                type="text"
                                name="searchQuery"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-white w-5/6 rounded-l-full px-4 outline-none focus:bg-white"
                                placeholder="Cari post ..."
                            />
                            <div className="flex w-1/5 h-full rounded-full bg-slate-400 hover:bg-slate-600 justify-center items-center" onClick={searchPost}>
                                <button type="submit" className="flex w-full h-full rounded-r-full justify-center items-center">
                                    <FaMagnifyingGlass size={18} color="white" />
                                </button>
                            </div>
                        </div>
                        <div className="w-full flex flex-row justify-center mt-6 gap-6">
                            <div className="w-full flex flex-col justify-center gap-3">
                                <div className="flex rounded-full cursor-pointer px-4 py-1 bg-sky-100 justify-center">
                                    <span className="font-semibold text-xs">Technology</span>
                                </div>
                                <div className="flex rounded-full cursor-pointer px-4 py-1 bg-pink-100 justify-center">
                                    <span className="font-semibold text-xs">Science</span>
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-center gap-3">
                                <div className="flex rounded-full cursor-pointer px-4 py-1 bg-orange-100 justify-center">
                                    <span className="font-semibold text-xs">Social</span>
                                </div>
                                <div className="flex rounded-full cursor-pointer px-4 py-1 bg-violet-100 justify-center">
                                    <span className="font-semibold text-xs">All</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}