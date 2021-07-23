var name = prompt("What is your name")
// console.log(name)
alert("Wlecome to World of Music " + name)




var r = confirm("Do you love Music" + name)
if (r == true) {
  var favMusic = prompt("What is you favorite music type?")
  favMusic = favMusic.toLowerCase()
  if (favMusic == "arabic") {
    alert("We have the perfect selection for you")
    document.write("<section class='col'>" + "<div>"+"<h4>Arabic Selection</h4>"+"<img src='https://image.winudf.com/v2/image/Y29tLmFyYWJtdXNpYy5zdHVkaW9zYXR1X3NjcmVlbl8wXzQwMzVzaHhq/screen-0.jpg?fakeurl=1&type=.jpg' alt='Arabic Selection' width='300' height='300' title='Arabic Selection''>"+"</div>"+"</section>")
  }
  else if (favMusic == "english") {
    alert("We have the perfect selection for you")
    document.write("<section class='col'>" + "<div>"+"<h4>English Selection</h4>"+"<img src='https://icon-library.com/images/english-icon-png/english-icon-png-15.jpg' alt='English Selection' width='300' height='300' title='English Selection''>"+"</div>"+"</section>")
  }
  else if (favMusic == "global") {
    alert("We have the perfect selection for you")
    document.write("<section class='col'>" + "<div>"+"<h4>Global Selection</h4>"+"<img src='https://i1.sndcdn.com/avatars-000207568864-z2nrm4-t500x500.jpg' alt='Global Selection' width='300' height='300' title='Global Selection''>"+"</div>"+"</section>")

  }
  else {
    alert("you can check our selections")
    document.write("<section class='col'>" + "<div class='col1'>"+"<h4>Arabic Selection</h4>"+"<h4>Global Selection</h4>"+"<h4>English Selection</h4>"+"<img src='https://image.winudf.com/v2/image/Y29tLmFyYWJtdXNpYy5zdHVkaW9zYXR1X3NjcmVlbl8wXzQwMzVzaHhq/screen-0.jpg?fakeurl=1&type=.jpg' alt='Arabic Selection' width='300' height='300' title='Arabic Selection''>"+"<img src='https://i1.sndcdn.com/avatars-000207568864-z2nrm4-t500x500.jpg' alt='Global Selection' width='300' height='300' title='Global Selection''>"+"<img src='https://icon-library.com/images/english-icon-png/english-icon-png-15.jpg' alt='English Selection' width='300' height='300' title='English Selection''>"+"</div>"+"</section>"
    )

    // document.write(
    //   "<div>" + "<h3>Arabic Selection</h3>"
    //   + "<img  src='https://image.winudf.com/v2/image/Y29tLmFyYWJtdXNpYy5zdHVkaW9zYXR1X3NjcmVlbl8wXzQwMzVzaHhq/screen-0.jpg?fakeurl=1&type=.jpg' width='300' height='300' title='Arabic Selection'     />" + "</div>")

    // document.write(
    //   "<div>" + "<h3>English Selection</h3>"
    //   + "<img  src='https://icon-library.com/images/english-icon-png/english-icon-png-15.jpg' width='300' height='300' title='English Selection'     />" + "</div>")

    // document.write(
    //   "<div>" + "<h3>Global Selection</h3>"
    //   + "<img  src='https://i1.sndcdn.com/avatars-000207568864-z2nrm4-t500x500.jpg' width='300' height='300' title='Global Selection'     />" + "</div>")


  }

} else {
  alert("We are sorry to hear that, but check our website you may change your mind ")
}








