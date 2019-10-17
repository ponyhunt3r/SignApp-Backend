import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateCourseDto } from './dto/create-course.dto'
import { Course } from './interfaces/course.interface'
import { create } from 'istanbul-reports';

@Injectable()
export class CourseService{

    constructor(
        @Inject('COURSE_MODEL') private readonly courseModel: Model<Course>
    ) {}

    createCourse(createCourseDto: CreateCourseDto): any {
        const query = {
            name: createCourseDto.name,
            description: createCourseDto.description,
            maxMembers: createCourseDto.maxMembers,
            noOfMembers: createCourseDto.noOfmembers,
            members: createCourseDto.members
        }
        const createdCourse = new this.courseModel(createCourseDto);
        return createdCourse.save();
    }
    async findAll(): Promise<Course[]> {
        return await this.courseModel.find().exec();
      }

}