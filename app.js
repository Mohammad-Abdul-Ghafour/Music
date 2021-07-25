var name = prompt("What is your name")

alert("Wlecome to World of Music " + name)




// for (let i = 0; i < 2; i++){
// var fovInstrument = prompt("What is my favorite instrument? \n 1.Guitar \n 2.Piano \n 3.Flute")
// fovInstrument=fovInstrument.toLowerCase()
// if (fovInstrument == "guitar"){
//   alert("Oooh, you got me")
//   i = 2
// }
// else if (i == 1){
//   alert("the correct answer is guitar")

// }
// else if(fovInstrument != "guitar"){
//   alert("oops,try to guess again")

// }
// }

var fovInstrument = prompt("What is my favorite instrument? \n 1.Guitar \n 2.Piano \n 3.Flute")
while(fovInstrument != "guitar"){
  alert("oops,try to guess again")
  fovInstrument = prompt("What is my favorite instrument? \n 1.Guitar \n 2.Piano \n 3.Flute")
}



function favMusicFun (){

var r = confirm("Do you love Music " + name)
if (r == true) {
  var favMusic = prompt("What is you favorite music type?")
  // if (favMusic!= null){
//  favMusic = favMusic.toLowerCase()
  if (favMusic == "arabic") {
    alert("We have the perfect selection for you")
    document.write("<section class='col'>" + "<div class='col1'>"+"<h4>Arabic Selection</h4>"+"</div>" + "<div class='col1'>"+"<img src='https://image.winudf.com/v2/image/Y29tLmFyYWJtdXNpYy5zdHVkaW9zYXR1X3NjcmVlbl8wXzQwMzVzaHhq/screen-0.jpg?fakeurl=1&type=.jpg' alt='Arabic Selection' width='300' height='300' title='Arabic Selection''>"+"</div>"+"</section>")
  }
  else if (favMusic == "english") {
    alert("We have the perfect selection for you")
    document.write("<section class='col'>" + "<div class='col1'>"+"<h4>English Selection</h4>"+"</div>" + "<div class='col1'>"+"<img src='https://icon-library.com/images/english-icon-png/english-icon-png-15.jpg' alt='English Selection' width='300' height='300' title='English Selection''>"+"</div>"+"</section>")
  }
  else if (favMusic == "global") {
    alert("We have the perfect selection for you")
    document.write("<section class='col'>" + "<div class='col1'>"+"<h4>Global Selection</h4>"+"</div>"+"<div class='col1'>"+"<img src='https://i1.sndcdn.com/avatars-000207568864-z2nrm4-t500x500.jpg' alt='Global Selection' width='300' height='300' title='Global Selection''>"+"</div>"+"</section>")
  }
  else {
    alert("you can check our selections")
    document.write("<section class='col'>" + "<div class='col1'>"+"<h4>Arabic Selection</h4>"+"<h4>Global Selection</h4>"+"<h4>English Selection</h4>"+"<img src='https://image.winudf.com/v2/image/Y29tLmFyYWJtdXNpYy5zdHVkaW9zYXR1X3NjcmVlbl8wXzQwMzVzaHhq/screen-0.jpg?fakeurl=1&type=.jpg' alt='Arabic Selection' width='300' height='300' title='Arabic Selection''>"+"<img src='https://i1.sndcdn.com/avatars-000207568864-z2nrm4-t500x500.jpg' alt='Global Selection' width='300' height='300' title='Global Selection''>"+"<img src='https://icon-library.com/images/english-icon-png/english-icon-png-15.jpg' alt='English Selection' width='300' height='300' title='English Selection''>"+"</div>"+"</section>"
    )

  }

} else {
  alert("We are sorry to hear that, but check our website you may change your mind ")
}}
favMusicFun ();
  // }

 
// console.log('test')
function rateUs (){
document.write("<script>var rate = prompt('Rate our website from 1 to 5');document.write('<section class="+"col"+"><div class="+"col1"+"><h4>'+rate+' out of 5 </h4></div></section>')</script><section class="+"col"+"><div class="+"col1"+"><script>for (let i1 = 0; i1<rate;i1++){document.write('<img src="+"https://starpng.com/public/uploads/preview/golden-star-png-21573888480jsiv6fmfyj.png"+" alt="+"Global Selection"+" width="+"300"+" height="+"300"+" title="+"Global Selection"+">')}</script></div></section>")}
rateUs ();