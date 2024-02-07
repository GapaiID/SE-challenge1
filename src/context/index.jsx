import { create } from 'zustand'

export const usePostsContext = create((set) => ({
    posts: [],
    addPost: (newPost) => set((state) => ({ posts: [...state.posts, newPost] })),
    updatePosts: (updatedPosts) => set(() => ({ posts: updatedPosts }))
}));

export const useQueryContext = create((set) => ({
    query: "",
    updateQuery: (updatedQuery) => set(() => ({ query: updatedQuery }))
}));