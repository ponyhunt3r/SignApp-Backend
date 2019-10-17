import { Controller, Get, Request, Post, Body, UseGuards } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto'
import { CourseService } from './course.service'


@Controller('courses')
export class CoursesController {
    constructor(
        private readonly courseService: CourseService
    ) {}
    @Get('/all')
    getCourses() {
        return this.courseService.findAll()
    }
    @Post()
    createCourse(@Body() createCourseDto: CreateCourseDto) {
        return this.courseService.createCourse(createCourseDto)
    }
}
