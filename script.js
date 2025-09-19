function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	let r=parseFloat(document.getElementById("radius").value);
	if(r<=0 || isNaN(r)){
		document.getElementById("volume").value = "NaN";
		return;
	}
	let volume=(4/3)*(Math.PI)*(r*r*r);
	document.getElementById("volume").value=volume.toFixed(4)
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
