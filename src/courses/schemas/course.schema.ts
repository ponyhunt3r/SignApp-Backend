import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema({
    name: String,
    description: String,
    maxMembers: Number,
    noOfMembers: Number,
    members: Array,
})