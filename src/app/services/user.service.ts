import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  fullName: string = '';
  address: string = '';
  cardNumber: string = '';

  constructor() { }

  saveUser(name: string, address: string, card: string): void {
    this.fullName = name;
    this.address = address;
    this.cardNumber = card;
  }

  getUser(): string {
    return this.fullName;
  }

  resetUser(): void {
    this.fullName = '';
    this.address = '';
    this.cardNumber = '';
  }
}
