// Importing the ExpressJS router
import { Router } from "express";
// Importing the Router manager
import path from "path";
//Importing ROOT_DIR
import { ROOT_DIR } from "../helpers/paths.js";

// Creating an Express router instance
const router = Router();

// Creating data in RAM
export const products = [];

// GET /admin/add-product
router.get("/add-product", (req, res, next) => {
  // Serving the form
  console.log(`ROOT_DIR: ${ROOT_DIR}`);
  console.log("✔ Serving the form...");
  res.render("add-product");
  // res.sendFile(path.join(ROOT_DIR, "views", "add-product.html"));
  // res.render("add-product", { layout: false });
});

// POST /admin/add-product
router.post("/add-product", (req, res) => {
  // Making the parameter extraction inside of the petition
  console.log(req.body);
  // Making the "name" destructuring of the request
  const { title } = req.body;
  // Adding the data in the Database
  products.push(title);
  res.redirect("/");
});

// Exporting the admin router
export default router;
