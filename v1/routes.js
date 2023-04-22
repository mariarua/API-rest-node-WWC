const express = require("express");
const {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("./controllers/products.controller");

const router = express.Router();
const validator = require("./middlewares/validator");

/**
 * @swagger
 * definitions:
 *   ProductRes:
 *     required:
 *      - id
 *      - name
 *      - description
 *      - price
 *      - quantity
 *      - category
 *     properties:
 *      id:
 *        type: string
 *      name:
 *        type: string
 *      description:
 *        type: string
 *      price:
 *        type: number
 *      quantity:
 *        type: number
 *      category:
 *        type: string
 */

/**
 * @swagger
 * /api/v1/products:
 *  get:
 *    summary: Get all products
 *    description: Use this request to get all products from the list
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: Product list
 *        schema:
 *           type: array
 *           items:
 *             $ref: "#/definitions/ProductRes"
 */
router.get("/products/", getAllProducts);

/**
 * @swagger
 * /api/v1/products:
 *  post:
 *    summary: Create product
 *    description: Use this request to create product and add of the product list
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: Product created
 *        schema:
 *          type: object
 *          $ref: "#/definitions/ProductRes"
 *    parameters:
 *      - in: body
 *        name: body
 *        schema:
 *           type: object
 *           properties:
 *            name:
 *              type: string
 *            description:
 *              type: string
 *            price:
 *              type: number
 *            quantity:
 *              type: number
 *            category:
 *              type: string
 *        example:
 *          name: "noxpirin"
 *          description: "noxpirin a los síntomas de la gripe les pone fin"
 *          price: 640
 *          quantity: 0.5
 *          category: medicamentos
 */
router.post(
  "/products/",
  validator("products", "createProductSchema"),
  addProduct
);

/**
 * @swagger
 * /api/v1/products/{id}:
 *  patch:
 *    summary: Update product
 *    description: Use this request to update the product from the product list
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: Product created
 *        schema:
 *          type: object
 *          $ref: "#/definitions/ProductRes"
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        description: Product id
 *      - in: body
 *        name: body
 *        schema:
 *          type: object
 *          $ref: "#/definitions/ProductRes"
 */
router.patch(
  "/products/:id",
  validator("products", "updateProductSchema"),
  updateProduct
);

/**
 * @swagger
 * /api/v1/products/{id}:
 *  delete:
 *    summary: Delete product
 *    description: Use this request to delete a product from the product list
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        description: Product id
 *    responses:
 *      200:
 *        description: Delete product
 *        schema:
 *           type: object
 *           properties:
 *              message:
 *                type: string
 */
router.delete("/products/:id", deleteProduct);

module.exports = router;
