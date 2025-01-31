import jwt from 'jsonwebtoken';

export const verifyJWTToken = (request, response, next) => {
    try {
      const authHeader = request.headers['authorization'];
      const  token = authHeader && authHeader.split(' ')[1];

        console.log('request', request);
        console.log('headers', request.headers);
        console.log('Authorization', request.headers.authorization);

        console.log('Token:', token);
        if (!token) {
            return response.status(403).json({
                status: false,
                message: "Invalid token or expired!",
                data: null,
            });
        } else {
            jwt.verify(token, process.env.JWT_SECRET, async (err, result) => {
                if (err) {
                    return response.status(401).json({
                        status: false,
                        message: "You are not authorized",
                        data: null,
                    });
                } else {
                    if (result) {
                        request.body.user = result;
                        return next();
                    } else {
                        return response.status(401).json({
                            status: false,
                            message: "Invalid token or expired!",
                            data: null,
                        });
                    }
                }
            });
        }
    } catch (e) {
        console.log(e);
        return response.status(500).json({
            status: false,
            message: "Something went wrong. Please try again",
            data: null,
        });
    }
};
