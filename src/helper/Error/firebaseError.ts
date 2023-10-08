import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FirebaseError } from "firebase/app";

// Define a function to handle Firebase authentication errors
const handleFirebaseAuthError = (error: FirebaseError) => {
  switch (error.code) {
    case "auth/popup-closed-by-user":
      toast.error("Popup closed by the user.");
      break;
    case "auth/popup-blocked":
      toast.error(
        "Popup blocked. Please enable popups in your browser settings."
      );
      break;
    case "auth/account-exists-with-different-credential":
      toast.error(
        "An account with this email already exists using a different authentication method."
      );
      break;
    // Add more error cases and corresponding messages as needed
    default:
      toast.error("An error occurred during authentication.");
  }
};

export default handleFirebaseAuthError;
