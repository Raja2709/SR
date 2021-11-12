let i=0;let elemCount;

function count(){
    elemCount=document.querySelector('ul').childElementCount;
    
    if(elemCount>1){
        $('.placeholder').hide();
    }else{
        $('.placeholder').show();
    }
}

$('input').keydown((e)=>{
    if(e.key === "Enter"){
        if(document.querySelector('input').val != ''){
            i+=1;
            let list=document.createElement("li");
            list.innerText=document.querySelector('input').value;
            list.classList.add('list'+  i);
            document.querySelector('ul').appendChild(list);
            document.querySelector('input').value='';
            count();

        }
    
    }
})

$('ul').click((e)=>{
    let removeElem=e.target;
    removeElem.remove();

    count();
})
