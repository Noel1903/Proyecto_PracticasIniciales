import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  public setSession(authResult) {

  const expiresAt = this.getDecodedAccessToken(authResult.accessToken).exp;
  const creationat= this.getDecodedAccessToken(authResult.accessToken).iat;
  const roll= this.getDecodedAccessToken(authResult.accessToken).roll
   const id_usuario = this.getDecodedAccessToken(authResult.accessToken).id_usuario;
  localStorage.setItem('id_token', authResult.accessToken);
  localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  localStorage.setItem("create_at", JSON.stringify(creationat.valueOf()) );
  localStorage.setItem("Roll",roll);
  localStorage.setItem("id_usuario",id_usuario)
}          

logout() {
  localStorage.removeItem("id_token");
  localStorage.removeItem("expires_at");
  localStorage.removeItem("create_at");
  localStorage.removeItem("Roll");
  localStorage.removeItem("id_usuario");
}

public isLoggedIn() {
  if(moment().unix()> Number(localStorage.getItem("expires_at"))){
    return true
  }else{
    return false;
  }
}
isLoggedOut() {
  return !this.isLoggedIn();
}
getDecodedAccessToken(token: string): any {
  try{
      return jwt_decode(token);
  }
  catch(Error){
      return null;
  }
}

}
