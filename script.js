function hideContentSwitch(i){
  var contDiv = document.getElementById("cont"+(i).toString());
  var btn = document.getElementById("btn"+(i).toString());
  var arrow = document.getElementById("arrow"+(i).toString());
  if( contDiv.className == "listElementContent hide" ){
    contDiv.classList.remove("hide");
    btn.classList.add("noBorder");
    arrow.classList.remove("arrow-bottom");
    arrow.classList.add("arrow-top");
  }
  else{
    contDiv.classList.add("hide");
    btn.classList.remove("noBorder");
    arrow.classList.remove("arrow-top");
    arrow.classList.add("arrow-bottom");
  }
}

function logInputData(){
  var form1 = document.getElementById("textedit1");
  var form2 = document.getElementById("textedit2");
  var form3 = document.getElementById("letter");
  console.log("Имя: " + form1.value);
  console.log("Номер телефона: " + form2.value);
  console.log("Текст письма: " + form3.value);
}

function phoneValidation(phoneString){
  if(phoneString.includes("_")){
    return 0;
  }
  else{
    return 1;
  }
}

function validation(){
  var phone = document.getElementById("textedit2").value;
  if(phoneValidation(phone)){
    logInputData();
    console.log("Данные успешно обработаны и отправлены");
    return 1;
  }
  else{
    console.log("Данные номера телефона введены некорректно");
    return 0;
  }
}

function toggleDivVisibility(id) {
  var el = document.getElementById(id);
  el.style.display = el.style.display === 'none' ? 'flex' : 'none';
}

function elemCount(){
  var i = 0;
  var temp = 1;
  while(temp != null){
    temp = document.getElementById("elem"+(i).toString());
    i++;
  }
  i--;
  return i;
}

function searchFunc(){
  var n = elemCount();
  var searchString = document.getElementById("searchEdit").value.toLowerCase();
  var temp;
  for(var i = 0; i<n; i++){
    temp = document.getElementById("elem"+(i).toString());
    var str = temp.dataset.nameforsearch.toLowerCase();
    console.log(str);

    if(!(str.includes(searchString))){
      temp.setAttribute('hidden', '');
    }
    else{
      temp.removeAttribute('hidden');
    }
  }
}

