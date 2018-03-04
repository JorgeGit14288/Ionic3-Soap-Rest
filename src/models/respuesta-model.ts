export class RespuestaModel {
  codigo: string;
  mensaje : string;
  muestraMensaje: boolean;


  constructor(codigo: string, mensaje: string,  muestraMensaje:boolean,) {
    this.codigo = codigo
    this.mensaje=mensaje;
    this.muestraMensaje = muestraMensaje;
  }
}
