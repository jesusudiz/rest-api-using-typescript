import {Router,Request, Response} from "express";
import {readdirSync} from "fs";



const Path_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
const file = fileName.split(".").shift();
return file;
};


readdirSync(Path_ROUTER).filter((fileName)=>{
   const cleanName = cleanFileName(fileName);
   if(cleanName !=="index"){
    import(`./${cleanName}`).then((moduleRouter)=>{
    console.log(`se esta cargando la ruta ....${moduleRouter}`)
        router.use(`/${cleanName}`,moduleRouter);
    });
   }
});

console.log(Path_ROUTER);


export { router};