import { Component, OnInit } from '@angular/core';
import { ThemesService } from 'src/app/services/themes.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private _theme: ThemesService) { }

  ngOnInit(): void {
    this._theme.currentTheme.subscribe(res=>{
      this.dark=res
      this._theme.currentLogo.subscribe(res=>{
        this.logoName=res
      })
    })
  }

  dark:boolean=false
  logoName="logo"
  toggleTheme(){
    this.dark=!this.dark
    this._theme.currentTheme.next(this.dark)
    this.dark===true?this.changeTheme(this.darkColor):this.changeTheme(this.lightColor)
    this.dark===true?this.logoName="logo-white":this.logoName="logo"
    this._theme.currentLogo.next(this.logoName)
  }

  lightColor={
    primaryColor:"#dde1e7",
    textColor:"black",
    clipBGPrimary:"rgb(2, 0, 36)",
    clipBG:"linear-gradient(90deg,rgba(2, 0, 36, 1) 0%,rgba(9, 121, 92, 0.9808123078332895) 0%,rgba(0, 212, 255, 1) 100%)"
  }
  darkColor={
    primaryColor:"#2a2a2c",
    textColor:"white",
    clipBGPrimary:"rgb(111,119,113)",
    clipBG:"linear-gradient(90deg,rgba(111, 119, 113, 1) 10%,rgba(82, 93, 145, 1) 68%)"
  }

  changeTheme(color:any){
    document.documentElement.style.setProperty('--primary-color',color.primaryColor)
    document.documentElement.style.setProperty('--theme-text-color',color.textColor)
    document.documentElement.style.setProperty('--theme-clip',color.clipBG)
  }

  scrollToCards(){
    document.getElementById('tech-cards')?.scrollIntoView();
  }

}
