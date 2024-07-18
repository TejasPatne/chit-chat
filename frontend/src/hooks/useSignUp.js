import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const {setAuthUser} = useAuthContext();

    const signup = async (inputs) => {
        const verified = verifyInputs(inputs);
        if(!verified) return;

        setLoading(true);

        try {
            const res = await fetch("/api/auth/signup", {
                "method": "POST",
                "headers": { "Content-Type": "application/json" },
                "body": JSON.stringify(inputs)
            });

            const data = await res.json();
            
            if(data.error) throw new Error(data.error);

            // local storage
            localStorage.setItem("chat-user", JSON.stringify(data));
            // context
            setAuthUser(data);

            navigate("/");

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return [loading, signup];
}

const verifyInputs = ({ fullName, username, password, confirmPassword, gender }) => {
    if(!fullName.trim() || !username.trim() || !password.trim() || !confirmPassword.trim() || !gender.trim() ) {
        toast.error("Please fill all fields");
        return false;
    }
    if(fullName && username && (password.length < 6)) {
        toast.error("Password must have atleast 6 characters");
        return false;
    }
    if(fullName && username && password &&  (password !== confirmPassword)) {
        toast.error("Passwords doesn't match");
        return false;
    }
    return true;
}

export default useSignUp;