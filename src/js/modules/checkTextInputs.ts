const checkTextInputs = (selector:string) => {
const txtInputs = document.querySelectorAll(selector) as NodeListOf<HTMLElement>;

txtInputs.forEach(input=>{
	input.addEventListener('keypress', (e)=>{
		if(e.key.match(/[^а-яё 0-9]/ig)){
			e.preventDefault();
		}
	})
})

};

export default checkTextInputs;
