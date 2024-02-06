import { create } from 'zustand'

export const usePostsContext = create((set) => ({
    posts: [],
    addPost: (newPost) => set((state) => ({ posts: [...state.posts, newPost] })),
    updatePosts: (updatedPosts) => set(() => ({ posts: updatedPosts })),
    // deletePost: (postId) => set((state) => ({
    //     posts: state.posts.filter(post => post.id !== postId)
    // }))
}));