const { z } = require("zod");

// Create an object schema
const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "email_id must be at least of 3 characters." })
        .max(255, { message: "email_id must not be more than 255 characters." }),
    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(8, { message: "Password must be at least of 8 characters." })
        .max(1024, { message: "Password must not be more than 1024 characters." }),
});
const signupSchema = loginSchema.extend({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least of 3 characters." })
        .max(255, { message: "Name must not be more than 255 characters." }),
    phone: z 
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone number must be at least of 10 characters." })
        .max(20, { message: "Phone number must not be more than 20 characters." }),
    
});


module.exports = {signupSchema, loginSchema};