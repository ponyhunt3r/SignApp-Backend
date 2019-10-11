import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { isEmpty } from 'lodash'

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
      ) {}

      @Post()
      async create(@Body() createUserDto: CreateUserDto) {
        this.usersService.create(createUserDto)
      }

      @Get()
      async findAll(): Promise<User[]> {
        return this.usersService.findAll();
      }
      @Get(':id')
      async findOne(@Param() params): Promise<boolean> {
        const user: User =  await this.usersService.findOne(params.id)
        console.log('user', user)
        if (isEmpty(user)) {
          return true
        } else {
          return false
        }
      }
}
