import { ClientModel } from "../schema/clientSchema.js";
export const registerClient = async (client) => {
  console.log("in repo");
  try {
    console.log("trying");

    const newClient = new ClientModel({
      name: client.name,
      email: client.email,
      phone: client.phone,
      qualification: client.qualification,
      message: client.message,
    });

    const clientSave = await newClient.save();
    console.log(clientSave);
    return { message: "registration unsuccessful", client: clientSave };
  } catch (error) {
    console.log("failed");
    console.error("Error adding document: ", error);
    return { error: "registration unsuccessful" };
  }
};

export const GetClients = async () => {
  try {
    const clients = await ClientModel.find({});
    return clients;
  } catch (error) {
    console.error("Error retrieving clients: ", error);
  }
};
