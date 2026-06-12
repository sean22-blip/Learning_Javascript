import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

async function getAirlines() {
    const [rows] = await pool.query("select * from airlines")
    return rows;
}
// async function getAirlineNameById(id) {
//     const [getId] = await pool.query(`select name from airlines where AirlineID = ${id}`)
//     return getId
// }
async function getAirlineNameById(id){
    // const id = Number(req.params.id);
    // const [getId] = await pool.query(`select name from airliens where airlineid = ${id}`);
    // if(!id){
    //     return res.status(404).json({error: `id must be provided!`});
    // }
    // const foundId = database.find((d) => id === d.airlineId)
    // if(!foundId){
    //     return res.status(404).json({error: `${id} cannot be found!`})
    // }
    // const {id} = req.params;
    pool.query(`select name from airlines where AirlineID = ?`, [id])
    // .then(([rows]) => {
    //     // return res.data;
    //     console.log(rows.data[0]);
    //     // console.log(rows.data[1]);
    //     // res.json(rows[0]);
    //     // res.json(rows[1]);
    // })
    // .catch((err) => {
    //     console.log({error: err.message})
    // })
    //  res.status(201).json(`successfully get airline name by id!`)
    try{
        const [rows] = await pool.query(`select name from airlines where AirlineID = ?`, [id])
        // console.log(rows);
        return rows[0];
    }catch(err){
        console.log({error: err.message});
    }
}
const airlineName = await getAirlineNameById(1);
console.log(airlineName);
// const airlines = await getAirlines();
// console.log(airlines);
// const rows = result[0];
// console.log(result)