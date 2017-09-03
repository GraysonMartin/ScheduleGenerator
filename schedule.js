function submit() {
  var name = document.getElementById('name').value;
  var class1 = document.getElementById('classField1').value;
  var class2 = document.getElementById('classField2').value;
  var class3 = document.getElementById('classField3').value;
  var class4 = document.getElementById('classField4').value;
  var class5 = document.getElementById('classField5').value;
  var class6 = document.getElementById('classField6').value;
  var class7 = document.getElementById('classField7').value;
  var class8 = document.getElementById('classField8').value;
  if (class1 != "" && class2 != "" && class3 != "" && class4 != "" && class5 != "" && class6 != "" && class7 != "" && class8 != "") {
    document.getElementById('mainTable').innerHTML = "<table class=\"schedule\"><tr><th>Time</th><th>A (Monday)</th><th>Time</th><th>B (Tuesday)</th><th>C (Wednesday)</th><th>D (Thursday)</th><th>E (Friday)</th></tr><tr><td>8:00-8:43</td><td>" + class1 + "</td><td>8:00-8:55</td><td>" + class1 + "</td><td>" + class7 + "</td><td>" + class8 + "</td><td>" + class5 + "</td></tr><tr><td>8:46-9:29</td><td>" + class2 + "</td><td>9:00-9:55</td><td>" + class2 + "</td><td>" + class8 + "</td><td>" + class7 + "</td><td>" + class6 + "</td></tr><tr><td>9:29-9:42</td><td>Break</td><td>10:00-10:10<br>10:10-10:20</td><td>Break/Homeroom</td><td>Break/Homeroom</td><td>Break/Homeroom</td><td>Break/Homeroom</td></tr><tr><td>9:45-10:28</td><td>" + class3 + "</td><td>10:25-11:20</td><td>" + class3 + "</td><td>" + class3 + "</td><td>" + class5 + "</td><td>" + class3 + "</td></tr><tr><td>10:31-10:56</td><td>Advisory</td><td>11:25-11:45</td><td>Advisory</td><td>Advisory</td><td>Advisory</td><td>MS Assembly</td></tr><tr><td>10:59-11:42</td><td>" + class4 + "</td><td>11:45-12:15</td><td>Lunch</td><td>Lunch</td><td>Lunch</td><td>Lunch</td></tr><tr><td>11:42-12:11</td><td>Lunch</td><td>12:20-1:15</td><td>" + class4 + "</td><td>" + class4 + "</td><td>" + class6 + "</td><td>" + class4 + "</td></tr><tr><td>12:13-12:57</td><td>" + class5 + "</td><td>1:20-2:15</td><td>" + class5 + "</td><td>" + class2 + "</td><td>" + class2 + "</td><td>" + class7 + "</td></tr><tr><td>1:00-1:43</td><td>" + class6 + "</td><td>2:20-3:15</td><td>" + class6 + "</td><td>" + class1 + "</td><td>" + class1 + "</td><td>" + class8 + "</td></tr><tr><td>1:46-2:29</td><td>" + class7 + "</td></tr><tr><td>2:32-3:15</td><td>" + class8 + "</td></tr></table>"
    document.getElementById('printSpace').innerHTML = "<button id=\"submit\" onclick=\"window.print()\">Print</button>"
    document.getElementById('title').innerHTML = name + '\'s Schedule'
    document.title = name + '\'s Schedule'
  } else {
    alert('All fields are required.')
  }
}
