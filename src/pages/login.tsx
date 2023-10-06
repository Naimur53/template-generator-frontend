import useFirebase from "@/Hooks/useFirebase";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <button className=" bg-black px-2 py-3" onClick={signInWithGoogle}>
        Google
      </button>
    </div>
  );
};

export default Login;
