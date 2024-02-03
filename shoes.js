
let details = document.getElementById("details");
let page2 = document.getElementById("page2")
  let newPage= page2.innerHTML;
  let Numbere=document.getElementById("Number-pro")
  let Numbere2=document.getElementById("Number-pro2")
  let Numbere3=document.getElementById("Number-pro3")
  let Numbere4=document.getElementById("Number-pro4")
let num = 0;
var number =0;
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
var quantity = document.getElementById("quantity")
var quantity2 = document.getElementById("quantity2")
var quantity3 = document.getElementById("quantity3")
var btns = document.getElementById("btns")
// function 










function chickId(){
   // console.log(document.getElementById("idInput").value)
    let value1= document.getElementById("idInput").value;
    
    allrr.forEach(function(ele){
  if(ele.id == value1 )
  {
    
   
    document.getElementById('img').src = ele.src;
    details.innerHTML=` <p class="card-text">ID: ${ele.id}</p>
    <p class="card-text">Price: ${ele.price}</p>`;
    
  }
  
    })
}

function getSelectedColour() {
  var selectElement = document.getElementById("mySelect");
  var selectedValue = selectElement.options[selectElement.selectedIndex].value;
  num=0;
  page2.innerHTML=``;
  
  MyArray.forEach(function(ele){
    if(ele.colour == selectedValue)
    {
      num +=1;
     
      page2.innerHTML +=`
      <div class="card-trrnd shadow  mb-3 mt-2 me-3 p-0 col-lg-3 col-md-12" style="width: 22rem;">
      <img src="${ele.src}" class="card-img-top" alt="...">
      <div class="card-body mt-4 p-2">
          <div >
              <h3 class="text-uppercase fw-bold">Nike</h3> 
              <h4>${ele.colour}</h4>
              <h5 class="text-warning">${ele.price} <span class="text-dark">$</span></h5>
              <h6 class="text-decoration-line-through">1000$</h6>
           <button class="btn btn-dark " data-bs-toggle="modal" data-bs-target="#staticBackdrop">Shop Now</button>
           <i class="fa-solid fa-star  float-end text-warning"style="margin-left: ;" ></i>
           <i class="fa-solid fa-star  text-warning float-end" ></i>
           <i class="fa-solid fa-star text-warning float-end" ></i>
           <i class="fa-regular fa-star text-warning float-end" ></i>
          </div>
         
  
    </div> 
  
  
  
  </div>`
    }
    else if (selectedValue == "") {
      num =34
      page2.innerHTML=newPage;
    }
    
      })
      Numbere.innerHTML=` <h2 class="container fw-bold text-center" id="Number-pro"> ${num} PRODUCTS</h2>`
}
function getSelectedSize() {
  var selectElement = document.getElementById("mySelect-size");
  var selectedValue = selectElement.options[selectElement.selectedIndex].value;
  num=0;
  page2.innerHTML=``;
  if (selectedValue >= 30 && selectedValue <=40 )
  {
     MyArray.forEach(function(ele){
    if(ele.size >= 30 && ele.size <=40 )
    {
      num +=1;
     
      page2.innerHTML +=`
      <div class="card-trrnd shadow  mb-3 mt-2 me-3 p-0 col-lg-3 col-md-12" style="width: 22rem;">
      <img src="${ele.src}" class="card-img-top" alt="...">
      <div class="card-body mt-4 p-2">
          <div >
              <h3 class="text-uppercase fw-bold">Nike</h3> 
              <h4>${ele.colour}</h4>
              <h5 class="text-warning">${ele.price} <span class="text-dark">$</span></h5>
              <h6 class="text-decoration-line-through">1000$</h6>
           <button class="btn btn-dark " data-bs-toggle="modal" data-bs-target="#staticBackdrop">Shop Now</button>
           <i class="fa-solid fa-star  float-end text-warning"style="margin-left: ;" ></i>
           <i class="fa-solid fa-star  text-warning float-end" ></i>
           <i class="fa-solid fa-star text-warning float-end" ></i>
           <i class="fa-regular fa-star text-warning float-end" ></i>
          </div>
         
  
    </div> 
  
  
  
  </div>`
    }
  
    
      })
  }
  else if (selectedValue >40 && selectedValue <=47 )
  {
     MyArray.forEach(function(ele){
    if(ele.size >40 && ele.size <=47 )
    {
      num +=1;
     
      page2.innerHTML +=`
      <div class="card-trrnd shadow  mb-3 mt-2 me-3 p-0 col-lg-3 col-md-12" style="width: 22rem;">
      <img src="${ele.src}" class="card-img-top" alt="...">
      <div class="card-body mt-4 p-2">
          <div >
              <h3 class="text-uppercase fw-bold">Nike</h3> 
              <h4>${ele.colour}</h4>
              <h5 class="text-warning">${ele.price} <span class="text-dark">$</span></h5>
              <h6 class="text-decoration-line-through">1000$</h6>
           <button class="btn btn-dark " data-bs-toggle="modal" data-bs-target="#staticBackdrop">Shop Now</button>
           <i class="fa-solid fa-star  float-end text-warning"style="margin-left: ;" ></i>
           <i class="fa-solid fa-star  text-warning float-end" ></i>
           <i class="fa-solid fa-star text-warning float-end" ></i>
           <i class="fa-regular fa-star text-warning float-end" ></i>
          </div>
         
  
    </div> 
  
  
  
  </div>`
    }
   
    
      })
  }
  else if (selectedValue == "") {
    num =34
    page2.innerHTML=newPage;
  }
 
      Numbere.innerHTML=` <h2 class="container fw-bold text-center" id="Number-pro"> ${num} PRODUCTS</h2>`
}

