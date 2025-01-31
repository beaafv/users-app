// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import User from '../models/user.model.mjs'; // Adjust the path as necessary

// export const registerAdmin = async (request, response, next) => {
//     try {
//         // Admin registration logic here
//         return response.json({
//             status: true,
//             message: "You have registered as an admin successfully",
//             data: null,
//         });
//     } catch (e) {
//         console.log(e);
//         return response.status(500).json({
//             status: false,
//             message: "Something went wrong. Please try again",
//             data: null,
//         });
//     }
// };

// export const registerUser = async (request, response, next) => {
//     try {
//         const { username, password } = request.body;
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = new User({ username, password: hashedPassword });
//         await newUser.save();

//         return response.json({
//             status: true,
//             message: "You have registered successfully",
//             data: null,
//         });
//     } catch (e) {
//         console.log(e);
//         return response.status(500).json({
//             status: false,
//             message: "Something went wrong. Please try again",
//             data: null,
//         });
//     }
// };

// export const login = async (request, response, next) => {
//     try {
//         const { username, password } = request.body;
//         const user = await User.findOne({ username });

//         if (!user) {
//             return response.status(400).json({
//                 status: false,
//                 message: "Invalid username or password",
//                 data: null,
//             });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return response.status(400).json({
//                 status: false,
//                 message: "Invalid username or password",
//                 data: null,
//             });
//         }

//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//         return response.json({
//             status: true,
//             message: "Login successful",
//             data: { token },
//         });
//     } catch (e) {
//         console.log(e);
//         return response.status(500).json({
//             status: false,
//             message: "Something went wrong. Please try again",
//             data: null,
//         });
//     }
// };
