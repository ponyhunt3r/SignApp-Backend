import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LoginController } from './login/login.controller';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [AuthModule, UsersModule, CoursesModule],
  controllers: [AppController, LoginController],
  providers: [AppService],
})
export class AppModule {}