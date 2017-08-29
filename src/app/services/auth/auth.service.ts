import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';

@Injectable()
export class AuthService {

  constructor() { }

  logIn (user: User) {}
}

export class AuthServiceMock {

  constructor() {}

  logIn (user: User) {}
}