import dotenv from "dotenv";

dotenv.config();

export const getProducts = async (req, res) => {
    try {
        const response = await fetch(process.env.API_ENDPOINT);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const sendRequestProduct = async (req, res) => {};