function getSelectedPrice() {
  var selectElement = document.getElementById("mySelect-Price");
  var selectedValue = selectElement.options[selectElement.selectedIndex].value;
  num=0;
  page2.innerHTML=``;
  if (selectedValue ==200 )
  {
     MyArray.forEach(function(ele){
    if(ele.price >= 200 && ele.price <=400 )
    {
      num +=1;
     
      page2.innerHTML +=`
      <div class="card-trrnd shadow  mb-3 mt-2 me-3 p-0 col-lg-3 col-md-12" style="width: 22rem;">
      <img src="${ele.src}" class="card-img-top" alt="...">
      <div class="card-body mt-4 p-2">
          <div >
              <h3 class="text-uppercase fw-bold">Nike</h3> 
              <h4>${ele.colour}</h4>
              <h5 class="text-warning">${ele.price} <span class="text-dark">$</span></h5>
              <h6 class="text-decoration-line-through">1000$</h6>
           <button class="btn btn-dark " data-bs-toggle="modal" data-bs-target="#staticBackdrop">Shop Now</button>
           <i class="fa-solid fa-star  float-end text-warning"style="margin-left: ;" ></i>
           <i class="fa-solid fa-star  text-warning float-end" ></i>
           <i class="fa-solid fa-star text-warning float-end" ></i>
           <i class="fa-regular fa-star text-warning float-end" ></i>
          </div>
         
  
    </div> 
  
  
  
  </div>`
    }
  
    
      })
  }
  else if (selectedValue ==401  )
  {
     MyArray.forEach(function(ele){
    if(ele.price >400 && ele.price <=600 )
    {
      num +=1;
     
      page2.innerHTML +=`
      <div class="card-trrnd shadow  mb-3 mt-2 me-3 p-0 col-lg-3 col-md-12" style="width: 22rem;">
      <img src="${ele.src}" class="card-img-top" alt="...">
      <div class="card-body mt-4 p-2">
          <div >
              <h3 class="text-uppercase fw-bold">Nike</h3> 
              <h4>${ele.colour}</h4>
              <h5 class="text-warning">${ele.price} <span class="text-dark">$</span></h5>
              <h6 class="text-decoration-line-through">1000$</h6>
           <button class="btn btn-dark " data-bs-toggle="modal" data-bs-target="#staticBackdrop">Shop Now</button>
           <i class="fa-solid fa-star  float-end text-warning"style="margin-left: ;" ></i>
           <i class="fa-solid fa-star  text-warning float-end" ></i>
           <i class="fa-solid fa-star text-warning float-end" ></i>
           <i class="fa-regular fa-star text-warning float-end" ></i>
          </div>
         
  
    </div> 
  
  
  
  </div>`
    }
   
    
      })
  }
  else if (selectedValue == "") {
    num =34
    page2.innerHTML=newPage;
  }
 
      Numbere.innerHTML=` <h2 class="container fw-bold text-center" id="Number-pro"> ${num} PRODUCTS</h2>`
}



