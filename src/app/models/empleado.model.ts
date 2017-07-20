
export interface IEmpleado {
    _id?: String;
    nombre?: String;
    apellido?: String;
    cedula?: String;
    direccion?: String;
    correo?: String;
    telefono?: String;
}

export class Empleado {
    _id: String;
    nombre: String;
    apellido: String;
    cedula: String;
    direccion: String;
    correo: String;
    telefono: String;
}
