import express from "express"

const app = express()


app.get('/', (req,res)=>{

    res.send('.../forencerApp/src/pages/home.tsx ').end()

})

app.listen(3000, ()=>{

    console.log('listen on port 3000');
    

})