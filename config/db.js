if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb+srv://lipedbuser:lipe70123@cluster0.zjvei8o.mongodb.net/?appName=Cluster0"}
}else {
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}