import {Component} from '@angular/core';
import {BasicSheet} from '../action_sheet/action_sheet';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = BasicSheet;
    this.tab2Root = AboutPage;
    this.tab3Root = ContactPage;
  }
}
