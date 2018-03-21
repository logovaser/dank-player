import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {File} from '@ionic-native/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private file: File) {

    this.file.getFreeDiskSpace()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

}
