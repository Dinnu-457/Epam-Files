const express=require("express");
const bodyParser=require("body-parser");
//console.log(express);
/*

In output you get many properties with values 
where you can see Function(anonymous) which is no name function  like const fn=()=>{};
There are several objects:
  1.application object basically enables you to create server
  2. request gives all tools to work on http requests
  3.response is a tool where it would be there at disposal like acknowledgement
  4.Route and Router which helps in solving requests 

*/

const app=express();
app.use(bodyParser());

console.log(app);

const Port=4500;


const movies=require("./data").movie;

app.get('/', (req, res) => {
  //json is javascript object notation
  res.json(movies);
  res.send('Hello World!')
})

app.post("/",(req,res)=>{

 const data= req.body;
 movies.push(data);
 res.json(movies);
})

/*
above get basically telling that when any url starting with  '/' take that request
and write response
*/


/*
below get basically fetches the req based on given id
ypu have an array you need to traverse each element
if any element matches to that value then you need to break and write response
*/
app.get('/:id', (req, res) => {
  //json is javascript object notation
  const id=req.params.id;
  let d={};
  for (let index = 0; index < movies.length; index++) {
    const element = movies[index];
    if(element.id==id){
     d=element;
     break;
    }
         
  }
  res.json(d);
});

app.listen(
4500,(req,res)=>{
 console.log(`server is running on port ${Port}`);
}
);
