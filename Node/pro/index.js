const {Sequelize,DataTypes}=require("sequelize");
//connecting to a database college in postgress

/*
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect:  one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' 
});
*/
const mydb=new Sequelize("college",
"postgres",
"123",
{
    host:"localhost",
    dialect:"postgres",
});

mydb.authenticate();

//Server-localhost
//Port-5432
//Username-postgress
//Pwd-123


//creating a model Student as a table
const student = mydb.define("student", {

    // Model attributes are defined here
    roll: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    email:{
        type:DataTypes.STRING

    },
  },{
      tableName:"students",
  });

  student.sync()

    .then(() => {

        console.log('✔ User table created if not...');

    })

    .catch((error) => {

        console.log('❌ something went wrong while created User table...');

    });
  //it returns a promise so use async and await

//to insert values 
/* (async()=>{
    const jane = await student.create({ roll:509,Name: "Jane", email: "Doe@gmail.com" });
})(); */

(
    async()=>{
        console.log("hii");
        const students=await student.findAll();
        students.forEach((student)=>{
            student.set("roll",890);
            student.set("email","hon");
           
            //console.log("details",student.getDataValue);
        }
        )
})();