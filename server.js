let exprss = require('express')


let app = exprss()
app.listen(3040 , ()=> {
    console.log("serve is runnning")
})

app.get("/" ,async (req,res)=>{
await res.send({
    message : "kamkmkfm"
})
await main().catch(console.error);
})
app.use("/route" , require("./router/router"))
