import { Router } from "express";

const userRoute = Router();

userRoute.get("/", (req, res) => {});

userRoute.get("/:id", (req, res) => {});

userRoute.post("/register", (req, res) => {});

userRoute.patch("/edit/:id", (req, res) => {});

userRoute.delete("/delete/:id", (req, res) => {});

export default userRoute;
