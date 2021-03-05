import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _auth: AngularFireAuth
  ) { }

  public async singIn(email:string,password:string){
    try {
      const response=await this._auth.signInWithEmailAndPassword(email,password);
      return response;
    } catch (error) {
      return error;
    }
  };

  public async checkCurrentUser(){
    try {
      const authState= await this._auth.authState.toPromise();
      return authState;
    } catch (error) {
      console.log(error);
    }
  }



}
