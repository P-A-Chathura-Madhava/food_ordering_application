import mongoose, { model, models } from "mongoose";
// import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        // required:true,
        // validate: (pass)=>{
        //     if (!pass?.length || pass.length < 5) {
        //         new Error("Password must be at least 5 characters");
        //         return false;
        //     }
        // }
    },
});

// userSchema.post("validate", function (user) {
    // const pass = user.password;
    // const salt = bcrypt.genSaltSync(10);
    // const hashedPassword = bcrypt.hashSync(pass, salt);
    // user.password = hashedPassword;
// })

export const User = models?.User || model("User", userSchema);
