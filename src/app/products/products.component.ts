import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  cartItems: object[] = [];
  public show_form: boolean = false;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getAllItems().subscribe(response => {
      this.cartItems = response;
      console.log(this.cartItems);
    });
  }

  toggle() {
    this.show_form = !this.show_form;
    //   if(this.show_form)
    //   this.buttonName = "Hide";
    // else
    //   this.buttonName = "Show";
  }

  newItem(id: number) {
    this.cartService.addItem(id).subscribe(response => {
      this.cartItems = response;
    });
  }

  deleteItem(id: number): void {
    this.cartService.removeItem(id).subscribe(response => {
      this.cartItems = response;
    });
  }

  newQuantity(id: number, updated: any) {
    this.cartService.updateItem(id, updated).subscribe(response => {
      this.cartItems = response;
    });
  }
}
