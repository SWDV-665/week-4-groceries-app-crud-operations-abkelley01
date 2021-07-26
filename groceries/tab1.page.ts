import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogService } from '../input-dialog.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery"


  constructor(public toastController: ToastController, public dataService: GroceriesServiceService, public alertController: AlertController, public inputDialogService: InputDialogService) {}

  loadItems() {
    return this.dataService.getItems();
  }

  async removeItem(item, index) {
    console.log("removing item - ", item, index);

    const toast = await this.toastController.create({
      message: 'Removing item ' + index + '...',
      duration: 2000
    });
    toast.present();

    this.dataService.removeItem(index);
  }

  async editItem(item, index) {
    console.log("editing item - ", item, index);

    const toast = await this.toastController.create({
      message: 'editing item ' + index + '...',
      duration: 2000
    });
    toast.present();
    this.inputDialogService.showPrompt(item,index);

  }

  addItem() {
    console.log("Add Item");
    this.inputDialogService.showPrompt();
  }

  
  
}
