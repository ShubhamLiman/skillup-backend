import { adminModel } from "../Schema/adminSchema.js";

export const rgisterAdmin = async (admin) => {
  console.log("in model - registerAdmin - admin: ", admin);

  try {
    const newadmin = new adminModel(admin);
    const adminsave = await newadmin.save();
    return adminsave._id;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const loginAdmin = async (admin) => {
  const { id, password } = admin;
  try {
    const user = await adminModel.findOne({ _id: id });
    if (!user) {
      return "User not found";
    } else {
      if (user.password === password) {
        return { email: user.email, id: user._id };
      } else {
        return "Incorrect password";
      }
    }
  } catch (error) {
    console.error("Error retriving document: ", error);
  }
};
