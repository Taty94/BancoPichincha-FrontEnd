const fs = require('fs');
const dirName = process.cwd();
const path = require('path');
//console.log(__dirname) 
//console.log(process.cwd())
const images = dirName + "/Imagenes";
const word = dirName + "/Word";
const pdf = dirName + "/Pdfs";
var _validImgExtensions = [".jpg", ".jpeg", ".bmp", ".gif", ".png"]; 

fs.readdir(dirName, (err, files) => {
    files.forEach(file => {
        var extention = path.extname(file);
        OrderFiles(extention, dirName, file);
    });
});

function OrderFiles(extention, dirName, file) {
    if (extention == ".docx") {
        CreateFolder(word);
        const currentDir = path.join(dirName, file);
        const destinationDir = path.join(word, file);
        MoveFile(currentDir,destinationDir);
    }

    if (extention == ".pdf") {
        CreateFolder(pdf);
        const currentDir = path.join(dirName, file);
        const destinationDir = path.join(pdf, file);
        MoveFile(currentDir,destinationDir);
    }

    for(var i=0;i<_validImgExtensions.length;i++){
        if (extention==_validImgExtensions[i]) {
            CreateFolder(images);
            const currentDir = path.join(dirName, file);
            const destinationDir = path.join(images, file);
            MoveFile(currentDir,destinationDir);
        }
    }
}

function CreateFolder(path){
    try {
        if (fs.existsSync(path)) {
            console.log("existe");
        } else {
            fs.mkdirSync(path, 0o776);
        }
    } catch (err) {
        console.error(err)
    }
}
function MoveFile(currentDir,destinationDir){
    fs.rename(currentDir, destinationDir, (err) => {
        if (err) {
            throw err
        } else {
            console.log("Successfully moved the file!");
        }
    });
}