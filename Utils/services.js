function getData(){
	return fetch('./data.json')
	.then(res => res.json())
	.then(d => d)
	.catch(e => console.log(e))
}
