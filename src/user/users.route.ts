import { Router } from "express";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

const userRoute = Router();
const userService = new UserService();
const userController = new UserController(userService);

userRoute.get("/", async (req, res) => {});

userRoute.get("/:id", (req, res) => {});

userRoute.post("/register", async (req, res) => {
  console.log(req.body)
  const result = await userController.createUser(req.body);
  if (!result) {
    res.status(400).end("Bad request error");
    return;
  }
  res.status(result.status).end(result.body);
});

userRoute.patch("/edit/:id", (req, res) => {});

userRoute.delete("/delete/:id", (req, res) => {});

export default userRoute;