
export class SolicitudModel {
  codSys : string;
  cui: string;
  fechaNacimiento: string;

  constructor(codSys: string, cui: string,  fechaNacimiento:string) {
    this.codSys = codSys
    this.cui = cui
    this.fechaNacimiento = fechaNacimiento
  }
}
