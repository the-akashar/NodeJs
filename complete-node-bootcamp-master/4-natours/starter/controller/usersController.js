const fs = require('fs');

const users = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

//Users

exports.getAllUsers = (req,res)=>{
    res.status(500).json({
        status:'Internal Error'
})
}

exports.getUser = (req,res)=>{
    res.status(500).json({
        status:'Internal Error'
})
}

exports.createUsers = (req,res)=>{
    res.status(500).json({
        status:'Internal Error'
})
}

exports.updateUsers = (req,res)=>{
    res.status(500).json({
        status:'Internal Error'
})
}

exports.deleteUsers = (req,res)=>{
    res.status(500).json({
        status:'Internal Error'
})
}