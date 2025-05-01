// logic for database connection
const {Sequelize , DataTypes } = require("sequelize") // Here Sequelize is class so class needs to be instantious

// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize
// const DataTypes = sequelize.DataTypes

const sequelize = new Sequelize("postgresql://postgres.gkzoloxnfeyipmcfdudh:vyas2damaulitanahun@aws-0-ap-south-1.pooler.supabase.com:6543/postgres") // object is created. Class is instanstiated.

sequelize
.authenticate()
.then(()=>{
    console.log("Authenticated! Connected Successfully")
})
.catch((err)=>{
    console.log("Error" + err)
})

const db = {}
db.Sequelize = Sequelize // class value
db.sequelize = sequelize // object value

db.books = require("./models/book.model")(sequelize, DataTypes)


// This is migrate code
sequelize
    .sync({alter : true}) 
    // alter: true does not cause data loss — it tries to update tables without deleting data.
    // force: true does cause data loss — it drops and recreates tables.
    .then(()=>{
        console.log("Migrated")
    })

module.exports = db 