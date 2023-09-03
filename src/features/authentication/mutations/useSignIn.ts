import { useMutation } from "react-query";
import { signInWithPhone } from "../api/auth";

function useSignIn() {
  const mutation = useMutation({
    mutationFn: signInWithPhone,
  });

  return mutation;
}

export default useSignIn;
