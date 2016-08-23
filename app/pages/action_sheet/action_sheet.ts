/**
 * Created by kongx on 2016/8/23.
 */
import {Component} from '@angular/core';
import {Platform,ActionSheetController} from 'ionic-angular';


@Component({
  templateUrl:'./build/pages/action_sheet/action_sheet.html'
})
export class BasicSheet{
  constructor(
            public platform:Platform,
            public actionSheetCtrl:ActionSheetController
  ){}
  openMenu(){
    let actionSheet = this.actionSheetCtrl.create({
      title:'删除',
      cssClass:'action-sheets-basic-page',
      buttons:[
        {
          text:'del',
          role:'destructive',
          icon:!this.platform.is('ios')?'trash':null,
          handler:()=>{
            console.log('click del')
          }
        },
        {
          text:'share',
          icon:!this.platform.is('ios')?'share':null,
          handler:()=>{
            console.log('click share')
          }
        },
        {
          text:'play',
          icon:!this.platform.is('ios')?'arrow-dropright-circle':null,
          handler:()=>{
            console.log('click play')
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]

    });
    actionSheet.present();
  }
}
