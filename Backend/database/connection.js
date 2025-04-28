// logic for database connection

const {Sequelize , DataTypes } = require("sequelize") // Here Sequelize is class so class needs to be instantious

// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize
// const DataTypes = sequelize.DataTypes

const sequelize = new Sequelize("postgresql://postgres.gkzoloxnfeyipmcfdudh:vyas2damaulitanahun@aws-0-ap-south-1.pooler.supabase.com:6543/postgres") // object is created. Class is instanstiated.

sequelize.authenticate()
.then(()=>{
    console.log("Authenticated! Connected Successfully")
})
.catch((err)=>{
    console.log("Error" + err)
})

const db = {}
db.Sequelize = Sequelize // class value
db.sequelize = sequelize // object value

module.exports = db 