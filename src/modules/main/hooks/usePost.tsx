import { useEffect, useState } from 'react';
import httpHandler from "@lib/http-handler";
import {parseError} from "@lib/http-error-handler";

export const usePost = () => {
    const [fetchedPosts, setFetchedPosts] = useState(null);
    const [pagination, setPagination] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    const fetchPosts = async (current = 1, pageSize = 5) => {
        setIsLoading(true);
        try {
            const response = await httpHandler.get('/blog_posts', {
                params: {
                    current: current,
                    page_size: pageSize
                },
            });

            const { list, pagination: p } = response.data.data;
            setFetchedPosts(list);
            setPagination(p);
        } catch (e: any) {
            setError(parseError(e.response.data));
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return { fetchPosts, fetchedPosts, pagination, isLoading, error };
};
