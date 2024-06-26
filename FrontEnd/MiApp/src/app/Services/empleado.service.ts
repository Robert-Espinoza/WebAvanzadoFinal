import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { appsetttings } from '../Settings/appsettings';
import { Empleado } from '../Models/Empleado';
import { ResponseAPI } from '../Models/ResponseAPI';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private http = inject(HttpClient);
  private apiUrl:string = appsetttings.apiUrl + "Empleado";

  constructor() { }

  lista(){
    return this.http.get<Empleado[]>(this.apiUrl);
  }
  obtener(id:number){
    return this.http.get<Empleado>(`${this.apiUrl}/${id}`);
  }

  crear(objeto:Empleado){
    return this.http.post<ResponseAPI>(this.apiUrl,objeto);
  }

  editar(objeto:Empleado){
    return this.http.put<ResponseAPI>(this.apiUrl,objeto);
  }

  eliminar(id:number){
    return this.http.delete<ResponseAPI>(`${this.apiUrl}/${id}`);
  }
}
