form = document.getElementById('form');
const errorMessage =document.getElementById('errorMessage');
const input = document.getElementById('input');
const successMessage =document.getElementById('successMessage');
form.addEventListener('click', ()=>{
    input.classList.add('border-1','border-darkblue');
        form.addEventListener('submit', (e)=>{
            let regex = /[a-z]/ig ;
            
            if(!input.value.trim() ){
                input.value.clear();
                errorMessage.innerText = "Please enter Your address!";
                input.classList.add('border-2','border-[#FF0000]');
                e.preventDefault() // to prevent the submission if the input is empty
            }
            else if(!regex.test(input.value)){
                errorMessage.innerText = "Please enter a valid address!"
                input.classList.add('border-2','border-[#FF0000]');
                e.preventDefault();
            }
            else{
                successMessage.innerText = "";
            };
        });
});