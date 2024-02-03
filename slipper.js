
 
 function getSelectedColour3() {
   var selectElement3 = document.getElementById("mySelect3");
   var selectedValue = selectElement3.options[selectElement3.selectedIndex].value;
   num=0;
   page2.innerHTML=``;
   
   slipperArr.forEach(function(ele){
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
            <button class="btn btn-dark " onclick="addChart2(${ele.id})" >Add To Cart</button>
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
 function getSelectedSize3() {
   var selectElement3 = document.getElementById("mySelect-size3");
   var selectedValue = selectElement3.options[selectElement3.selectedIndex].value;
   num=0;
   page2.innerHTML=``;
   if (selectedValue >= 30 && selectedValue <=40 )
   {
      slipperArr.forEach(function(ele){
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
            <button class="btn btn-dark " onclick="addChart2(${ele.id})" >Add To Cart</button>
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
      slipperArr.forEach(function(ele){
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
            <button class="btn btn-dark " onclick="addChart2(${ele.id})" >Add To Cart</button>
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
 
 function getSelectedPrice3() {
   var selectElement3 = document.getElementById("mySelect-Price3");
   var selectedValue = selectElement3.options[selectElement3.selectedIndex].value;
   num=0;
   page2.innerHTML=``;
   if (selectedValue ==200 )
   {
      slipperArr.forEach(function(ele){
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
            <button class="btn btn-dark " onclick="addChart2(${ele.id})" >Add To Cart</button>
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
      slipperArr.forEach(function(ele){
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
            <button class="btn btn-dark " onclick="addChart2(${ele.id})" >Add To Cart</button>
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
 function getSelectedColour4() {
   var selectElement4 = document.getElementById("mySelect4");
   var selectedValue = selectElement4.options[selectElement4.selectedIndex].value;
   num=0;
   page2.innerHTML=``;
   slipperArr.forEach(function(ele){
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
            <button class="btn btn-dark " onclick="addChart2(${ele.id})" >Add To Cart</button>
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
       Numbere3.innerHTML=` ${num} PRODUCTS`
 }
 function getSelectedSize4() {
   var selectElement4 = document.getElementById("mySelect-size4");
   var selectedValue = selectElement4.options[selectElement4.selectedIndex].value;
   num=0;
   page2.innerHTML=``;
   if (selectedValue >= 30 && selectedValue <=40 )
   {
      slipperArr.forEach(function(ele){
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
            <button class="btn btn-dark " onclick="addChart2(${ele.id})" >Add To Cart</button>
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
      slipperArr.forEach(function(ele){
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
            <button class="btn btn-dark " onclick="addChart2(${ele.id})" >Add To Cart</button>
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
   Numbere3.innerHTML=` ${num} PRODUCTS`
 }
 
 function getSelectedPrice4() {
   var selectElement4= document.getElementById("mySelect-Price4");
   var selectedValue = selectElement4.options[selectElement4.selectedIndex].value;
   num=0;
   page2.innerHTML=``;
   if (selectedValue ==200 )
   {
      slipperArr.forEach(function(ele){
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
            <button class="btn btn-dark " onclick="addChart2(${ele.id})" >Add To Cart</button>
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
      slipperArr.forEach(function(ele){
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
            <button class="btn btn-dark " onclick="addChart2(${ele.id})" >Add To Cart</button>
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
  
   Numbere3.innerHTML=` ${num} PRODUCTS`
 }

 function AddProduct2(){
    number+=1;
      BindTodosToDom(slipperArr)
    
  }
  function removeProduct2(){
    page2.innerHTML="";
    for (let i =0 ; i < number;i++)
    { console.log(number)
       BindTodosToDom2(slipperArr)
       number=0;
    }
   
  
  }
  
  
function addChart2(value){
    slipperArr.forEach(function(ele){
        if (ele.id==value)
        {
            console.log(value)
            console.log("ok")
            arr.push(ele);
            numOfchart +=1;
            quantity.innerHTML=`${numOfchart}`
            
            quantity2.innerHTML=`${numOfchart}`
        }
       
})}
function bind2(){
    if (numOfchart==0)
    {
        Numbere.innerHTML=`0 Product`
        Numbere3.innerHTML=`0 Product`
        page2.innerHTML=`<div class="text-center">
        <h3>Your cart is empty</h3>
        <h4>Be sure to fill cart with something you like </h4>
      </div>`
      btns.innerHTML=`<button class="btn btn-dark mt-2 border-2 col-lg-3 col-md-6 col-sm-12 me-2  border-black " onclick="ShowAll2()"  >Add All 34 Product</button>`
    }
else{
     BindTodosToDom4 (arr);
}
   
}

const BindTodosToDom4 = (arr) => {
    Numbere.innerHTML=`${numOfchart} Product`
    Numbere3.innerHTML=`${numOfchart} Product`
    
    page2.innerHTML = arr.map(createTodoLI).join("");
    btns.innerHTML=`  <button class="btn btn-dark mt-2 border-2 col-lg-3 col-md-6 col-sm-12 me-2  border-black " onclick="ShowAll2()"  >Add All 34 Product</button>`
  
};





function ShowAll2(){
    
    BindTodosToDom5(slipperArr)

  }


  const BindTodosToDom5= (arr) => {
  
    page2.innerHTML = arr.map(createTodoLI2).join("");
    btns.innerHTML=` <button class="btn border-2  col-lg-3 mt-2 col-md-6 col-sm-12  me-2 border-black " onclick="AddProduct2()">Add 8 Product</button>
    <button class="btn btn-dark mt-2 border-2 col-lg-3 col-md-6 col-sm-12 me-2  border-black " onclick="ShowAll2()"  >Add All 34 Product</button>
    <button class="btn border-2 me-2 mt-2  col-lg-3 col-md-6 col-sm-12 border-black " onclick="removeProduct2()" >Previous 8 Product</button>`
    Numbere.innerHTML=`34 Product`
    Numbere3.innerHTML=`34 Product`
};




  const createTodoLI2 = (ele) => `<div class="card-trrnd shadow  mb-3 mt-2 me-3 p-0 col-lg-3 col-md-12" style="width: 22rem;">
<img src="${ele.src}" class="card-img-top" alt="...">
<div class="card-body mt-4 p-2">
    <div >
        <h3 class="text-uppercase fw-bold">Nike</h3> 
        <h4>${ele.colour}</h4>
        <h5 class="text-warning">${ele.price} <span class="text-dark">$</span></h5>
        <h6 class="text-decoration-line-through">1000$</h6>
        <button class="btn btn-dark " onclick="addChart2(${ele.id})" >Add To Cart</button>
     <i class="fa-solid fa-star  float-end text-warning"style="margin-left: ;" ></i>
     <i class="fa-solid fa-star  text-warning float-end" ></i>
     <i class="fa-solid fa-star text-warning float-end" ></i>
     <i class="fa-regular fa-star text-warning float-end" ></i>
    </div>
   

</div> 



</div>`;