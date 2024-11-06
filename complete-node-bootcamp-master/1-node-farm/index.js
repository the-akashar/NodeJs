
//////////////////////////////////////////////////////////////////
//FILES

//Blocking or Synchronise way

// const fs = require('fs');

// //Read
// const textIn = fs.readFileSync('./starter/txt/input.txt' , 'utf-8');
// console.log(textIn);

// //writing
// const textOut = `This is what we know sbout avacado:${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./starter/txt/output.txt',textOut);
// console.log('File Written');


//Asyncronise Way or Non Blocking way

// const fs = require('fs');

// fs.readFile('./starter/txt/start.txt' , 'utf-8' ,(err,data1)=>{
//     fs.readFile(`./starter/txt/${data1}.txt`,'utf-8',(err,data2)=>{
//         console.log(data2 +"data2")
//         fs.readFile('./starter/txt/append.txt','utf-8',(err,data3)=>{
//             console.log(data3+"data3")
//             fs.writeFile('./starter/txt/final.txt',`${data2}\n${data3}`,'utf-8',err=>{
//                 console.log('Your file has been written');
//             })
//         })
//     });

//     console.log("Namskara lavde")
    
// })



//////////////////////////////////////////
//SERVER
const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require('slugify');


const replaceTemplate = require('./starter/modules/replaceTemplate')

console.log(replaceTemplate);


const tempOverview = fs.readFileSync(`${__dirname}/starter/templates/template-overview.html`,'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/starter/templates/template-card.html`,'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/starter/templates/template-product.html`,'utf-8');




const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`,'utf-8');
const dataObj = JSON.parse(data);

const slugs = dataObj.map(el=>slugify(el.productName , {lower : true}));
console.log(slugs);



const server = http.createServer((req,res)=>{

const {query,pathname}  = url.parse(req.url,true);

//Overview page
if(pathname === '/' || pathname==='/overview'){
    res.writeHead(200,{'Content-type':'text/html'});

    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard , el)).join('');
    console.log(cardsHtml);
    const output = tempOverview.replace('{%PRODUCT_CARDS%}' , cardsHtml);
    console.log(output)
    res.end(output);
    
}
//product page
else if(pathname==='/product'){
    res.writeHead(200,{'Content-type':'text/html'});
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct,product);
    res.end(output);
}
//Api
else if(pathname==='/api'){
res.writeHead(200,{'Content-type':'application/json'});
res.end(data);
}
//error
else{
    res.writeHead(404,{
        'Content-type':'text/html',
        'my-own-header':'hello-world'
    });
    res.end("page not found")
}

})

server.listen(8000,'localhost',()=>{
    console.log('Listeming to the request on port 8000')
})











