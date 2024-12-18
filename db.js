const Pool =require ("pg").Pool;

const pool =new Pool({
    user: "postgres",
    password:"a1s2d3f4",
    host:"localhost",
    port:5432,
    database:"disastermanagement"
});


module.exports =pool;