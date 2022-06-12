const fs= require('fs');
var path = require('path');

var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

var currentTime = new Date();
var yearActual = currentTime.getFullYear();
var anioDesde = 2017;
var restaAnios=yearActual-anioDesde;
var anios = [];
anios.push(anioDesde);

for(i=0;i<restaAnios;i++){
	anioDesde += 1;
	anios.push(anioDesde);
}

const dirname =path.join(process.cwd(), '/TAREA');

fs.mkdirSync(dirname,0o776);
if (fs.existsSync(dirname)) {
	CrearFolderAnios();
}

function CrearFolderAnios(){
	for(var a =0;a<anios.length;a++){
		var yearDirname=path.join(dirname, '/'+anios[a]);
		fs.mkdirSync(yearDirname,0o776);
		if (fs.existsSync(yearDirname)) {
			CrearFolderMeses(anios[a],yearDirname);
		}
	}
}
function CrearFolderMeses(anios,yearDirname){
	for(var m =0;m<meses.length;m++){
		var monthDirname=path.join(yearDirname, '/'+meses[m]);
		mes =m+1;
		fs.mkdirSync(monthDirname,0o776);
		if (fs.existsSync(monthDirname)) {
			CrearFileDias(anios,monthDirname,mes);
		}
	}
}
function CrearFileDias(anio,monthDirname,mes){
	
	var dias =new Date(anio, mes, 0).getDate();
	for(var d =1;d<=dias;d++){
		var dayFilename=path.join(monthDirname, '/'+d+'.txt');
		fs.writeFile(dayFilename, 'This is my text', function (err) {
			if (err) throw err;
			console.log('Results Received');
		});
	}
	
}

/*[5:57 PM] SUAREZ GUZMAN KEVIN BRYAN
    ksuarezg@pichincha.com
​[5:58 PM] SUAREZ GUZMAN KEVIN BRYAN
    [Nombre] Semillero-20220608*/
