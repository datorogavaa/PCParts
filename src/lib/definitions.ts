// import { z } from "zod"
// export const signUpFormSchema = z.object({
//     name: z.string().min(4,"Name is required"),
//     email: z.string().email("Invalid email format"),
//     password: z.string().min(8, "Password must be at least 8 characters long") // Minimum length of 8
//     .regex(/[a-z]/, "Password must contain at least one lowercase letter") // Requires lowercase letter
//     .regex(/[A-Z]/, "Password must contain at least one uppercase letter") // Requires uppercase letter
//     .regex(/[0-9]/, "Password must contain at least one number") // Requires a number
//     .regex(/[@$!%*?&]/, "Password must contain at least one special character")
// })
// type User = z.infer<typeof signUpFormSchema>