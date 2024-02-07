import { useState } from 'react';
import httpHandler from '@lib/http-handler';
import { parseError } from '@lib/http-error-handler';

export const useEditPassword = () => {
  const [isLoading, setIsLoading] = useState(false);

  const doEditPassword = async ({
    oldPassword,
    newPassword,
    confirmPassword,
  }: any) => {
    setIsLoading(true);
    try {
      const response = await httpHandler.post('/me/password', {
        old_password: oldPassword,
        new_password: newPassword,
        confirm_password: confirmPassword,
      });
      return response.data;
    } catch (e: any) {
      throw parseError(e.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  return { doEditPassword, isLoading };
};
