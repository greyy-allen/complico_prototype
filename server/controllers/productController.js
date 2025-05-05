import workpapersAPI from "../sdk/workpapersAPI.js";
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

export const getMockProducts = async (req, res) => {
    try {
      // Example: pretend firmId comes from a header or token
        const firmId = req.header("X-Firm-Id") || "demo-firm";
    
        // Optionally pass filters from query params
        const filters = {
        type: req.query.type,          // e.g. ?type=checklist
        search: req.query.search,      // e.g. ?search=Template
        };
    
        const data = await workpapersAPI.getMockContent();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const sendRequestProduct = async (req, res) => {};
