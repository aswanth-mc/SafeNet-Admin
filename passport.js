const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const pool = require("./db");

passport.use(
    new LocalStrategy(async(username,password,done)=>{
        try {
            const query = "select *from admin where name=$1";
            const value = [username];
            const result =await pool.query(query,value);
            

            if(result.rows.length === 0){
                return done(null,false,{message:"invalid name or password"});
            }
            const user =result.rows[0];
            return done(null,user);
        } catch (error) {
            return done(error);
        }
    })
);

passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser(async(id,done)=>{
    try {
        const query = "select *from admin where id =$1";
        const result= await pool.query(query,[id]);
        done(null,result.rows[0]);
    } catch (error) {
        done(error);
    }
});

module.exports =passport;