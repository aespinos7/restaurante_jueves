export class Plato {
  public codPlato: number;
  public nombrePlato: string;
  public precioPlato: string;
  public regionPlato: string;
  public imagenPlato: string;
  public imagenPlatoBase64: string;

  constructor(codp: number, nomp: string, prec: string, regi: string, imag: string, base: string) {
    this.codPlato = codp;
    this.precioPlato = prec;
    this.regionPlato = regi;
    this.imagenPlato = imag;
    this.imagenPlatoBase64 = base;
    this.nombrePlato = nomp;

  }
}
