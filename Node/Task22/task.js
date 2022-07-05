const express=require('express');
const userchema=require("./user");
const app=express();

app.use(express.json());

//to store the data
const data=[];

const port=process.env.port || 3800;

const userValidator = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error === null || error === void 0 ? void 0 : error.isJoi) {
            res.json(error.message);
        }
        else {
            next();
        }
    };
};

app.get('/get',(req,res)=>{
    res.send(data);
});

app.get('/get/:id',(req,res)=>{
    const id = req.params.id;
    const userToFind = data.find(user => user.id === id);
    if (!userToFind) {
        res.status(404).send('User not found');
    }
    res.send(userToFind);
});

app.post('/post',(req,res)=>{
    const details=req.body;
    data.push(details);
    res.send(data);
})


app.put('/update/:id', userValidator(userSchema), (req, res) => {
    const id = req.params.id;
    const { login, password, age } = req.body;            //Imp - destructuring
    const userToUpdate = data.find(u => u.id === id);
    if (!userToUpdate) {
        res.send('User not found');
    }
    else {
        userToUpdate.login = login;
        userToUpdate.password = password;
        userToUpdate.age = age;
        res.send(userToUpdate);
    }
});

//delete user data by using id
app.delete('/remove/:id', (req, res) => {
    const id = req.params.id;
    const userToDelete = data.find(user => user.id === id);
    if (!userToDelete || userToDelete.isDeleted) {
        res.send('User not found');
    }
    else {
        userToDelete.isDeleted = true;
        res.send();
    }
});

app.listen(port,()=>{
    console.log(`app is listening to port ${port}`)
});