import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useLogIn = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const {setAuthUser} = useAuthContext();

    const login = async (inputs) => {
        const verified = verifyInputs(inputs);
        if(!verified) return;

        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                "method": "POST",
                "headers": {"Content-Type": "application/json"},
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

    return [loading, login];
}

const verifyInputs = ({ username, password }) => {
    if(!username.trim() || !password.trim()) {
        toast.error("Please fill all fields");
        return false;
    }
    return true;
}

export default useLogIn;