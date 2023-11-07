import { useQuery } from "react-query";
import { axiosInstance } from "@utils/config/axiosInstance";
import { useRecoilValue } from "recoil";
import { userTokenState } from "@store/authState";

const useFetchData = (url, withToken) => {
  const userToken = useRecoilValue(userTokenState);

  return useQuery(url, () =>
    axiosInstance
      .get(url, {
        headers: {
          Authorization: withToken === true && `Bearer ${userToken}`,
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      })
  );
};

export default useFetchData;
