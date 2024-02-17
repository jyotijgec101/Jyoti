const User = require("../model/user-model");
const Contact = require("../model/contact-model");
const Service = require("../model/service-model");
const jwt = require("jsonwebtoken");
const getAllUsers = async (req, res) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res
        .status(401)
        .send({ auth: false, message: "No Token Provided" });
    }
    const users = await User.find().select({ password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
const getAllContacts = async (req, res) => {
  try {
    // const token = req.header("Authorization");
    // if (!token) {
    //   return res
    //     .status(401)
    //     .send({ auth: false, message: "No Token Provided" });
    // }
    const contacts = await Contact.find();
    if (!contacts || contacts.length == 0) {
      return res.status(404).json({ message: "No Contacts Found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};
const getuserdeletebyid = async (req, res) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res
        .status(401)
        .send({ auth: false, message: "No Token Provided" });
    }
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};
const addservices = async (req, res) => {
  try {
    const { url, title, date } = req.body;
    const servicecreated = await Service.create({ url, title, date});
    res.status(201).json(servicecreated);
  } catch (error) {
    console.log(error);
  }
};
const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    return res.status(200).json(services);
  } catch (error) {
    console.log(error);
  }
};
const deleteService = async (req, res) => {
  try {
    const id = req.params.id;
    await Service.deleteOne({ _id: id });
    return res.status(200).json({ message: "Service Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
};

const getSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }).select({ password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

const updateuser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updatedata = await User.updateOne({ _id: id }, { $set: data });
    return res.status(201).json(updatedata);
  } catch (error) {
    console.log(error);
  }
};

const getSinglenotice = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Service.findOne({ _id: id });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

const updatenotice = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updatedata = await Service.updateOne({ _id: id }, { $set: data });
    return res.status(201).json(updatedata);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  getuserdeletebyid,
  addservices,
  getServices,
  deleteService,
  getSingleUser,
  updateuser,
  getSinglenotice,
  updatenotice,
};
