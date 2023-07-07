import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useValidate = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const validate = async (userId, token) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_LMS_BACKEND_API}/user/forgotpassword/verify`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userId }),
        }
      );

      const json = await response.json();
      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      }

      if (response.ok) {
        setIsLoading(false);
        setIsSuccess(true);
      }
    } catch (err) {
      setError(`${err.message}, check your interet connection !` );
      setIsLoading(false);
    }
  };
  return {
    validate,
    isLoading,
    isSuccess,
    error,
  };
};
