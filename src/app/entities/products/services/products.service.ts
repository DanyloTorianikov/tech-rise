import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { addPhoto } from '@utils/base64.util';
import { IAddProduct, IProduct } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.apiUrl}posts`);
  }

  public addProduct(product: IAddProduct): Observable<void> {
    const formData = this.generateFormData(product);
    return this.http.post<void>(`${this.apiUrl}posts`, formData);
  }

  public updateProduct(product: IAddProduct, productId: number): Observable<void> {
    const formData = this.generateFormData(product);
    return this.http.post<void>(`${this.apiUrl}posts/${productId}`, formData);
  }

  public deleteProduct(id: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}posts/delete/${id}`, {});
  }

  private generateFormData(product: IAddProduct): FormData {
    const formData = new FormData();
    Object.entries(product).forEach(([key, value]) => {
      if (key === 'image') {
        addPhoto(key, value, formData);
      } else {
        formData.append(key, value);
      }
    })
    return formData
  }
}
