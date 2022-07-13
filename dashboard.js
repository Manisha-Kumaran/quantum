//alert dropdown
function alert() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onmouseover = function(event) {
    if (!event.target.matches('.dropbtn1')) {
      var dropdowns = document.getElementsByClassName("dropdown-content1");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  //announcement dropdown
  function announcement() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onmouseover = function(event) {
    if (!event.target.matches('.dropbtn2')) {
      var dropdowns = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  //menu dropdown
  function hamburger() {
    document.getElementById("myDropdown4").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onmouseover = function(event) {
    if (!event.target.matches('.dropbtn4')) {
      var dropdowns = document.getElementsByClassName("dropdown-content4");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



//data for dashboard cards
  const dashData = [
    {
        photo: "images/imageMask.png",
        chapter: "Acceleration",
        subject: "Physics",
        grade: "Grade 7",
        plus: "+2",
        units:"4",
        lessons:"18",
        topics:"24",
        prof: "Mr. Frank's class B",
        students: "50 Students",
        dateFrom: "21-Jan-2020",
        dateTo: "21-Aug-2020"
    },
    {
        photo: "images/imageMask-1.png",
        chapter: "Displacement, Velocity<br> and Speed",
        subject: "Physics 2",
        grade: "Grade 6",
        plus: "+3",
        units:"2",
        lessons:"15",
        topics:"20",
        prof: "No Classes",
        students: "",
        dateFrom: "",
        dateTo: ""
    },
    {
        photo: "images/imageMask-3.png",
        chapter: "Introduction to Biology: Micro organisms and how they affec...",
        subject: "Biology",
        grade: "Grade 4",
        plus: "+1",
        units:"5",
        lessons:"16",
        topics:"22",
        prof: "All Classes",
        students: "300 Students",
        dateFrom: "",
        dateTo: ""
    },
    {
        photo: "images/imageMask-2.png",
        chapter: "Introduction to High School<br>Mathematics",
        subject: "Mathematics",
        grade: "Grade 8",
        plus: "+3",
        units:"4",
        lessons:"18",
        topics:"24",
        prof: "Mr. Frank's class A",
        students: "44 Students",
        dateFrom: "14-Oct-2019",
        dateTo: "20-Oct-2020"
    }
];


//document.getElementById("dash").innerHTML = `
//${dashData.map(function(data){
//  return `
//  <img class="cardImg" src="${data.photo}">
//
//  `
//}).join('')}

//`



document.getElementById("dash").innerHTML = `
${dashData.map(function(data){
  return `
    <div class="card">
      <img class="cardImg" src="${data.photo}">
      <div class="insights">
              <img src="images/preview.svg" />
              <img src="images/manage course.svg" />
              <img src="images/grade submissions.svg" />
              <img src="images/reports.svg" />
          </div>
      <div class="cardContainer">
          <div class="lesson">
              <p style="font-size:16px;font-family: 'Quicksand';width: 250px;">${data.chapter}</p>
              <img class="fav" src="images/favourite.svg" />
          </div>
          <div class="subject">
              <p>${data.subject}&nbsp;&nbsp;&#124;</p>
              <p>&nbsp;${data.grade}&nbsp;</p>
              <p style="color:#1F7A54">${data.plus}</p>
          </div>
          <div class="parts">
              <p><b>${data.units}</b>&nbsp;Units&nbsp;&nbsp;</p>
              <p><b>${data.lessons}</b>&nbsp;Lessons&nbsp;&nbsp;</p>
              <p><b>${data.topics}</b>&nbsp;Topics&nbsp;&nbsp;</p>
          </div>
          <div class="prof">
              <select>
                <!--<option value="" disabled selected hidden>No Classes</option>-->
                <option>${data.prof}</option>
              </select>
          </div>
          <div class="date">
              <p>${data.students}&nbsp;&nbsp;&#124;&nbsp;&nbsp;</p>
              <p>${data.dateFrom}</p>
              <p>&nbsp;-&nbsp;</p>
              <p>${data.dateTo}</p>
          </div>
          
        </div>
      </div>
  `
}).join('')}
`





