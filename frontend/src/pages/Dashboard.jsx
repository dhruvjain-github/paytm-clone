import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar.jsx";
import { Balance } from "../components/Balance.jsx";
import { Users } from "../components/Users.jsx";
import axios from "axios";

const Dashboard = () => {
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        const fetchBalance = async () => {
            const token = localStorage.getItem("token");
            try {
                const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const { balance } = response.data;
                setAmount(balance);
            } catch (error) {
                console.error("Error fetching balance:", error);
            }
        };

        fetchBalance();
    }, []);

    return (
        <div>
            <Appbar />
            <div className="m-8">
                <Balance value={amount} />
                <Users />
            </div>
        </div>
    );
};

export default Dashboard;
