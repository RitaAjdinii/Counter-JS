const buttons = document.querySelectorAll("button");
let value = document.querySelector("#num");


buttons.forEach(function(item,index){
    item.addEventListener("click",function(){
       if(item.id == 'increase'){
        value.textContent++;
       if(value.textContent>0){
        value.classList.add('add');
        value.classList.remove('sub');
       }
       }

       if(item.id =='reset'){
        value.textContent = 0;
        value.classList.remove('add')
        value.classList.remove('sub');
       }

       if(item.id == 'decrease'){
        value.textContent--;
       if(value.textContent<0){
        value.classList.remove('add');
        value.classList.add('sub');
       }
       }

      



    });
});