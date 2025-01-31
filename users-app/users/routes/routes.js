import { Router } from "express";
import { getUsers, getUser, updateUser, deleteUser } from "../controllers/users.controller.js";


const router = Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 */



router.get('/', getUsers);
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: User list successfully retrieved
 *       400:
 *         description: Bad request
 */



router.get('/:id', getUser);

/**
 * @swagger
* /users/{id}:
 *   get:
 *     summary: Retrieve a single user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The user ID
 *     responses:
 *       200:
 *         description: User retrieved successfully
 *       400:
 *         description: Bad request
 */




router.put('/:id', updateUser);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Bad request
 */


router.delete('/:id', deleteUser);

/**
* @swagger
* /users/{id}:
*  delete:
*     summary: Delete a user by ID
*     tags: [Users]
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*         description: The user ID
*     responses:
*       200:
*         description: User deleted successfully
*       400:
*         description: Bad request
*/

export default router;
