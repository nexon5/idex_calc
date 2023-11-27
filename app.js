const width = document.getElementById('width');
const height = document.getElementById('height');
const px = document.getElementById('px');
const btn = document.getElementById('calc');
const factor = document.getElementById('factor');

width.value = window.innerWidth;
height.value = window.innerHeight;

btn.onclick = (e) =>{
	if(px.value !== ''){
		factor.value = (px.value/(width.value/100 + (height.value-28)/100)).toFixed(2);
	}else{
		px.value = (factor.value*(width.value/100 + (height.value-28)/100)).toFixed(0);
	}
	
}
