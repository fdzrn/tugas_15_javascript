function menghitungSegitiga(){
	let ab = 8;
	let bc = 6;
	let ac = Math.pow(ab,2) + Math.pow(bc,2);
	console.log('Nilai AB : ' + ab);
	console.log('Nilai BC : ' + bc);
	console.log('Panjang sisi AC pada Segitiga Siku-siku tersebut adalah : '+ Math.sqrt(ac) + ' cm');
}

menghitungSegitiga();
