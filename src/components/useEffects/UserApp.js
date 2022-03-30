import { useState, useMemo } from "react";
import { useEffect } from "react/cjs/react.development";

const useUser = (user) => {
  const [userData, setUserData] = useState();
  useEffect(() => {
    if (user) {
      fetch("users.json").then((res) => {
        console.log({ res });
        res.json().then((users) => {
          console.log({ users });
          return setUserData(users.find((item) => item.id === user.id));
        });
      });
    }
  }, [user]);
  return userData;
};
//const userObject = { id: 1 };

const ComponentApp = () => {
  //const userObject = { id: 1 };
  const userObject = useMemo(() => {
    return {
      id: 1,
    };
  }, []);
  const user = useUser(userObject);

  // const userID = 1;
  // const userB = useUser(userID);

  return <div>{user?.name}</div>;
};

export default ComponentApp;
