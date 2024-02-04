const express=require('express');
const app=express();
console.dir(app);

let port=3000;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    let htmlstr=`<h1>welcome to the page of @${username} with id ${id}</h1>`;
    res.send(htmlstr);
});

app.get("/search",(req,res)=>{
    let {q}=(req.query);
    if(!q){
        res.send("<h1> nothing search</h1>");
    }
    res.send(`search result for query: ${q}`);
})



// app.get('/search',(req,res)=>{
//     console.log("request received");
//     res.send(" <h1> Fruits</h1> <ul> <li>Apple</li> <li>Banana</li></ul>");
// });

// app.get('/result',(req,res)=>{
//     console.log("request received");
//     res.send(" touch the search result page or path");
// });

// app.get('/help',(req,res)=>{
//     console.log("request received");
//     res.send(" you contact root  helppage or path");

// });
 
// app.get("*",(req,res)=>{
//     res.send(" 404 not found");
// });

// app.post('/',(req,res)=>{
//     res.send("you send post request");
    
// })

// app.use((req,res)=>{
//   //consople.log(req);
//     console.log("request received");
//    // let code=" <h1> Fruits</h1> <ul> <li>Apple</li> <li>Banana</li></ul>"
//    res.send(" <h1> Fruits</h1> <ul> <li>Apple</li> <li>Banana</li></ul>");
// });