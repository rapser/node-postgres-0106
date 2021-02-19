const Pool=require('pg').Pool

const pool=new Pool({
    user:"postgres",
    password:"root1983",
    host:"localhost",
    port:5432,
    database:"management"
})

module.exports=pool;