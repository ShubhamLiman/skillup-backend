import jwt from "jsonwebtoken";

import { rgisterAdmin, loginAdmin } from "../Repo/adminRepo.js";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = { email, password };
    const adminId = await rgisterAdmin(admin);
    res.status(201).json({ adminId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { password, id } = req.body;
    const admin = { password, id };
    const adminId = await loginAdmin(admin);
    res.status(201).json({ adminId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
