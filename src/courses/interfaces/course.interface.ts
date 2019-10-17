import { Document } from 'mongoose';

export interface Course extends Document {
    name: string;
    description: string;
    maxMembers: number;
    noOfMembers: number;
    members: Array<String>;
}
