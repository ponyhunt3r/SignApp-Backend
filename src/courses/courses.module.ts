import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { DatabaseModule } from '../shared/database.module';
import { coursesProviders } from './courses.providers';
import { CourseService } from './course.service'

@Module({
  imports: [DatabaseModule],
  controllers: [CoursesController],
  providers: [CourseService, ...coursesProviders],
  exports: [CourseService],
})
export class CoursesModule {}
