// Object containing task and Unique ID's:

function ToDo() {
  this.tasks = [],
  this.currentId = 0
}


// Constructor:

function Tasks(task,date,time){
  this.task = task,
  this.date = date,
  this.time = time
}



// Front End

$(function(){
  $("form").submit(function(event) {
    var task = $("#inputTask").val();
    var date = $("#inputDate").val();
    var time = $("inputTime").val();



    event.preventDefault();
  });
});
