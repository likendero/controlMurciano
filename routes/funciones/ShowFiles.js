
const fs = require("fs/promises");
const fs2 = require("fs");

const path = require("path");
// const { dir } = require("console");
/**
 * Class create an object with capacity of consult and validate directories
 * 
 * @author Javier González Rives
 * @since 23/06/2020
 */
class ShowFiles {
  __dir = "";

  constructor(dir = "/") {
    this.__dir = dir;
  }

  /**
   * funcion que define un nuevo directorio
   *
   * @param {string} dir nuevo directorio
   */
  defineDirectory(dir) {
    this.__dir = dir;
  }

  /**
   * metodo que devuelve el directorio actual del objeto instanciado
   * @returns {string} directorio actual del objeto
   */
  usedDirectory() {
    return this.__dir;
  }

  /**
   * metodo que lista todos los directorios(solo carpetas) en
   * el interior del directorio   actual
   * @returns {string[]|null} devuelve un array con los directorios
   */
  async listDirectories() {
    let res = await this.readDirectory();
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
  async readDirectory() {
    let res = await fs.readdir(this.__dir);
    if (Array.isArray(res)) {
      return res.map((fich) => path.join(this.__dir, fich));
    } else return null;
  }

  // MOVEMENT FUNCTIONS

  /**
   * Method that open an directtory from actual
   * @param {string} dir name of directory to open
   */
  openDirectory(dir) {
    if (this.isDirectoryFromActual(dir)) {
      this.__dir = path.normalize(path.join(this.__dir, dir));
      return true;
    }
    return false;
  }

  /**
   * metodo que retrocede al directorio anterior
   */
  backDirectory() {
    this.__dir = path.normalize(path.join(this.__dir, ".."));
  }

  // VALIDATION FUNCTIONS

  /**
   * method that validate if a directory from actual is a File or a folder(directory)
   * @param {string} dir
   * @returns {boolean} in case of a folder true other case false
   */
  isDirectoryFromActual(dir) {
    const validatedDir = dir || "" ;

    if (validatedDir !== "") {
      const finalDir = path.join(this.__dir, validatedDir);

      if(fs2.existsSync(finalDir)){
        return fs2.statSync(finalDir).isDirectory();
      }
    }
    return false;
  }
}

module.exports = { ShowFiles };
