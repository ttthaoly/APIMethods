const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');



// :id, :detail, :mode => param ||| id, detail, mode
app.post('/:fileName', (req, res) => {

    // Step 1: C 
    const fileName = req.params.fileName;

    // Step 
    fs.writeFile(`./${fileName}.csv`, fileName, (err, data) => {
        if (err) {
            // Failed
            res.send(err)
        }   
        // Success
        res.sendStatus(200)
    })   
})

    // Step 2: R
app.get('/:fileName', (req, res) => {
  fs.readFile("ays.csv", 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("read", data);
  });
  res.send("hehe")
})

// Step 3: 
app.put('/:fileName', (req, res) => {
  // let a = abcd;
  // fs.writeFile("ays.csv", a, err => {
  //   if (err) {
  //     console.error("write", err);
  //   }
  // });
  // res.send("kkk")
  let a = "khongcobongtuyetnaotrongsach";
  fs.writeFile("ays.csv", a, (err) => {
    if (err) {
      res.send(err)
    }   
      res.sendStatus(200)
  }) 
})
app.delete('/:fileName', (req, res) => {
  // let id = req.params.fileName;
  // if (err) {  
  //   res.send(err)
  // }
  // else {
  //   fs.writeFile("ays.csv", "", (err) => (err ? Console.log(err) : "")); 
  //   res.sendStatus(200)
  // }
  try {
    fs.writeFile("ays.csv", " ", (err) => (err ? Console.log(err) : "")); 
    res.sendStatus(200); 
  } 
  catch(err) { 
    console.log(err); 
  }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})