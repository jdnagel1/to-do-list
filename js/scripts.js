// Object containing task and Unique ID's:

function ToDo() {
  this.tasks = [],
  this.currentId = 0
}

ToDo.prototype.addTask = function(tasks) {
  this.tasks.push(task);
}

// Constructor:

function Task(task,date,time){
  this.task = task,
  this.date = date,
  this.time = time
}



function printTasks(tasks) {
  var listItems = $('#outputTask');
  var taskString = "";
  console.log(test);
  Task.forEach(function(tasks){
  // for(var i = 0; i < 3; i++){
      taskString += "<input type='checkbox' name='toDo'>" + tasks.task + " Date Due" + tasks.date + " Time Due" + tasks.time + "<br>";
    // };
  });
  listItems.append(taskString);
}


// Front End

$(function(){
  $("#formOne").submit(function(event) {
    var task = $("#inputTask").val();
    var date = $("#inputDate").val();
    var time = $("#inputTime").val();

    var taskItem = new Task(task, date, time);

    printTasks(task);

    console.log(taskItem);
    event.preventDefault();
  });
});
