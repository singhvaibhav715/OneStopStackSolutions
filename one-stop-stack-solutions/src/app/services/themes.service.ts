import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  constructor() { }

  curr_color={
    primaryColor:"#dde1e7",
    textColor:"black",
    clipBGPrimary:"rgb(2, 0, 36)",
    clipBG:"linear-gradient(90deg,rgba(2, 0, 36, 1) 0%,rgba(9, 121, 92, 0.9808123078332895) 0%,rgba(0, 212, 255, 1) 100%)"
  }

  currentTheme = new BehaviorSubject<boolean>(false)
  currentLogo = new BehaviorSubject<string>("logo")
}
