import { useAuth } from "@modules/auth/hooks/useAuth";
import { LOGIN_PAGE } from "@modules/auth/routes";
import { toast } from "react-toastify";

export const LogoutPage = () => {
    const { doLogout, isLoading } = useAuth();
    if (!isLoading) {
        doLogout();
        toast.success("Success Logout!");
        window.location.href = LOGIN_PAGE;
    }

    return <></>
}