
export class ValidarCapchaModel {
  codSys : string;
  codigoCapcha: string;
  transaccion: string;

  constructor(codSys: string, codigoCapcha: string,  transaccion:string) {
    this.codSys = codSys
    this.codigoCapcha = codigoCapcha
    this.transaccion = transaccion;
  }
}
