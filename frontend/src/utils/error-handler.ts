import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { retrieveAxiosErrorMessage } from "./retrieve-axios-error-message";

export function showErrorToast(error: unknown) {
  if (error instanceof Error) {
    if ((error as AxiosError).isAxiosError) {
      const message = retrieveAxiosErrorMessage(error as AxiosError);
      toast.error(message);
    } else {
      toast.error(error.message);
    }
  } else {
    toast.error("An unknown error occurred");
  }
}

export function showChatError(error: unknown) {
  if (error instanceof Error) {
    if ((error as AxiosError).isAxiosError) {
      const message = retrieveAxiosErrorMessage(error as AxiosError);
      toast.error(message, {
        duration: 5000,
        position: "bottom-right",
      });
    } else {
      toast.error(error.message, {
        duration: 5000,
        position: "bottom-right",
      });
    }
  } else {
    toast.error("An unknown error occurred", {
      duration: 5000,
      position: "bottom-right",
    });
  }
}

export function trackError(error: unknown) {
  console.error("Error:", error);
  showErrorToast(error);
}
