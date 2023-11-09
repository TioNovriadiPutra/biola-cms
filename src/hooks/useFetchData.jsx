import { useQuery } from "react-query";
import { axiosInstance } from "@utils/config/axiosInstance";
import { useRecoilValue } from "recoil";
import { userTokenState } from "@store/authState";
import { toastRefState } from "@store/toastState";
import useAuth from "./useAuth";

const useFetchData = (url, withToken) => {
  const userToken = useRecoilValue(userTokenState);
  const toastRef = useRecoilValue(toastRefState);

  const { logout } = useAuth();

  return useQuery(url, () =>
    axiosInstance
      .get(url, {
        headers: {
          Authorization: withToken === true && `Bearer ${userToken}`,
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        if (error.response.state === 401) {
          toastRef.current.show({
            type: "info",
            message: "Session timeout",
          });
        }

        logout();
      })
  );
};

export default useFetchData;
