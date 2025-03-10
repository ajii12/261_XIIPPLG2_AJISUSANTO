const display=document.querySelector(".display");
const tombol=document.querySelectorAll("button");
const archon=["x",":", "+", "-", "=", ".","%"];
let output ="";

const hitung= (btn)=>{
    display.focus();
    if (btn==="="&& output!=="="){
        output=eval(output.replace("x","*").replace(":", "/").replace("%", "/100"));
    
    } else if (btn==="C"){
        output="";
    }else{
        if(output=== "" && archon.includes(btn))return;
        output+=btn;
    }
    display.value=output;
}
tombol.forEach((a)=>{
    a.addEventListener("click",(e)=>hitung(e.target.dataset.value));
})
