import { registerClient, GetClients } from "../Repo/clientRepo.js";

export const register = async (req, res) => {
  console.log(req.body);

  try {
    const { name, email, phone, qualification, message } = req.body;
    const client = { name, email, phone, qualification, message };
    const clientId = await registerClient(client);
    res
      .status(201)
      .send({ message: clientId.message, client: clientId.client });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getClients = async (req, res) => {
  try {
    const clients = await GetClients();
    res.status(200).json({ clients });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
