const fs = require("fs/promises");
const fs2 = require("fs");

const path = require("path");
const { dir } = require("console");
class Ver_Ficheros {
  __dir = "";

  constructor(dir = "D:/www") {
    this.__dir = dir;
  }

  /**
   * funcion que define un nuevo directorio
   *
   * @param {string} dir nuevo directorio
   */
  definirDirectorio(dir) {
    this.__dir = dir;
  }

  /**
   * metodo que devuelve el directorio actual del objeto instanciado
   * @returns directorio actual del objeto
   */
  directorioUsado() {
    return this.__dir;
  }
  /**
   * metodo que lista todos los directorios(solo carpetas) en 
   * el interior del directorio   actual
   * @returns {string[]|null} devuelve un array con los directorios
   */
  async listarDirectorios() {
    let res = await this.leerDirectorio();
    if (res !== null) {
      let dirs = res.filter((fich) => fs2.statSync(fich).isDirectory());
      console.log(dirs);
      return dirs;
    } else return null;
  }
  /**
   * funcion que devuelve todos los directorios incluyendo los archivos
   * @returns {string[]|null} devuelve un array con los directorios
   */
  async leerDirectorio() {
    let res = await fs.readdir(this.__dir);
    if (Array.isArray(res)) {
      return res.map((fich) => path.join(this.__dir, fich));
    } else return null;
  }
  /**
   * metodo que retrocede al directorio anterior
   */
  retrocederDirectorio(){
    this.__dir = path.normalize(path.join(this.__dir,'..'));
  }
}

module.exports = Ver_Ficheros;
