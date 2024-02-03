
 
 function getSelectedColour5() {
    var selectElement5= document.getElementById("mySelect5");
    var selectedValue = selectElement5.options[selectElement5.selectedIndex].value;
    num=0;
    page2.innerHTML=``;
    
     shirtArr.forEach(function(ele){
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
              <button class="btn btn-dark " onclick="addChart3(${ele.id})" >Add To Cart</button>
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
  function getSelectedSize5() {
    var selectElement5= document.getElementById("mySelect-size5");
    var selectedValue = selectElement5.options[selectElement5.selectedIndex].value;
    num=0;
    page2.innerHTML=``;
    
    if (selectedValue =="xl" )
    {
        shirtArr.forEach(function(ele){
      if(ele.size =="xl" )
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
              <button class="btn btn-dark " onclick="addChart3(${ele.id})" >Add To Cart</button>
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
    else if (selectedValue =="xxl" )
    {
        shirtArr.forEach(function(ele){
      if(ele.size == "xxl")
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
              <button class="btn btn-dark " onclick="addChart3(${ele.id})" >Add To Cart</button>
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
    Numbere4.innerHTML=` ${num} PRODUCTS`
      }
      
    
         
    
   
   
   
    
  
  
  function getSelectedPrice5() {
    var selectElement5 = document.getElementById("mySelect-Price5");
    var selectedValue = selectElement5.options[selectElement5.selectedIndex].value;
    num=0;
    page2.innerHTML=``;
    if (selectedValue ==200 )
    {
        shirtArr.forEach(function(ele){
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
                <button class="btn btn-dark " onclick="addChart3(${ele.id})" >Add To Cart</button>
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
        shirtArr.forEach(function(ele){
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
                <button class="btn btn-dark " onclick="addChart3(${ele.id})" >Add To Cart</button>
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
   
        Numbere.innerHTML=`${num} PRODUCTS`
  }
  
  
  
  // for small page 
  function getSelectedColour6() {
    var selectElement6 = document.getElementById("mySelect6");
    var selectedValue = selectElement6.options[selectElement6.selectedIndex].value;
    num=0;
    page2.innerHTML=``;
     shirtArr.forEach(function(ele){
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
                <button class="btn btn-dark " onclick="addChart3(${ele.id})" >Add To Cart</button>
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
        Numbere4.innerHTML=` ${num} PRODUCTS`
  }
  function getSelectedSize6() {
    var selectElement6 = document.getElementById("mySelect-size6");
    var selectedValue = selectElement6.options[selectElement6.selectedIndex].value;
    num=0;
    page2.innerHTML=``;
    if (selectedValue =="xl" )
    {
        shirtArr.forEach(function(ele){
      if(ele.size =="xl" )
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
              <button class="btn btn-dark " onclick="addChart3(${ele.id})" >Add To Cart</button>
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
    else if (selectedValue =="xxl" )
    {
        shirtArr.forEach(function(ele){
      if(ele.size == "xxl")
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
              <button class="btn btn-dark " onclick="addChart3(${ele.id})" >Add To Cart</button>
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
    Numbere4.innerHTML=` ${num} PRODUCTS`
  }
  
  function getSelectedPrice6() {
    var selectElement6= document.getElementById("mySelect-Price6");
    var selectedValue = selectElement6.options[selectElement6.selectedIndex].value;
    num=0;
    page2.innerHTML=``;
    if (selectedValue ==200 )
    {
        shirtArr.forEach(function(ele){
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
              <button class="btn btn-dark " onclick="addChart3(${ele.id})" >Add To Cart</button>
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
        shirtArr.forEach(function(ele){
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
              <button class="btn btn-dark " onclick="addChart3(${ele.id})" >Add To Cart</button>
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
   
    Numbere4.innerHTML=` ${num} PRODUCTS`
  }
 
  function AddProduct3(){
     number+=1;
       BindTodosToDom( shirtArr)
     
   }
   function removeProduct3(){
     page2.innerHTML="";
     for (let i =0 ; i < number;i++)
     { console.log(number)
        BindTodosToDom2( shirtArr)
        number=0;
     }
    
   
   }
   
   
 function addChart3(value){
      shirtArr.forEach(function(ele){
         if (ele.id==value)
         {
             console.log(value)
             console.log("ok")
             arr.push(ele);
             numOfchart +=1;
             quantity.innerHTML=`${numOfchart}`
             
          
             quantity3.innerHTML=`${numOfchart}`
         }
        
 })}
 function bind3(){
     if (numOfchart==0)
     {
         Numbere.innerHTML=`0 Product`
         Numbere4.innerHTML=`0 Product`
         page2.innerHTML=`<div class="text-center">
         <h3>Your cart is empty</h3>
         <h4>Be sure to fill cart with something you like </h4>
       </div>`
       btns.innerHTML=`<button class="btn btn-dark mt-2 border-2 col-lg-3 col-md-6 col-sm-12 me-2  border-black " onclick="ShowAll3()"  >Add All 34 Product</button>`
     }
 else{
      BindTodosToDom7 (arr);
 }
    
 }
 
 const BindTodosToDom7 = (arr) => {
     Numbere.innerHTML=`${numOfchart} Product`
     Numbere4.innerHTML=`${numOfchart} Product`
     
     page2.innerHTML = arr.map(createTodoLI).join("");
     btns.innerHTML=`  <button class="btn btn-dark mt-2 border-2 col-lg-3 col-md-6 col-sm-12 me-2  border-black " onclick="ShowAll3()"  >Add All 34 Product</button>`
   
 };
 
 
 
 
 
 function ShowAll3(){
     
     BindTodosToDom6( shirtArr)
 
   }
 
 
   const BindTodosToDom6= (arr) => {
   
     page2.innerHTML = arr.map(createTodoLI3).join("");
     btns.innerHTML=` <button class="btn border-2  col-lg-3 mt-2 col-md-6 col-sm-12  me-2 border-black " onclick="AddProduct3()">Add 8 Product</button>
     <button class="btn btn-dark mt-2 border-2 col-lg-3 col-md-6 col-sm-12 me-2  border-black " onclick="ShowAll3()"  >Add All 34 Product</button>
     <button class="btn border-2 me-2 mt-2  col-lg-3 col-md-6 col-sm-12 border-black " onclick="removeProduct3()" >Previous 8 Product</button>`
     Numbere.innerHTML=`34 Product`
     Numbere4.innerHTML=`34 Product`
 };
 
 
 
 
   const createTodoLI3 = (ele) => `<div class="card-trrnd shadow  mb-3 mt-2 me-3 p-0 col-lg-3 col-md-12" style="width: 22rem;">
 <img src="${ele.src}" class="card-img-top" alt="...">
 <div class="card-body mt-4 p-2">
     <div >
         <h3 class="text-uppercase fw-bold">Nike</h3> 
         <h4>${ele.colour}</h4>
         <h5 class="text-warning">${ele.price} <span class="text-dark">$</span></h5>
         <h6 class="text-decoration-line-through">1000$</h6>
         <button class="btn btn-dark " onclick="addChart3(${ele.id})" >Add To Cart</button>
      <i class="fa-solid fa-star  float-end text-warning"style="margin-left: ;" ></i>
      <i class="fa-solid fa-star  text-warning float-end" ></i>
      <i class="fa-solid fa-star text-warning float-end" ></i>
      <i class="fa-regular fa-star text-warning float-end" ></i>
     </div>
    
 
 </div> 
 
 
 
 </div>`;