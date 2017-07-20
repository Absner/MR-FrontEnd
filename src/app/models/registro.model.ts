import { IEmpleado } from './empleado.model';

export interface IRegistro  {
    _id?: String;
    empleado?: String | IEmpleado;
    is_entrada?: boolean;
    establecimento?: String;
    date?: Date;

}

export class Registro {

    _id: String;
    empleado: String | IEmpleado;
    is_entrada: boolean;
    establecimento: String;
    date: Date;
}
