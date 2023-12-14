const width = document.getElementById('width');
const height = document.getElementById('height');
const px = document.getElementById('px');
const btn = document.getElementById('calc');
const factor = document.getElementById('factor');
const btnCopy = document.getElementById('copy');
const btnAuto = document.getElementById('auto');
const info = document.getElementById('info-area');

width.value = window.innerWidth;
height.value = window.innerHeight;



btn.onclick = (e) =>{
	if(px.value !== ''){
		factor.value = (px.value/(width.value/100 + (height.value-28)/100)).toFixed(2);
	}else{
		px.value = (factor.value*(width.value/100 + (height.value-28)/100)).toFixed(0);
	}
	
}

btnAuto.addEventListener('click', (e) =>{
	width.value = window.innerWidth;
	height.value = window.innerHeight;
});

btnCopy.onclick = (e) =>{
	if(factor.value !== ''){
	navigator.clipboard.writeText(`calc($index * ${factor.value})`)
		.then(()=> {
			btnCopy.innerText = 'Copied';
			info.innerText = `Copied: calc($index * ${factor.value})`;
			info.style.visibility='visible';
			setTimeout(()=>{
				btnCopy.innerText = 'Copy';
				info.style.visibility='hidden';
			},2000)
		})
		.catch((err)=>console.error(err));
	}else{

	}
}

	// 80a4ed #4D5382/#4D5382/#4D5382
