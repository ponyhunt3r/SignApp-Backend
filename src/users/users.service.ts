import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './interfaces/user.interface'
var bcrypt = require('bcryptjs');
export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(
      @Inject('USER_MODEL') private readonly userModel: Model<User>
  ) {}

  async findOne(email: string): Promise<User | undefined> {
    const query = { email: email}
    return this.userModel.find(query);
  }
  create(createUserDto: CreateUserDto): any {  
    const query = { email: createUserDto.email }
    this.userModel.find(query, (err, res)=> {
    const self = this
		if(!err && res.length === 0) {
			bcrypt.genSalt(10, function(err2, salt) {
                bcrypt.hash(createUserDto.password, salt,
                    function(error, hash) {
					            createUserDto.password = hash;
                      const createdUser = new self.userModel(createUserDto);
                      return createdUser.save();
        });
        if (err2) throw err
			});
		} else {
			return {status: '302 duplicated'}
		}
	})
  }
  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

} 