// for small page 
function getSelectedColour2() {
  var selectElement = document.getElementById("mySelect2");
  var selectedValue = selectElement.options[selectElement.selectedIndex].value;
  num=0;
  page2.innerHTML=``;
  MyArray.forEach(function(ele){
    if(ele.colour == selectedValue)
    {
      num +=1;
     
      page2.innerHTML +=`
      <div class="card-trrnd shadow  mb-3 mt-2 me-3 p-0 col-lg-3 col-md-12" style="width: 22rem;">
      <img src="${ele.src}" class="card-img-top" alt="...">
      <div class="card-body mt-4 p-2">
          <div >
              <h3 class="text-uppercase fw-bold">Nike</h3> 
              <h4>${ele.colour}</h4>
              <h5 class="text-warning">${ele.price} <span class="text-dark">$</span></h5>
              <h6 class="text-decoration-line-through">1000$</h6>
           <button class="btn btn-dark " data-bs-toggle="modal" data-bs-target="#staticBackdrop">Shop Now</button>
           <i class="fa-solid fa-star  float-end text-warning"style="margin-left: ;" ></i>
           <i class="fa-solid fa-star  text-warning float-end" ></i>
           <i class="fa-solid fa-star text-warning float-end" ></i>
           <i class="fa-regular fa-star text-warning float-end" ></i>
          </div>
         
  
    </div> 
  
  
  
  </div>`
    }
    else if (selectedValue == "") {
      num =34
      page2.innerHTML=newPage;
    }
    
      })
      
      Numbere2.innerHTML=` ${num} PRODUCTS`
}
function getSelectedSize2() {
  var selectElement = document.getElementById("mySelect-size2");
  var selectedValue = selectElement.options[selectElement.selectedIndex].value;
  num=0;
  page2.innerHTML=``;
  if (selectedValue >= 30 && selectedValue <=40 )
  {
     MyArray.forEach(function(ele){
    if(ele.size >= 30 && ele.size <=40 )
    {
      num +=1;
     
      page2.innerHTML +=`
      <div class="card-trrnd shadow  mb-3 mt-2 me-3 p-0 col-lg-3 col-md-12" style="width: 22rem;">
      <img src="${ele.src}" class="card-img-top" alt="...">
      <div class="card-body mt-4 p-2">
          <div >
              <h3 class="text-uppercase fw-bold">Nike</h3> 
              <h4>${ele.colour}</h4>
              <h5 class="text-warning">${ele.price} <span class="text-dark">$</span></h5>
              <h6 class="text-decoration-line-through">1000$</h6>
           <button class="btn btn-dark " data-bs-toggle="modal" data-bs-target="#staticBackdrop">Shop Now</button>
           <i class="fa-solid fa-star  float-end text-warning"style="margin-left: ;" ></i>
           <i class="fa-solid fa-star  text-warning float-end" ></i>
           <i class="fa-solid fa-star text-warning float-end" ></i>
           <i class="fa-regular fa-star text-warning float-end" ></i>
          </div>
         
  
    </div> 
  
  
  
  </div>`
    }
  
    
      })
  }
  else if (selectedValue >40 && selectedValue <=47 )
  {
     MyArray.forEach(function(ele){
    if(ele.size >40 && ele.size <=47 )
    {
      num +=1;
     
      page2.innerHTML +=`
      <div class="card-trrnd shadow  mb-3 mt-2 me-3 p-0 col-lg-3 col-md-12" style="width: 22rem;">
      <img src="${ele.src}" class="card-img-top" alt="...">
      <div class="card-body mt-4 p-2">
          <div >
              <h3 class="text-uppercase fw-bold">Nike</h3> 
              <h4>${ele.colour}</h4>
              <h5 class="text-warning">${ele.price} <span class="text-dark">$</span></h5>
              <h6 class="text-decoration-line-through">1000$</h6>
           <button class="btn btn-dark " data-bs-toggle="modal" data-bs-target="#staticBackdrop">Shop Now</button>
           <i class="fa-solid fa-star  float-end text-warning"style="margin-left: ;" ></i>
           <i class="fa-solid fa-star  text-warning float-end" ></i>
           <i class="fa-solid fa-star text-warning float-end" ></i>
           <i class="fa-regular fa-star text-warning float-end" ></i>
          </div>
         
  
    </div> 
  
  
  
  </div>`
    }
   
    
      })
  }
  else if (selectedValue == "") {
    num =34
    page2.innerHTML=newPage;
  }
 
  Numbere2.innerHTML=` ${num} PRODUCTS`
}

