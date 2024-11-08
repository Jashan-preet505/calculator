btns = document.querySelectorAll('.btn');
text=document.querySelector('#input');
string=""
btns.forEach(btn => {
    btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            text.value=string;
            string="";
        }
        else if(e.target.innerHTML== "AC"){
            string="";
            text.value=string;

        }
        else if(e.target.innerHTML == "DEL"){
            string =string.substr(0,string.length-1);
            text.value=string;



        }
        else {
        string+= e.target.innerHTML;
        text.value=string;
        console.log(e)
        }
    })
}
);
