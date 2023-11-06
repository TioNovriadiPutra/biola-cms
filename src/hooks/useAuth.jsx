import AsyncStorage from "@react-native-async-storage/async-storage";
import { loadingState, userIdState, userTokenState } from "@store/authState";
import { toastRefState } from "@store/toastState";
import { axiosInstance } from "@utils/config/axiosInstance";
import { ENDPOINT } from "@utils/config/endpoint";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

const useAuth = () => {
  const toast = useRecoilValue(toastRefState);
  const setUserToken = useSetRecoilState(userTokenState);
  const setUserId = useSetRecoilState(userIdState);
  const setLoading = useSetRecoilState(loadingState);

  const login = async (data) => {
    setLoading(true);

    const body = new FormData();
    if (data.email !== "" && data.password !== "") {
      body.append("email", data.email);
      body.append("password", data.password);
    }

    await axiosInstance
      .post(ENDPOINT.login, body)
      .then((response) => {
        setUserToken(response.data.token);
        setUserId(response.data.userId);
        AsyncStorage.setItem("@userToken", response.data.token);
        AsyncStorage.setItem("@userId", JSON.stringify(response.data.userId));

        toast.current.show({
          type: "success",
          message: response.data.message,
        });
      })
      .catch((error) => {
        toast.current.show({
          type: "warning",
          message: error.response.data.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const logout = async () => {
    setLoading(true);

    setUserToken(null);
    setUserId(null);
    await AsyncStorage.removeItem("@userToken");
    await AsyncStorage.removeItem("@userId");

    setLoading(false);
  };

  const isLoggedIn = async () => {
    setLoading(true);

    const userToken = await AsyncStorage.getItem("@userToken");
    const userId = await AsyncStorage.getItem("@userId");

    if (userToken) {
      setUserToken(userToken);
      setUserId(JSON.parse(userId));
    }

    setLoading(false);
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return {
    login,
    logout,
  };
};

export default useAuth;
