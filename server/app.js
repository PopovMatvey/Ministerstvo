/*Libs*/
const cors = require('cors')                                // allow api requests/response
const fs = require('fs');                                   // for work with file/dirrectory
const express = require('express');                         // api requests lib
const sqlite3 = require('sqlite3').verbose();               // lib data base sqlite
const path = require('path');                               // for init static directory
const { v4 } = require('uuid');                             // generate id
const app = express();                                      // app iniy
app.use(express.json());                                    // use json for requests
app.use(cors());

/*Varibles*/
const PORT_APP = 2000;                      // app port
const urlRequest = '/api/contacts';         // url request api


/*SQL*/
// const dataBaseObject = new sqlite3.Database('./DataBase.db', sqlite3.OPEN_READWRITE, (err) => {
//     if (err) return console.log(err);
// });

// // create table
// sql = `CREATE TABLE users(id INTEGER PRIMARY KEY, first_name, last_name,username,password,email)`;

// db.run(sql);

// db.run(`CREATE TABLE rules(id INTEGER PRIMARY KEY, first_argument, boolean_simbol, second_argument, result)`)
// // drop table
// db.run("DROP TABLE users");
// db.run("DROP TABLE countries");

// db.run(`CREATE TABLE countries (id INTEGER PRIMARY KEY, name_country)`)


// // insert data 
// sql = `INSERT INTO users(first_name, last_name,username,password,email) VALUES (?,?,?,?,?)`;

// db.run(
//     sql,
//     ["sd", "sd", "sdq", "sd12", "fred@fcew.com"],
//     (error) => { if (error) { console.log(error); } }
// );

// sql = `INSERT INTO countries(name_country) VALUES (?)`;

// db.run(
//     sql,
//     ["Россия"],
//     (error) => { if (error) { console.log(error); } }
// );
// db.run(
//     sql,
//     ["Турция"],
//     (error) => { if (error) { console.log(error); } }
// );
// db.run(
//     sql,
//     ["Греция"],
//     (error) => { if (error) { console.log(error); } }
// );
// db.run(
//     sql,
//     ["Египет"],
//     (error) => { if (error) { console.log(error); } }
// );
// db.run(
//     sql,
//     ["Тайланд"],
//     (error) => { if (error) { console.log(error); } }
// );

// sql = `INSERT INTO rules(first_argument, boolean_simbol, second_argument, result) VALUES (?,?,?,?)`;

// db.run(
//     sql,
//     ["country = choosen_country", "-", "-", "hotel with choosen_country"],
//     (error) => { if (error) { console.log(error); } }
// );

// db.run(
//     sql,
//     ["amount_stars = choosen_amount_stars", "-", "-", "hotel with choosen_amount_stars"],
//     (error) => { if (error) { console.log(error); } }
// );

// db.run(
//     sql,
//     ["amount_nights = choosen_amount_nights", "-", "-", "price_for_hotel = price_for_night *  amount_nights"],
//     (error) => { if (error) { console.log(error); } }
// );

// db.run(
//     sql,
//     ["amount_adults = choosen_amount_adults", "-", "-", "price for hotel = choosen_amount_adults * price for night "],
//     (error) => { if (error) { console.log(error); } }
// );

// db.run(
//     sql,
//     ["amount_childs = choosen_amount_childs", "-", "-", "price for hotel  childs = (price for night * 0.5) choosen_amount_childs "],
//     (error) => { if (error) { console.log(error); } }
// );



// // update data
// sql = `UPDATE users SET first_name = ? WHERE id = ?`;
// db.run(sql, ["Jake",1], (error)=>{
//     if(error) return console.log(error.message);
// });

// delete data
// sql = `DELETE FROM rules WHERE id = ?`;
// sql = `DELETE FROM countries WHERE id = ?`;
// db.run(sql,[7],(error)=>{
//     if(error) return console.log(error.message);
// });
// sql = `DELETE FROM rules WHERE id = ?`;
// db.run(sql,[1],(error)=>{
//     if(error) return console.log(error.message);
// });
// db.run(sql,[2],(error)=>{
//     if(error) return console.log(error.message);
// });
// db.run(sql,[3],(error)=>{
//     if(error) return console.log(error.message);
// });
// db.run(sql,[4],(error)=>{
//     if(error) return console.log(error.message);
// });
// db.run(sql,[5],(error)=>{
//     if(error) return console.log(error.message);
// });
// db.run(sql,[6],(error)=>{
//     if(error) return console.log(error.message);
// });
// db.run(sql,[7],(error)=>{
//     if(error) return console.log(error.message);
// });
// db.run(sql,[8],(error)=>{
//     if(error) return console.log(error.message);
// });
// db.run(sql,[9],(error)=>{
//     if(error) return console.log(error.message);
// });


// // query the data
// sql = 'SELECT * FROM users';
// db.all(sql, [], (error, rows) => {
//     if (error) {
//         return console.log(err.message);
//     }

//     rows.forEach((row) => {
//         console.log(row);
//     })
// })

// let arrayRules = [];

// sql = 'SELECT * FROM rules';
// db.all(sql, [], (error, rows) => {
//     if (error) {
//         return console.log(err.message);
//     }

//     arrayRules = rows;

//     console.log(arrayRules);

//     // rows.forEach((row) => {
//     //     console.log(row);
//     // })
// })

// let arrayCountries = [];

// sql = 'SELECT * FROM countries';
// db.all(sql, [], (error, rows) => {
//     if (error) {
//         return console.log(err.message);
//     }

//     arrayCountries = rows;

//     console.log(arrayCountries);

//     // rows.forEach((row) => {
//     //     console.log(row);
//     // })
// })


/*Requests*/
//GET
// Получить массив путей до изображений партнёров
app.get('/api/slider/image/partners', (req, res) => {
    res.status(200).json(arrayPartnersSlider);
});


//POST "CREATE"
app.post(`${urlRequest}`, (req, res) => {

});

//DELETE
app.delete(`${urlRequest}/:id`, (req, res) => {

});

//PUT
app.put(`${urlRequest}/:id`, (req, res) => {

});

/*Directory*/
// init statics
app.use(express.static(path.resolve(__dirname, 'client')));
app.use(express.static(path.resolve(__dirname, '.static')));

// lisening all get requests
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", 'index.html'))
});

// default massage
app.listen(PORT_APP, () => console.log(`Server has been started on port ${PORT_APP}`));

