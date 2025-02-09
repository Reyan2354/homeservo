let vname = document.getElementById('vname');
let email = document.getElementById('email');
let pwd = document.getElementById('pwd');
let phone = document.getElementById('phone');
let role = document.getElementById('role');
let cost = document.getElementById('costperday');
let dno = document.getElementById('dno');
let street = document.getElementById('street');
let landmark = document.getElementById('landmark');
let district = document.getElementById('district');
let state = document.getElementById('state');
let pincode = document.getElementById('pincode');
let pvalid = document.getElementById('pvalid');

// preventDefault() The page reload will be stopped

let input = document.getElementsByTagName('input');

let signup = document.getElementById('signup');

for(let i = 0; i <input.length; i++) {
  input[i].addEventListener('keypress',()=>{
    check();
    console.log("hello!");
  },false);
}

let regx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

let upper = /[A-Z]/ ;
let lower = /[a-z]/;
let num = /[0-9]/;
let spc = /[(?=.*-\/:-@\[-\`{-~]/;

let p = document.getElementsByTagName('p');
pwd.addEventListener('keyup', ()=>{
      if(upper.test(pwd.value) === false){
        p[2].innerHTML='this field should contain upper case characters';
        p[2].style.color = 'red';
        pwd.style.borderColor = 'red';
      }
      else if(lower.test(pwd.value) === false){
        p[2].innerHTML='this field should contain lower case characters';
        p[2].style.color = 'red';
        pwd.style.borderColor = 'red';
      }
        
      else if(num.test(pwd.value) === false){
        p[2].innerHTML='this field should contain numbers';
        p[2].style.color = 'red';
        pwd.style.borderColor = 'red';
      }
      else if(spc.test(pwd.value) === false){
        p[2].innerHTML='this field should contain special characters';
        p[2].style.color = 'red';
        pwd.style.borderColor = 'red';
      }
      else{
        p[2].innerHTML ='';
        p[2].style.color ='green';
        input[2].style.borderColor = 'green';
      }
    });


signup.addEventListener('click', async (e) =>{
  e.preventDefault();

  // for form validation code
  let p = document.getElementsByTagName('p');
  if(vname.value ===''){
    p[0].innerHTML = 'This field should not empty';
    p[0].style.color = 'red';
    vname.style.borderColor = 'red';
  }
  else if(email.value === ''){
    p[1].innerHTML = 'This field should not empty';
    p[1].style.color = 'red';
    email.style.borderColor = 'red';
  }
  else if(pwd.value === ''){
    p[2].innerHTML = 'This field should not empty';
    p[2].style.color = 'red';
    pwd.style.borderColor = 'red';
    pwd.addEventListener('keyup', ()=>{
      if(upper.test(pwd.value) === false){
        p[2].innerHTML='this field should contain upper case characters';
        p[2].style.color = 'red';
        pwd.style.borderColor = 'red';
      }
      else if(lower.test(pwd.value) === false){
        p[2].innerHTML='this field should contain lower case characters';
        p[2].style.color = 'red';
        pwd.style.borderColor = 'red';
      }
        
      else if(num.test(pwd.value) === false){
        p[2].innerHTML='this field should contain numbers';
        p[2].style.color = 'red';
        pwd.style.borderColor = 'red';
      }
      else if(spc.test(pwd.value) === false){
        p[2].innerHTML='this field should contain special characters';
        p[2].style.color = 'red';
        pwd.style.borderColor = 'red';
      }
      else{
        p[2].innerHTML ='';
        p[2].style.color ='green';
        input[2].style.borderColor = 'green';
      }
      
    });
  }
  else if(phone.value === ''){
    p[3].innerHTML = 'This field should not empty';
    p[3].style.color = 'red';
    phone.style.borderColor = 'red';
  }

  else if(role.value === ''){
    p[4].innerHTML = 'This field should not empty';
    p[4].style.color = 'red';
    role.style.borderColor = 'red';
  }
  else if(cost.value === ''){
    p[5].innerHTML = 'This field should not empty';
    p[5].style.color = 'red';
    cost.style.borderColor = 'red';
  }
  else if(dno.value === ''){
    p[6].innerHTML = 'This field should not empty';
    p[6].style.color = 'red';
    dno.style.borderColor = 'red';
  }
  else if(street.value === ''){
    p[7].innerHTML = 'This field should not empty';
    p[7].style.color = 'red';
    street.style.borderColor = 'red';
  }
  else if(landmark.value === ''){
    p[8].innerHTML = 'This field should not empty';
    p[8].style.color = 'red';
    landmark.style.borderColor = 'red';
  }
  else if(district.value === ''){
    p[9].innerHTML = 'This field should not empty';
    p[9].style.color = 'red';
    district.style.borderColor = 'red';
  }
  else if(state.value === ''){
    p[10].innerHTML = 'This field should not empty';
    p[10].style.color = 'red';
    state.style.borderColor = 'red';
  }
  else if(pincode.value === ''){
    p[11].innerHTML = 'This field should not empty';
    p[11].style.color = 'red';
    pincode.style.borderColor = 'red';
  }
  else{
    for(var i = 0; i< p.length; i++){
      p[i].innerHTML ='';
      p[i].style.color ='green';
      input[i].style.borderColor = 'green';
    }
    pvalid.innerHTML = '';
    pvalid.style.borderColor = 'green';
  }


  // cheking the backend table if the data is already present in the backend table


  // for integration to the backend database 

  if(vname.value != '' && email.value != '' &&  pwd.value != '' &&  phone.value != '' && cost.value != '' && role.value !='' && dno.value != '' && street.value != '' && landmark.value != '' && district.value != '' && state.value != '' && pincode.value != '') {
  const customer = {
    'name' : vname.value,
    'email' : email.value,
    'phone' : phone.value,
    'pwd' : pwd.value,
    'role' : role.value,
    'costPerDay' : cost.value,
    'address' : {
      'doorNo' : dno.value,
      'street' : street.value,
      'district' :district.value,
      'landmark' : landmark.value,
      'state' : state.value,
      'pincode' : pincode.value
    }
  }
  try{
    const response = await fetch("http://localhost:8080/vendor",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    });
    if(response.ok){
      const data = await response.json();
      console.log(data);
      window.alert("Congratulations you have successfully created a new customer Account 🥳🥳🥳");

      function o() {
        open(URL="./vendorsignin.html","_self");
      }
      o(); 
    }
    
    if (response.status >= 400) {
      window.alert("Youre Already Registered Here Please Try To Login 😕😕😕");
      for(var i = 0; i< input.length; i++){
        input[i].style.borderColor = 'red';
      }
      // throw new Error("Youre Already Registered Here Please Try To Login 😕😕😕");
      
      
    }
    else{
      for(var i = 0; i< p.length; i++){
        input[i].style.borderColor = 'green';
      }
    }

    vname.value = '';
    email.value = '';
    phone.value = '';
    pwd.value = '';
    cost.value = '';
    role.value = '';
    dno.value = '';
    street.value = '';
    landmark.value = '';
    district.value = '';
    state.value = '';
    pincode.value = '';
    for(var i = 0; i< p.length; i++){
      input[i].style.borderColor = 'none';
    }

  }
  catch(error){
    console.error("error", error);
    window.alert("error", error);
  }
  }
  else {
    window.alert("Please enter valid details");
  }
},false);
function check(){
let upper = /[A-Z]/ ;
let lower = /[a-z]/;
let num = /[0-9]/;
let spc = /[(?=.*-\/:-@\[-\`{-~]/;

let regx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

let p = document.getElementsByTagName('p');

  if(vname.value !== ''){
    p[0].innerHTML = '';
    vname.style.borderColor = 'green';
  }
  if(email.value !== ''){
    p[1].innerHTML = '';
    email.style.borderColor = 'green';
  }

  pwd.addEventListener('keyup',()=>{
    if(upper.test(pwd.value) === true && lower.test(pwd.value) === true && num.test(pwd.value) === true && spc.test(pwd.value) === true){
      p[2].innerHTML='';
      pwd.style.borderColor = 'green';
    }

  })
  if(phone.value !== ''){
    p[3].innerHTML = '';
    phone.style.borderColor = 'green';
  }
  if(role.value !== ''){
    p[4].innerHTML = '';
    role.style.borderColor = 'green';
  }
  if(cost.value !== ''){
    p[5].innerHTML = '';
    cost.style.borderColor = 'green';
  }
  if(dno.value !== ''){
    p[6].innerHTML = '';
    dno.style.borderColor = 'green';
  }
  if(street.value !== ''){
    p[7].innerHTML = '';
    street.style.borderColor = 'green';
  }
  if(landmark.value !== ''){
    p[8].innerHTML = '';
    landmark.style.borderColor = 'green';
  }
  if(district.value !== ''){
    p[9].innerHTML = '';
    district.style.borderColor = 'green';
  }
  if(state.value !== ''){
    p[10].innerHTML = '';
    state.style.borderColor = 'green';
  }
  if(pincode.value !== ''){
    p[11].innerHTML = '';
    pincode.style.borderColor = 'green';
  }

}