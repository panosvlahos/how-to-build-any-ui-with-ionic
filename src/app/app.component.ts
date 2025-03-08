import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar, StatusBarStyle } from '@capacitor/status-bar';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private platform: Platform,private menuCtrl: MenuController,private router: Router) {
    this.initializeApp();
    this.checkLogin();
  }

  async initializeApp() {
    await this.platform.ready();  // Ensure platform is ready
    // Check if the platform is iOS or Android before using StatusBar

    if (this.platform.is('mobileweb')) {
    
    console.log('Running on mobile web. StatusBar plugin is not supported. ');
  }
    else if(this.platform.is('ios') || this.platform.is('android')) {
      await StatusBar.setStyle({ style: StatusBarStyle.Dark }); // Correct usage of StatusBarStyle
      StatusBar.setOverlaysWebView({ overlay: true });
    }
  }

  closeMenu() {
    this.menuCtrl.close(); // Closes the menu programmatically
  }
  checkLogin() {
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // Mock login check
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
    }
    
  }
  openSettings() {
    // Your logic to open the settings goes here
    console.log("Settings button clicked!");
  }
}