function getSelectedPrice2() {
  var selectElement = document.getElementById("mySelect-Price2");
  var selectedValue = selectElement.options[selectElement.selectedIndex].value;
  num=0;
  page2.innerHTML=``;
  if (selectedValue ==200 )
  {
     MyArray.forEach(function(ele){
    if(ele.price >= 200 && ele.price <=400 )
    {
      num +=1;
     
      page2.innerHTML +=`
      <div class="card-trrnd shadow  mb-3 mt-2 me-3 p-0 col-lg-3 col-md-12" style="width: 22rem;">
      <img src="${ele.src}" class="card-img-top" alt="...">
      <div class="card-body mt-4 p-2">
          <div >
              <h3 class="text-uppercase fw-bold">Nike</h3> 
              <h4>${ele.colour}</h4>
              <h5 class="text-warning">${ele.price} <span class="text-dark">$</span></h5>
              <h6 class="text-decoration-line-through">1000$</h6>
           <button class="btn btn-dark " data-bs-toggle="modal" data-bs-target="#staticBackdrop">Shop Now</button>
           <i class="fa-solid fa-star  float-end text-warning"style="margin-left: ;" ></i>
           <i class="fa-solid fa-star  text-warning float-end" ></i>
           <i class="fa-solid fa-star text-warning float-end" ></i>
           <i class="fa-regular fa-star text-warning float-end" ></i>
          </div>
         
  
    </div> 
  
  
  
  </div>`
    }
  
    
      })
  }
  else if (selectedValue ==401  )
  {
     MyArray.forEach(function(ele){
    if(ele.price >400 && ele.price <=600 )
    {
      num +=1;
     
      page2.innerHTML +=`
      <div class="card-trrnd shadow  mb-3 mt-2 me-3 p-0 col-lg-3 col-md-12" style="width: 22rem;">
      <img src="${ele.src}" class="card-img-top" alt="...">
      <div class="card-body mt-4 p-2">
          <div >
              <h3 class="text-uppercase fw-bold">Nike</h3> 
              <h4>${ele.colour}</h4>
              <h5 class="text-warning">${ele.price} <span class="text-dark">$</span></h5>
              <h6 class="text-decoration-line-through">1000$</h6>
           <button class="btn btn-dark " data-bs-toggle="modal" data-bs-target="#staticBackdrop">Shop Now</button>
           <i class="fa-solid fa-star  float-end text-warning"style="margin-left: ;" ></i>
           <i class="fa-solid fa-star  text-warning float-end" ></i>
           <i class="fa-solid fa-star text-warning float-end" ></i>
           <i class="fa-regular fa-star text-warning float-end" ></i>
          </div>
         
  
    </div> 
  
  
  
  </div>`
    }
   
    
      })
  }
  else if (selectedValue == "") {
    num =34
    page2.innerHTML=newPage;
  }
 
  Numbere2.innerHTML=` ${num} PRODUCTS`
}

