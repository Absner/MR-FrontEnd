import { IEmpleado } from './empleado.model';

export interface IAdmin {
    _id?: String;
    empleado?: String | IEmpleado;
    username?: String;
    password?: String;
}

export class Admin  {
    _id: String;
    empleado: String | IEmpleado;
    username: String;
    password: String;
}
