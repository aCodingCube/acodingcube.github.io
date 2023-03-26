
var createTable = true;
var IDcounter = 1;
var CountElement = 0;

Swal.fire({
  position: 'middle',
  icon: 'success',
  title: 'All notes loaded, good work',
  showConfirmButton: false,
  timer: 1500
})

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function auto_grow(element) {
  element.style.height = "5px";
  element.style.height = (element.scrollHeight) + "px";
}

function delete_all() {
  var MainElement = document.getElementById("NoteTable");
  if (CountElement > 1) {
    Swal.fire({
      title: 'Are you sure?',
      text: CountElement + " notes will get deleted!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete them!'
    }).then((result) => {
      if (result.isConfirmed) {
        MainElement.remove();
        createTable = true;
        CountElement = 0;
      }

    })
  } else if (CountElement == 1) {
    Swal.fire({
      title: 'Are you sure?',
      text: "1 note will get deleted!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        MainElement.remove();
        createTable = 0;
        CountElement = 0;
      }
    })
  } else { }
}

function delete_element(elementID) {

  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      for (x = 0; x < 3; x += 1) {
        var element = document.getElementById(elementID);
        element.classList.add("invisible");
        element.remove();
      }
      CountElement -= 1;

    }
  })


}

function Create() {
  if (createTable) {
    //Create Table
    var x = document.createElement("table");
    x.setAttribute("id", "NoteTable")
    document.body.appendChild(x);
    createTable = false;
  }

  var y = document.createElement("TR");
  y.setAttribute("id", IDcounter);
  document.getElementById("NoteTable").appendChild(y);

  //Create DeleteButton
  var b = document.createElement("button");
  b.setAttribute("onclick", "delete_element(this.id)");
  b.setAttribute("id", IDcounter);
  b.classList.add("DeleteButtons");
  b.innerHTML = "x";

  var z = document.createElement("TD");
  z.setAttribute("id", IDcounter);
  z.appendChild(b);

  //Create P
  var c = document.createElement("p");
  c.setAttribute("id", IDcounter);
  z.appendChild(c);

  z.setAttribute("id", IDcounter);
  document.getElementById("NoteTable").appendChild(z);

  //Create Textarea
  var a = document.createElement("textarea");
  a.setAttribute("oninput", "auto_grow(this)");
  a.setAttribute("id", IDcounter);
  a.classList.add("NoteTextarea");
  a.setAttribute("placeholder", "Lots of space for notes here...");
  document.getElementById("NoteTable").appendChild(a);

  IDcounter += 1;
  CountElement += 1
}

function Fold_LogOut(element){
  element.innerHTML="Log Out ↦";
}

function Unfold_LogOut(element){
  element.innerHTML="↦";
}

function LogOutButton(){
  Swal.fire({
    title: 'Log Out?',
    text: "All your notes will be saved!",
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Log Out'
  }).then((result) => {
    if (result.isConfirmed) {
      LogOut();
    }
  })
}

function LogOut(){
  console.log("Log Out!");
  window.location.replace("./index.html")
}