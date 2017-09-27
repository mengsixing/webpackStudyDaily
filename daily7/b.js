import {addone} from './a.js';

function square(x){
	return x*x;
};

function combine(x){
	var afteradd= addone(x);
	console.log(square(afteradd));
}

export default combine;