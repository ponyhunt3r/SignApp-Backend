import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  getLogin(): string {
    return '<div> Please login </div> ';
  }
}
