const express = require("expess");
const app =express();
const port = process.env.PORT ||3000;

app.get("/", (req, res)=> {
    res.send("Hello from the prince")
});

app.listen(port, ()=>{
    console.log('server is runninng at port no ${port}');
});