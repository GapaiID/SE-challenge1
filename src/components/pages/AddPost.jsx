import Navbar from "../templates/Navbar";
import PostForm from "../templates/PostForm";

export default function AddPost() {
    return (
        <section className="flex flex-col w-screen min-h-screen bg-white">
            <Navbar />
            <div className="flex flex-row w-full justify-center mt-4 mb-2 py-4">
                <PostForm formType={"add"} />
            </div>
        </section>
    )
}