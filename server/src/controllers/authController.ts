import { Request, Response } from "express";
import { signToken } from "../utils/jwt";
import User from "../models/User";

export const mockLogin = async (
    req: Request<{}, {}, { customerId: string }>,
    res: Response
): Promise<void> => {
    const { customerId } = req.body;

    if (!customerId) {
        res.status(400).json({ error: "Missing customerId"});
        return
    }

    const user = await User.findOne({ where: { userId: customerId } });
    if (!user) {
        res.status(404).json({ error: "User not found "});
        return
    }

    const token = signToken({
        userId: user.userId,
        firmId: user.firmId,
        role: user.type
    });

    res.status(200).json({ token });
}