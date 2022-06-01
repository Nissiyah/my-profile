var greeting = new Date();
var time = greeting.getHours();

if (time < 12) {
  greeting = "Good Morning, am Nissiyah!";
} else if (time >= 12) {
  greeting = "Good Afternoon, am Nissiyah!";
} else {
  greeting = "Good Evening, am Nissiyah!";
}
document.getElementById("greeting").innerHTML = greeting;
console.log(time);
