
// ASSIGMENT 2


// chapter 14 - 16


// ans 1

// var arr = []

// arr[0] = "ariyan"
// arr[1] = "khan"


// ans 2

// var fruit = new Array()
// fruits.push("mango")
// console.log(fruit)


// ans 3

// var arr = ["ariyan", "hasnain", "faizan", "babar", "hammad"]
// document.writeln(arr)


// ans 4

// var arr = [2, 4, 6, 8, 10]
// document.writeln(arr)


// ans 5

// var arr = [true, false, true, false]
// document.writeln(arr)


// ans 6

// var arr = ["hasnain", "Tanoli", 18, true]
// document.writeln(arr)


// ans 7

// var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS","M.phil", "PHD"]

// document.writeln(`
    
//    1) ${qualification[0]}  <br>
//    2) ${qualification[1]}  <br>
//    3) ${qualification[2]}  <br>
//    4) ${qualification[3]}  <br>
//    5) ${qualification[4]}  <br>
//    6) ${qualification[5]}  <br>
//    7) ${qualification[6]}  <br>
//    8) ${qualification[7]}
    
//     `)

// ans 8

// var names = ['Michael', 'John', 'Tony'];
// var score = [320, 230, 480];
// var maxScore = 500;

// var percentage1 = (score[0] / maxScore) * 100;
// var percentage2 = (score[1] / maxScore) * 100;
// var percentage3 = (score[2] / maxScore) * 100;

// document.writeln(`
//     ${names[0]} scored ${score[0]}. Percentage: ${percentage1.toFixed(2)}% <br>
//     ${names[1]} scored ${score[1]}. Percentage: ${percentage2.toFixed(2)}% <br>
//     ${names[2]} scored ${score[2]}. Percentage: ${percentage3.toFixed(2)}% <br>
// `);


// ans  9

// var colorNames = ['red', 'green', 'orange', 'yellow'];

// var newColor = prompt("Please enter a color:");

// var newColorTwo = prompt("Please enter a color:");

// Option a
// colorNames.push(newColor);

//Option b
// colorNames.unshift(newColor);

//Option c
// colorNames.unshift(newColor);
// colorNames.unshift(newColorTwo);

//Option d
// colorNames.shift();

// option e
// colorNames.pop()

//Option f
// var newColorIndex = prompt("Please enter a index number:");

// var newColor = prompt("Please enter a color:");

// colorNames.splice(newColorIndex, 0, newColor);


//Option g
// var newColorIndex = prompt("Please enter a index number:");

// var newColorDelete = prompt("Please enter remove the number of colors.");

// colorNames.splice(newColorIndex, newColorDelete);

// document.writeln("Updated colors: " + colorNames);




//ans 10

// var studentScore = [320, 230, 480, 120];
// studentScore.sort();
// document.writeln(studentScore)


//ans 11

// var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
// selectedCities = cities.slice(2, 4);

// document.writeln(
//     `
//     Cities List: ${cities}<br>
//     Selected Cities: ${selectedCities}
//     `
// );

//ans 12

// var arr = ['This', 'is', 'my', 'cat'];
// var newArray = arr.join(' ');

// document.writeln(newArray);



// ans 13

// var arr = ["keyboard", "Mouse", "printer", "Monitor"]

// document.writeln(`
    
//     Devices: <br> ${arr} <br> <br> 
//     Out: <br> ${arr[0]} <br> 
//     Out: <br> ${arr[1]} <br> 
//     Out: <br> ${arr[2]} <br> 
//     Out: <br> ${arr[3]}
//     `)


// ans 14

// var arr = ["keyboard", "Mouse", "printer", "Monitor"]

// document.writeln(`
    
//     Devices: <br> ${arr} <br> <br> 
//     Out: <br> ${arr[3]} <br> 
//     Out: <br> ${arr[2]} <br> 
//     Out: <br> ${arr[1]} <br> 
//     Out: <br> ${arr[0]}
    
//     `)


// ans 15

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "vgo tel", "infinix"];

// document.writeln('
    
//     <label> Select A manufacture </label>
    
//       <select>
//           <option> ${manufacturers[0]} </option>  <br>
//           <option> ${manufacturers[1]} </option>  <br>
//           <option> ${manufacturers[2]} </option>  <br>
//           <option> ${manufacturers[3]} </option>  <br>
//           <option> ${manufacturers[4]} </option>  <br>
//           <option> ${manufacturers[5]} </option>  <br>
        
//       </select>
    
//     ')

