var arguments = process.argv.slice(2);
var s = 0,
  pro = 1;
try{
    if(arguments[0] === "subtraction"){
        if(arguments.length === 3){
            s = parseInt(arguments[1]) - parseInt(arguments[2]);
            console.log(s);
        }
        else{
            throw new Error("give valid inputs");
        }
    } 
    else if (arguments[0] === "addition") {
        let n = arguments.length;
        for (let i = 1; i < arguments.length; i++) {
          s += parseInt(arguments[i]);
        }
        console.log(s);
      } 
      else if (arguments[0] === "multiplication") {
        let n = arguments.length;
        for (let i = 1; i < arguments.length; i++) {
          pro = pro * parseInt(arguments[i]);
        }
        console.log(pro);
      } 
      else if(arguments[0] === "division"){
        if(arguments.length === 3){
            s = parseInt(arguments[1])/parseInt(arguments[2]);
            console.log(s);
        }
        else{
            throw new Error("give valid inputs");
        }
    } 
}
catch(error){
    console.log(error);
}
