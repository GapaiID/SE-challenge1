import {useState} from "react";
import httpHandler from "@lib/http-handler";
import {parseError} from "@lib/http-error-handler";

export const useCreate = () => {
    const [isLoading, setIsLoading] = useState(false);

    const doCreate = async ({ title, body }: any) => {
        setIsLoading(true);
        try {
            const response = await httpHandler.post('/blog_posts', {
                title, body,
            });
            return response.data;
        } catch (e: any) {
            throw parseError(e.response.data);
        } finally {
            setIsLoading(false);
        }
    };

    return { doCreate, isLoading };
}