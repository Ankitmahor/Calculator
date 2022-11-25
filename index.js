
let string="";
let buttons= document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{

        if(e.target.innerHTML == '='){
            string = (Number(eval(string))).toFixed(4);
            document.querySelector('.input').value=string;
            
        }
        else if(e.target.innerHTML=='C'){
            string="";

            document.querySelector('input').value=string;
        }
        else{
           
            string =string + e.target.innerHTML;
            document.querySelector('.input').value=string;
        }
     
    })
})
