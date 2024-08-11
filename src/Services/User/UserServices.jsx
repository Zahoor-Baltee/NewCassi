import { ExecuteGet, ExecutePost } from "../ApiServices";

export const UserServices = {
  async loginUser(data) {
    let response = await ExecutePost("users/login", data);
    return response;
  },
  async getlist() {
    let response = await ExecuteGet("users/list");
    return response;
  },
};
