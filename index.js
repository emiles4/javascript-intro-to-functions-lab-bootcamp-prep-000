var lowercase = 'hello!'
 
lowercase.toLowerCase() === lowercase

var uppercase = "HELLO!"
 
uppercase.toUpperCase() === uppercase

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}
function logWhisper(string) {
  console.log("HELLO".toLowerCase())
}
function logShout(string){
  console.log("HELLO".toUpperCase())
}

