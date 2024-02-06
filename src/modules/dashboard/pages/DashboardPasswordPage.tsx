import { PasswordForm } from '@modules/dashboard/components';
import { useLoggedInUser } from '@modules/dashboard/hooks';
import {useNavigate} from "react-router-dom";
import {DASHBOARD_PAGE} from "@modules/dashboard/routes";
import {toast} from "react-toastify";

export const DashboardPasswordPage = () => {
  const navigate = useNavigate()
  const { isLoading } = useLoggedInUser();
  if (isLoading) {
    return <div>Loading....</div>;
  }

  const handleEditPasswordSuccess = () => {
    toast.success("Success Edit Password!");
    navigate(DASHBOARD_PAGE);
  }

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div>
        <PasswordForm onSuccess={handleEditPasswordSuccess} />
      </div>
    </div>
  );
};
