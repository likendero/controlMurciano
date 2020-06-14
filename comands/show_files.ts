import {readdir} from 'fs';


export class ShowFiles{
    dir:string = '';
    
    // PARA CREAR UN NUEVO objeto es esencial saber la ruta 
    constructor(dir:string){
        this.dir = dir;
    }
    
    public listarDirectorio(): Array<String>{
        let files2: string[];
        readdir(this.dir,(err,files) =>{
            files2 = files;
        });

        console.log(files2);
        return files2 ;
    }
}