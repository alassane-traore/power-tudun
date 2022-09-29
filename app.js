const button = document.getElementById('btn');
const doggy = document.getElementById('img')
const buttonFather = document.getElementById('forbut');
const doggywords = document.getElementById('doggysays');
const inputForm = document.getElementById('forInput')
const input = document.getElementById('rsp')
const submition = document.getElementById('submit');

const commentLabel = document.getElementById('com')
const comment = document.getElementById('func');
const submitComment = document.getElementById('subfunc');
const commentForm = document.getElementById('comment');



button.addEventListener('click',function  (){
doggy.src='./doogy/coder-dog.png';
buttonFather.innerHTML = '';
inputForm.style.visibility = 'visible'
let doggycomments = document.createElement('li');
doggywords.appendChild(doggycomments);
new Typewriter (doggycomments,{
    
})
.typeString ('Salut, c\’est Túdùn! <br>')
.pauseFor (1500)
.changeDelay(35) 
.typeString(' Avez vous besoin d\'un site et ou une web App? <br>')
.pauseFor(1500)
.typeString(' Je suis là pour vite aird!')
.deleteChars(11)
.typeString(' vous aider à le notifier à mon concept ! <br>')
.deleteChars(16)
.typeString('à mon concepteur ! <br>')

.typeString(' Veuillez saisir votre nom pour commencer! <br>')
//.typeString('Je refuse les espaces ! <br>')
.typeString('Ecrivez donc votre nom comme <br> par exemple:Alassane TRAORE ')
//.typeString('<form id = "forInput" style = "visibility : visible"> </form> ')
//.typeString("<input id ='rsp' type ='text' >")
//.typeString("<input id ='submit'  type = 'submit'>")
.start();


})





submition.addEventListener('click',function(event){
      
    event.preventDefault();
    
  
    
    
        //console.log(input.value);
        let respones = document.createElement ('li')
        respones.id = 'needs'
        doggywords.appendChild(respones) 
        respones.style.marginLeft = '0%' 
        let newdoggywords = document.createElement ('li')
      doggywords.appendChild(newdoggywords);
      //function conditions(){
        let noGo = "/" || "#" || "@"||"$"|| "1"||"2"||"3"||"4"||"5"||"6"||"7"||"8"||"9" //"/#@$123456789"
        
       switch(input.value) {
       case '':
      new Typewriter(newdoggywords,{
    
          })
      .typeString('Avant de vous aider, je dois connaitre votre nom!')
      .start();
      break;
      
      case  noGo :

            new Typewriter(newdoggywords,{
      
            })
            .typeString(`les ${input} sont interdits !`)
            .start();
            break;
case input.value: //!noGo ://("/" || "#" || "@"||"$"|| "1"||"2"||"3"||"4"||"5"||"6"||"7"||"8"||"9"): //"/#@$123456789" 
           
        respones.innerHTML = input.value
        new Typewriter(newdoggywords,{

        })
        .typeString (`Salut, ${input.value} ! <br>`)
        .typeString('Veuillez énumérer toutes les fonctionalités <br> que vous voudriez avoir <br>')
        .deleteChars(24)
        .typeString('que vous voudriez avoir dans votre application <br>')
        .pauseFor(1500)
        .typeString('completez tout simplement la phrase suivante : <br>')
        .pauseFor(1500)
        .typeString('le "USER" peut ... <br>')
        .typeString('une seule fonctionalité par commentaire <br> au  cas où vous manqueriez d\’idées pour debuter <br>')
        .typeString('vous pouvez aussi cliquez   <br>')
        .typeString(' le bouton des "Idées" en bas pour discutez en live <br> avec d\’autres personnes <br>')
        .typeString('le "USER" peut ...')
  
        .start()
        
        //input.value = ''
        inputForm.style.visibility = 'hidden'
        commentForm.style.visibility = 'visible'
        break
        
  }} );

      
      


submitComment.addEventListener('click', function(e){
e.preventDefault();

let newRespones = document.createElement ('li')
     newRespones.id = 'needs'
    document.getElementById("client").appendChild(newRespones)
    newRespones.innerHTML = `Le USER peut ${comment.value}.`

   //let comhid = comment.value;
   
   comment.value = ''
})


      
      
        


function direct (){
    //let val = comment.value
    //String(val)
    //if (String(val).length >= 5){
        let newRespones = document.createElement ('li')
     newRespones.id = 'responses'
    doggywords.appendChild(newRespones)
    newRespones.innerHTML = `Mon concepteur Alassane TRAORE travaillera à ce que vous et autres USERS puissiez  ${comment.value}.`
    }
//}

//Mon concepteur Alassane TRAORE travaillera à ce que vous et autres USERS puissiez ${comment.value}.`


input.addEventListener('input',function(e){
    const submition = document.getElementById('submit');
    if (String(input.value).includes ("/" )
    || String(input.value).includes("#")
    || String(input.value).includes ("@") 
    ||String(input.value).includes("$")
    ||String(input.value).includes(",")
    ||String(input.value).includes(".")
    ||String(input.value).includes("-")
    ||String(input.value).includes('+')
    ||String(input.value).includes("_")
    ||String(input.value).includes("!")
    //||String(input.value).includes(" ")
    ||String(input.value).includes("*")
    ||String(input.value).includes("<")
    ||String(input.value).includes(">")
    ||String(input.value).includes("0")
    || String(input.value).includes ("1")
    || String(input.value).includes("2")
    || String(input.value).includes("3")
    ||String(input.value).includes("4")
    ||String(input.value).includes("5")
    ||String(input.value).includes("6")
    ||String(input.value).includes("7")
    ||String(input.value).includes("8")
    ||String(input.value).includes("9")=== true){
        e.preventDefault()
       // alert('no!')
       submition.style.visibility = this.hidden;
       let newdoggywords = document.createElement ('li')
      doggywords.appendChild(newdoggywords);
      new Typewriter(newdoggywords,{

      })
      .typeString(`Les "${input.value}" sont interdits !`)
      .start()
      newdoggywords.style.color = "red"
       input.value = '';
    }
})
