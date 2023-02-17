import mongoose from "mongoose";
 const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: 'string',
            required: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: 'string',
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: 'string',
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: 'string',
            required: true,
            min: 5,
            unique: true,
        },
        picturePath: {
            type: 'string',
            required: true,
            default: '',
        },
        firends: {
            type: 'array',
            default: [],
        },
        location: String,
        Occupation: String,
        viewedProfile: Number,
        impressions: Number,
        
    },{ timestamps: true }
 );

 const User = mongoose.model('User', UserSchema);
 export default User