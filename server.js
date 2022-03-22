const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');
const User = require("./user");
const Company = require("./company");


app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/users/new", (req,res)=>{
    res.json(new User());
})

app.get("/api/companies/new", (req,res)=>{
    res.json(new Company());
})

app.get("/api/user/company", (req,res)=>{
    let user = new User()
    let company = new Company()
    res.json({"user": user, "company" : company});
})




app.listen( port, () => console.log(`Listening on port: ${port}`) );