import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor(private http: HttpClient) {}

  getAllItems(): Observable<any> {
    return this.http.get("http://localhost:3000/cart-items");
  }

  addItem(item: any): Observable<any> {
    return this.http.post("http://localhost:3000/cart-items", item);
  }

  removeItem(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/cart-items/${id}`);
  }

  updateItem(id: any, updated: any): Observable<any> {
    return this.http.put(`http://localhost:3000/cart-items/${id}`, {
      quantity: updated.quantity
    });
  }

  // putRequest(original: any, updated: any): Observable<any> {
  //   console.log(updated.id);

  //   return this.http.put(`${this.BASE_URL}/people/${original.id}`, {
  //     name: updated.name,
  //     id: updated.id
  //   });
  // }
}
