import { useMutation } from "@tanstack/react-query";
import { signUpUser, SignUpPayload, SignUpResponse } from "./sign-up.service";

export function useSignUp() {
  return useMutation<SignUpResponse, Error, SignUpPayload>({
    mutationFn: signUpUser,
  });
}
