import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/user.model.js';


export const registerUser = async (request, response, next) => {
    try {
        const { username, password, email } = request.body;
        console.log(username, password);

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword , email});
        await newUser.save();

        console.log(newUser);

        const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: 86400 }); // 24 hours

        return response.json({
            status: true,
            message: "You have registered successfully",
            data: { token},
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

export const login = async (request, response, next) => {
    try {
        const { username, password } = request.body;
        const user = await User.findOne({ username });

        if (!user) {
            return response.status(400).json({
                status: false,
                message: "Invalid username or password",
                data: null,
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return response.status(400).json({
                status: false,
                message: "Invalid username or password",
                data: null,
            });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 86500 });

        console.log(token);
        console.log(token);
        return response.json({
            status: true,
            message: "Login successful",
            data: { token },
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
