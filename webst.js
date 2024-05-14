  /*slide navbar-js*/

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  /*review-js*/

  var counter = 0;
  var imgar = ['tabassum.jpeg','jenny.jpeg','selina.jpeg'];
  var nametitle = ['t','j','s'];
  var discription = ['tabassum','jenny','selina'];
  var designation = ['web', 'ux', 'design'];

  function cngimg(){
      counter = (counter + 1) % imgar.length;
      document.getElementById('pdiv').style.backgroundImage = 'url('+imgar[counter]+')';
      visibilityopenhide();
  }

  function cngbackimg(){
      counter = (counter - 1 + imgar.length) % imgar.length;
      document.getElementById('pdiv').style.backgroundImage = 'url('+imgar[counter]+')';
      visibilityopenhide();
  }

 

  function visibilityopenhide(){
      for(var i = 0; i  < nametitle.length; i++)
      {
          if(i === counter)
          {
              document.getElementById(nametitle[i]).classList.remove('hdn');
              document.getElementById(discription[i]).classList.remove('hdn');
              document.getElementById(designation[i]).classList.remove('hdn');
          }
          else{
              document.getElementById(nametitle[i]).classList.add('hdn');
              document.getElementById(discription[i]).classList.add('hdn');
              document.getElementById(designation[i]).classList.add('hdn');
              
          }
      }
  }

  function scrlvw(){
    var x = document.getElementById('blga');
    x.scrollIntoView();
  }