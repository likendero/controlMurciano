"use strict";
exports.__esModule = true;
exports.ShowFiles = void 0;
var fs_1 = require("fs");
var ShowFiles = /** @class */ (function () {
    // PARA CREAR UN NUEVO objeto es esencial saber la ruta 
    function ShowFiles(dir) {
        this.dir = '';
        this.dir = dir;
    }
    ShowFiles.prototype.listarDirectorio = function () {
        var files2;
        fs_1.readdir(this.dir, function (err, files) {
            files2 = files;
        });
        console.log(files2);
        return files2;
    };
    return ShowFiles;
}());
exports.ShowFiles = ShowFiles;