function ShowAll(){
  //location.reload();
  BindTodosToDom2(MyArray)
  //Numbere.innerHTML=`${numOfchart} Product`;
}

function AddProduct(){
  number+=1;
    BindTodosToDom(MyArray)
  
}
function removeProduct(){
  page2.innerHTML="";
  for (let i =0 ; i < number;i++)
  { console.log(number)
     BindTodosToDom2(MyArray)
     number=0;
  }
 

}


let arr = [];
let numOfchart =0;


function addChart(value){
    MyArray.forEach(function(ele){
        if (ele.id==value)
        {
          
            arr.push(ele);
            numOfchart +=1;
            quantity.innerHTML=`${numOfchart}`
            
            quantity2.innerHTML=`${numOfchart}`
        }
       
})
}
function bind(){
    if (numOfchart==0)
    {
        Numbere.innerHTML=`0 Product`
        Numbere2.innerHTML=`0 Product`
        page2.innerHTML=`<div class="text-center">
        <h3>Your cart is empty</h3>
        <h4>Be sure to fill cart with something you like </h4>
      </div>`
      btns.innerHTML=`<button class="btn btn-dark mt-2 border-2 col-lg-3 col-md-6 col-sm-12 me-2  border-black " onclick="ShowAll()"  >Add All 34 Product</button>`
    }
else{
     BindTodosToDom1 (arr);
}
   
}


const createTodoLI = (ele) => `<div class="card-trrnd shadow  mb-3 mt-2 me-3 p-0 col-lg-3 col-md-12" style="width: 22rem;">
<img src="${ele.src}" class="card-img-top" alt="...">
<div class="card-body mt-4 p-2">
    <div >
        <h3 class="text-uppercase fw-bold">Nike</h3> 
        <h4>${ele.colour}</h4>
        <h5 class="text-warning">${ele.price} <span class="text-dark">$</span></h5>
        <h6 class="text-decoration-line-through">1000$</h6>
        <button class="btn btn-dark " onclick="addChart(${ele.id})" >Add To Cart</button>
     <i class="fa-solid fa-star  float-end text-warning"style="margin-left: ;" ></i>
     <i class="fa-solid fa-star  text-warning float-end" ></i>
     <i class="fa-solid fa-star text-warning float-end" ></i>
     <i class="fa-regular fa-star text-warning float-end" ></i>
    </div>
   

</div> 



</div>`;




const BindTodosToDom1 = (arr) => {
    Numbere.innerHTML=`${numOfchart} Product`
    Numbere2.innerHTML=`${numOfchart} Product`
    
    page2.innerHTML = arr.map(createTodoLI).join("");
    btns.innerHTML=`  <button class="btn btn-dark mt-2 border-2 col-lg-3 col-md-6 col-sm-12 me-2  border-black " onclick="ShowAll()"  >Add All 34 Product</button>`
  
};
const BindTodosToDom = (arr) => {
    page2.innerHTML += arr.map(createTodoLI).join("");
  
};
const BindTodosToDom2= (arr) => {
  
    page2.innerHTML = arr.map(createTodoLI).join("");
    btns.innerHTML=` <button class="btn border-2  col-lg-3 mt-2 col-md-6 col-sm-12  me-2 border-black " onclick="AddProduct()">Add 8 Product</button>
    <button class="btn btn-dark mt-2 border-2 col-lg-3 col-md-6 col-sm-12 me-2  border-black " onclick="ShowAll()"  >Add All 34 Product</button>
    <button class="btn border-2 me-2 mt-2  col-lg-3 col-md-6 col-sm-12 border-black " onclick="removeProduct()" >Previous 8 Product</button>`
    Numbere.innerHTML=`34 Product`
    Numbere2.innerHTML=`34 Product`
};





