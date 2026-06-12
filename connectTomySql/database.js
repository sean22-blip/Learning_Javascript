import mysql from 'mysql2'
import dotenv from 'dotenv'
import fs from 'fs'
// import { json } from 'express'
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
async function getAirlineNameById(id) {
    const Numid = Number(id);
    if (!Numid) {
        return console.log("id must be provided!")
    }
    // const [getId] = await pool.query(`select name from airliens where airlineid = ${id}`);
    // if(!id){
    //     return res.status(404).json({error: `id must be provided!`});
    // }
    // const foundId = database.find((d) => id === d.airlineId)
    // if(!foundId){
    //     return res.status(404).json({error: `${id} cannot be found!`})
    // }
    // const {id} = req.params;
    // pool.query(`select name from airlines where AirlineID = ?`, [id])
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

    try {
        const [rows] = await pool.query(`select * from airlines where AirlineID = ?`, [id])
        //this is called the prepared staement is when we are sending the sequel and the values to the database seperately
        // console.log(rows);
        // return rows[0];
        // return rows[1];
        // return rows[100];const findId = rows.find((r) => Numid === r.AirlineID);
        const findId = rows.find((r) => Numid === r.AirlineID);
        if (!findId) {
            return console.log(`cannot find the id of ${Numid}`)
        }
        const time = new Date().toLocaleTimeString();
        const date = new Date().toLocaleDateString();
        const fullRow = JSON.stringify(rows, null , 2)
        const jsonTmp = JSON.stringify(rows, ['Name'], 2)
        fs.appendFileSync(`airlinesNameById.json`, `\n${date}${time}\n`);
        fs.appendFileSync('airlinesNameById.json', jsonTmp);
         fs.appendFileSync(`airlinesNameById.txt`, `\n === ${date} === ${time} ===\n`);
        fs.appendFileSync('airlinesNameById.txt', jsonTmp);
        console.log(fullRow);
        // console.log(jsonTmp);
        // console.log(`Added ${jsonTmp} \n To airliensNameById.json!`)
        console.log(`Added ${jsonTmp} \n To airliensNameById.txt!`)
        // return jsonTmp;
    } catch (err) {
        console.log({ error: err.message });
    }
}
const airlineName = await getAirlineNameById(2);
// console.log(airlineName);
console.log("Thank you for using our system!")
// const airlines = await getAirlines();
// console.log(airlines);
// const rows = result[0];
// console.log(result)