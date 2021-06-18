var ul=document.getElementById('ul');
   var btn=document.getElementById('button');
   var scoreCard=document.getElementById('scoreCard');
   var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');
  var player=document.getElementById("audio-player");
  var timer=document.getElementById('timer');
  var kronometre=document.getElementById('kronometre');
  var zaman=document.getElementById('saniye');
 

var sayac=0;
var deger;
var saniye=10;
function saniyeDurdur()
  {
  window.clearInterval(deger);
  }
function saniyeBaslat()
{
  this.saniye --;
  if(this.saniye >=0){
    document.getElementById('saniye').innerHTML=saniye;
  }
  else{
    window.location.href="start.html";
    window.alert("Süreniz Bitti");
     
  }
}
var deger=window.setInterval('saniyeBaslat()',1000);

var sec = 0;
      function pad ( val ) { return val > 9 ? val : "0" + val; }
var func;
  

    function timerstart(){
func = setInterval( function(){
              $("#seconds").html(pad(++sec%60));
              $("#minutes").html(pad(parseInt(sec/60,10)));
          }, 1000);
}
timerstart();

          function myStopFunction() {
                  clearInterval(func);
          }
function myClearFunction(){
myStopFunction();
$("#seconds").html(pad(00));
              $("#minutes").html(pad(00));
sec = 0;
}

 while(this.saniye==0){
                  this.app.next();
                  this.app.clickAble();
              }


      var app={
                questions:[
      

                  {q:'Aşağıdakilerin hangisi UNESCO Dünya Miras Listesinde değildir?',options:['Myra Antik Kenti (Antalya)','Divriği Ulu Camii ve Darüşşifası (Sivas)','Nemrut Dağı (Adıyaman - Kahta)','Göbeklitepe Arkeolojik Alanı (Şanlıurfa)'],answer:1},
                  {q:'Yukarıdaki sahne hangi filme aittir? <br><center><video width="300" height="300"controls autoplay="true"><source src="videos/SEVEN - Final Sahnesi.mp4" type="video/mp4"></video></center>',options:['Apollo 13','Se7en ','Casino',
                  '12 Monkeys',],answer:2},
                  {q:' Görseldeki yapının adı nedir? <br><center><img src="img/DivrigiUlucami.jpg"  width="350" height="250"></center> ',options:['Bursa-Ulucami','Mardin-Ulucami','Tarsus-Ulucami','Divriği-Ulucami'],answer:4},
                  {q:'Dinlediğiniz müziği seslendirenler kimdir? <br><audio controls autoplay><source src="sound/GkSeL_-_BakSana_TaLihe_051746_23032020.mp3" type="audio/mpeg"></audio> ',options:['Göksel',
                          'Hande Yener',' Gülşen','Hadise'],answer:1 },
                   {q:'Bozkırın tezenesi lakaplı rahmetli halk ozanı kimdir?', options:['Aşık Veysel','Neşet Ertaş'],answer:2},
                   {q:'Yazın kırlarda ve ekin tarlalarında yetişen kırmızı narin çiçek hangisidir?',options:['Gelincik','Kır Çiçekleri'],answer:1},

                      ],
                index:0,

                load:function(){
                     if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                         kronometre.style.display="none"; 
                        
                         if(this.index>=4){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1]; 
                        op3.style.display="none";
                        op4.style.display="none";                
                           this.scoreCard();
                         kronometre.style.display="none"; 
                        }
                        }
                        else{

                        quizBox.innerHTML=' <center>Oyun Bitti! </center>' ;    
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        timer.style.display="none";
                        kronometre.style.display="";
                        zaman.style.display="none";
                        }
                         if(saniye==0)
                           {  
                              
                              window.clearInterval(func);
                              quizBox.innerHTML="----------Oyun Bitti!----------" ;    
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        timer.style.display="none";
                        kronometre.style.display="";   
                       
                           }

                },
                 next:function(){
                    this.index++;
                    this.load();
                    
                 },
                check:function(ele){
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                          this.score++;
                          ele.className="correct";
                          ele.innerHTML="Doğru";
                          this.scoreCard();

                         }
                         else{
                          ele.className="wrong";
                          ele.innerHTML="Yanlış";
                           document.getElementById('op' + this.questions[this.index].answer).className ="correct";
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                            ul.children[i].style.pointerEvents="none";

                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                            ul.children[i].style.pointerEvents="auto";
                            ul.children[i].className=''
                       }
                },
                score:0,
                scoreCard:function(){
                  scoreCard.innerHTML=this.questions.length+"/"+this.score;
                }
                
           }


           window.onload=app.load();

           function button(ele){
                 app.check(ele);
                 app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
              this.sayac++;
              this.saniye=10;
             
              if(sayac>5)
                      {
                            clearInterval(func);
                            window.clearInterval(deger);
                      }
         }