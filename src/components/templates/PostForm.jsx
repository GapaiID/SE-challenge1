import { useEffect, useState } from "react";
import { usePostsContext } from "../../context";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { Report } from "notiflix";

export default function PostForm({ formType }) {
    const [form, setForm] = useState({ title: '', body: '', tags: '', author: '', created_at: '', img_url: '' });
    const posts = usePostsContext((state) => state.posts);
    const updatePosts = usePostsContext((state) => state.updatePosts);
    const { post_id } = useParams();
    const navigate = useNavigate();

    function handleAdd() {
        form.id = posts.at(-1).id + 1;
        let newPosts = [...posts, form];
        updatePosts(newPosts);
        Report.success(
            'Success',
            'Successfully Add Post',
            'Ok',
            () => {
                setForm({ title: '', body: '', tags: '', author: '', created_at: '', img_url: '' });
                navigate('/');
            }
        );
    }

    function handleEdit() {

    }

    useEffect(() => {
        if (formType === 'edit' && post_id) {
            const filteredPosts = posts.filter((post) => {
                return post.id == post_id;
            });

            setPost(filteredPosts[0]);
        }
    }, [])
    return (
        <form className="flex flex-col w-1/2">
            <div className="pb-1">
                <label htmlFor="title" className="font-semibold">
                    Title
                </label>
            </div>
            <div className="relative pb-4 mb-4">
                <input
                    type="text"
                    id="title"
                    value={form.title}
                    onChange={(e) => {
                        setForm({ ...form, title: e.target.value });
                    }}
                    className="focus:bg-slate-100 focus:outline-none p-4 border-solid border-slate-800 rounded-lg h-10 w-full border-opacity-10 pr-10"
                    style={{ borderWidth: 1 }}
                />
            </div>
            <div className="pb-1">
                <label htmlFor="body" className="font-semibold">
                    Body
                </label>
            </div>
            <div className="relative pb-4 mb-2">
                <textarea
                    id="body"
                    value={form.body}
                    onChange={(e) => {
                        setForm({ ...form, body: e.target.value });
                    }}
                    className="focus:bg-slate-100 focus:outline-none p-4 border-solid border-slate-800 rounded-lg w-full border-opacity-10"
                    style={{ borderWidth: 1 }}
                />
            </div>
            <div className="pb-1">
                <label htmlFor="tags" className="font-semibold">
                    Tags
                </label>
            </div>
            <div className="relative pb-4 mb-4">
                <select
                    id="tags"
                    value={form.tags}
                    onChange={(e) => {
                        setForm({ ...form, tags: e.target.value });
                    }}
                    className="focus:bg-slate-100 focus:outline-none p-3 border-solid border-slate-800 rounded-lg w-full border-opacity-10 pr-10"
                    style={{ borderWidth: 1 }}
                >
                    <option value="Technology">Technology</option>
                    <option value="Science">Science</option>
                    <option value="Social">Social</option>
                </select>
            </div>
            <div className="pb-1">
                <label htmlFor="author" className="font-semibold">
                    Author
                </label>
            </div>
            <div className="relative pb-4 mb-4">
                <input
                    type="text"
                    id="author"
                    value={form.author}
                    onChange={(e) => {
                        setForm({ ...form, author: e.target.value });
                    }}
                    className="focus:bg-slate-100 focus:outline-none p-4 border-solid border-slate-800 rounded-lg h-10 w-full border-opacity-10 pr-10"
                    style={{ borderWidth: 1 }}
                    placeholder="Jhon Doe"
                />
            </div>
            <div className="pb-1">
                <label htmlFor="img_url" className="font-semibold">
                    Image Url
                </label>
            </div>
            <div className="relative pb-4 mb-4">
                <input
                    type="text"
                    id="img_url"
                    value={form.img_url}
                    onChange={(e) => {
                        setForm({ ...form, img_url: e.target.value });
                    }}
                    className="focus:bg-slate-100 focus:outline-none p-4 border-solid border-slate-800 rounded-lg h-10 w-full border-opacity-10 pr-10"
                    style={{ borderWidth: 1 }}
                    placeholder="Feb 06 2024"
                />
            </div>
            <div className="pb-1">
                <label htmlFor="created_at" className="font-semibold">
                    Created At
                </label>
            </div>
            <div className="relative pb-4 mb-4">
                <input
                    type="text"
                    id="created_at"
                    value={form.created_at}
                    onChange={(e) => {
                        setForm({ ...form, created_at: e.target.value });
                    }}
                    className="focus:bg-slate-100 focus:outline-none p-4 border-solid border-slate-800 rounded-lg h-10 w-full border-opacity-10 pr-10"
                    style={{ borderWidth: 1 }}
                    placeholder="Feb 06 2024"
                />
            </div>
            <div className="h-12 bg-lime-100 rounded-xl justify-center content-center items-center cursor-pointer flex mt-4 hover:bg-lime-200 transition duration-500 shadow-sm" onClick={formType === 'add' ? () => handleAdd() : () => handleEdit()}>
                <span className="font-bold text-lime-500 cursor-pointer">{formType === 'add' ? "Create new post" : "Edit"}</span>
            </div>
        </form>
    )
} 