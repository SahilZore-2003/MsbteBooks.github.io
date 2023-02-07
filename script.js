function validation(){
    let first = document.getElementsByClassName('form-control')[0].value;
    let last = document.getElementsByClassName('form-control')[1].value;

    
 
  if(first == ""){
    document.getElementsByTagName('span')[2].innerHTML = "**Please enter name**";
    return false;
  }
  if(last == ""){
    document.getElementsByTagName('span')[3].innerHTML = "**Please enter last name**";
    return false;
  }
    
    if(document.getElementsByClassName('form-control')[2].value.length != 10){
        document.getElementsByTagName('span')[4].innerHTML = "**Please enter correct number**";
    return false;
   }
   
     
    if(document.getElementsByClassName('form-control')[3].value.length < 8){
        document.getElementsByTagName('span')[5].innerHTML = "**password atleat content 8 characters";
        return false
    }
    
    
    
   

}

let button = document.querySelectorAll('.togglebtn');
let books = document.querySelectorAll('.books');
button[1].onclick = ()=>{
  button[0].classList.remove('togglebtn-focus');
  

}


button[1].addEventListener('focus',()=>{
  books[1].style.display = "block";
  books[0].style.display = "none";
});
button[0].addEventListener('focus',()=>{
  books[1].style.display = "none";
  books[0].style.display = "block";
 });