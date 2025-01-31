import User from "../../models/user.model.js";

export const getUsers = async(request, response, next) => {
  try {
    const users = await User.findAll();
    console.log(users);
    console.log('request', request);
    console.log('response', response);
    return response.json({
      status: true,
      message: "Users retrieved successfully",
      data: users,
    });
  }
    catch(e) {
      console.log(e);
      return response.status(500).json({
        status: false,
        message: "Something went wrong. Please try again",
        data: null,
      });
    }
  }

export const getUser = async(request, response, next) => {
  try {
    const { id } = request.params;
    const user = await User.findByPk(id);
    return response.json({
      status: true,
      message: "User retrieved successfully",
      data: user,
    });
  }
  catch(e) {
    console.log(e);
    return response.status(500).json({
      status: false,
      message: "Something went wrong. Please try again",
      data: null,
    });
  }
}

  export const updateUser = async (request, response, next) => {
    try {
      const { id } = request.params;
      const user = await User.findByPk(id);

      if (!user) {
        return response.status(404).json({
          status: false,
          message: "User not found",
          data: null,
        });
      }

     await user.update(request.body);

      return response.json({
        status: true,
        message: "User updated successfully",
        data: user,
      });
    } catch (e) {
      console.log(e);
      return response.status(500).json({
        status: false,
        message: "Something went wrong. Please try again",
        data: null,
      });
    }
  };

  export const deleteUser = async (request, response, next) => {
    try {
      const { id } = request.params;
      const user = await User.findByPk(id);

      if (!user) {
        return response.status(404).json({
          status: false,
          message: "User not found",
          data: null,
        });
      }

      await user.destroy();

      return response.json({
        status: true,
        message: "User deleted successfully",
        data: null,
      });
    } catch (e) {
      console.log(e);
      return response.status(500).json({
        status: false,
        message: "Something went wrong. Please try again",
        data: null,
      });
    }
  };

  export default {
    getUsers,
    getUser,
    updateUser,
    deleteUser,
  }
