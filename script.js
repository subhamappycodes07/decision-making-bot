const introPage = document.querySelector(".intro-page"),
  inputPage = document.querySelector(".input-page"),
  outputPage = document.querySelector(".output-page"),
  alertField=document.querySelector('.alert-field');

const introInput = introPage.querySelector(".intro-page input"),
  introInputBtn = introPage.querySelector(".intro-form-btn");

const choicesInput = inputPage.querySelector(".input-body input"),
  decisionBtn = inputPage.querySelector(".input-form-btn"),
  inputPageForm = inputPage.querySelector("form");

let optionCount,choiceArr=[];

//event for create choice field.
introInputBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (introInput.value != "") {
    inputPage.classList.add("active");
    introPage.style.display = "none";
    optionCount = introInput.value;
    for (let i = 0; i < optionCount; i++) {
      inputPageForm.insertAdjacentHTML(
        "beforeend",
        `<input type="text" id='choice-${i}' placeholder="Enter choice" required/>`
      );
    }
   
  } else {
    alertField.classList.add('active')
  }
});

alertField.querySelector('span').addEventListener('click',()=>{
    alertField.classList.remove('active')
})
// event for choose the random choises
decisionBtn.addEventListener('click',()=>{
    optionCount = introInput.value;
        for(let i=0;i<optionCount;i++){
            let choice;
            choice = inputPage.querySelector(`.input-page  #choice-${i}`).value;
            choiceArr.push(choice);
        }
        introPage.style.display = "none";
        inputPage.classList.remove('active');
        outputPage.classList.add('active');
        let resultNum = Math.floor(Math.random()*optionCount);
        let result = choiceArr[resultNum];
        if(result!=""){
            outputPage.querySelector('h1').innerText=result;
        }
        else{
            outputPage.querySelector('h1').innerText='Nothing have to take decision here';
            outputPage.querySelector('h1').style.fontSize='2rem';
            outputPage.querySelector('h1').style.color='grey'
            outputPage.querySelector('.main-text').innerHTML="";
        }
        
})

// event for reload the intro page
outputPage.querySelector('.output-form-btn').addEventListener('click',()=>{
    location.reload()
})