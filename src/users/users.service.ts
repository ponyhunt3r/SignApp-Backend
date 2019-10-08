import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './interfaces/user.interface'
var bcrypt = require('bcryptjs');
//import { bcrypt } from 'bcryptjs';
export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(
      @Inject('USER_MODEL') private readonly userModel: Model<User>
  ) {
    this.users = [
      {
        email: 'john',
        password: 'changeme',
      },
      {
        email: 'chris',
        password: 'secret',
      },
      {
        email: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
  create(createUserDto: CreateUserDto): any {
    const query = { email: createUserDto }
    this.userModel.find(query, (err, res)=> {
		if(!err && res.length === 0) {
			bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(createUserDto.password, salt,
                    function(error, hash) {
					createUserDto.password = hash;
                    //createUserDto.save();')
                    const createdUser = new this.userModel(createUserDto);
                    return createdUser.save();
				});
			});
		} else {
			throw err
		}
	})
    // const createdUser = new this.userModel(createUserDto);
    // return createdUser.save();
  }
  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

}