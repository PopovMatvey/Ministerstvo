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

/*SQL*/
const dataBaseObject = new sqlite3.Database('./DataBase.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.log(err);
});

// Таблица "ПОЛ"
let sqlCreateSex = `
CREATE TABLE sex (
    id_sex INTEGER PRIMARY KEY,
    name_sex VARCHAR
  )`;

// dataBaseObject.run(sqlCreateSex);

// dataBaseObject.run("DROP TABLE sex");


// let sqlInserteSex = `
// INSERT INTO sex (
//     id_sex,
//     name_sex
//     )  VALUES(?,?)`;


// dataBaseObject.run(
//     sqlInserteSex,
//     [
//         0,
//         "Мужской"
//     ],
//     (error) => { if (error) { console.log(error); } }
// );
// dataBaseObject.run(
//     sqlInserteSex,
//     [
//         1,
//         "Женский"
//     ], (error) => { if (error) { console.log(error); } }
// );

// sql = 'SELECT * FROM sex';
// dataBaseObject.all(sql, [], (error, rows) => {
//     if (error) {
//         return console.log(err.message);
//     }

//     rows.forEach((row) => {
//         console.log(row);
//     })
// })


// Таблица "РЕГИОНЫ"
let sqlCreateRegions = `
CREATE TABLE regions (
    id_region INTEGER PRIMARY KEY,
    name_region VARCHAR,
    class_region VARCHAR
  )`;

// dataBaseObject.run("DROP TABLE regions");
// dataBaseObject.run(sqlCreateRegions);


let sqlInserteRegions = `
INSERT INTO regions (
    id_region,
    name_region,
    class_region
    )  VALUES(?,?,?)`;


// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         0,
//         'Рязань',
//         'ryazan-city'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         1,
//         'Александро - Невский район',
//         'alexandro-nevskiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         2,
//         'Ермишинский район',
//         'ermiishinskiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         3,
//         'Захаровский район',
//         'zaharovskiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         4,
//         'Кадомский район',
//         'kadomskiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         5,
//         'Касимовский район',
//         'kasimovskiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         6,
//         'Клепиковский район',
//         'klepikovskiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         7,
//         'Кораблинский район',
//         'korablinskiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         8,
//         'Милославский район',
//         'miloslavskiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         9,
//         'Михайловский район',
//         'mihaylov-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         10,
//         'Пителинский район',
//         'pitelenskiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         11,
//         'Пронский район',
//         'pronskiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         12,
//         'Путятинский район',
//         'putyatinskiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         13,
//         'Рыбновский район',
//         'ribnovskiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         14,
//         'Ряжский район',
//         'ryajskiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         15,
//         'Рязанский район',
//         'ryazanskiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         16,
//         'Сапожковский район',
//         'sapojskiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         17,
//         'Сараевский район',
//         'saraiysiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         18,
//         'Сасовский район',
//         'sasovskiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         19,
//         'Скопинский район',
//         'slopinskiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         20,
//         'Спасский район',
//         'spask-ryazanskiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         21,
//         'Старожиловский район',
//         'starojilovskiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         22,
//         'Ухоловский район',
//         'uhovskiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         23,
//         'Чучковский район',
//         'chuckovskiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         24,
//         'Шацкий район',
//         'shatskiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInserteRegions,
//     [
//         25,
//         'Шиловский район',
//         'shilovskiy-region'
//     ],
//     (error) => { if (error) { console.log(error); } }
// );


// Таблица "ПОЛ"

// sql = `DELETE FROM regions WHERE id_region = ?`;
// dataBaseObject.run(sql,[1],(error)=>{
//     if(error) return console.log(error.message);
// });

let sqlCreatePeaple = `
CREATE TABLE people (
    id INTEGER PRIMARY KEY,
    region_id INTEGER,
    name VARCHAR,
    surname VARCHAR,
    patronymic VARCAHR,
    birth_year VARCAHR,
    death_year VARCAHR,
    gos_stat_info VARCHAR,    
    war_description TEXT,
    work_descrpiption TEXT,
    reward_list TEXT,
    photo VARCHAR,
    position VARCHAR,
    sex INTEGER,
    CONSTRAINT people_region_fk FOREIGN KEY (region_id) REFERENCES regions (id_region) ON DELETE CASCADE
  )`;

// dataBaseObject.run(sqlCreatePeaple);

// dataBaseObject.run("DROP TABLE people");


let sqlInsertPeople = `
INSERT INTO people (
    id,
    region_id,
    name,
    surname,
    patronymic,
    birth_year,
    death_year,
    gos_stat_info,    
    war_description,
    work_descrpiption,
    reward_list,
    photo,
    position,
    sex)  VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;


// dataBaseObject.run(
//     sqlInsertPeople,
//     [
//         1,
//         4,
//         'Евгений',
//         'Ватрухин',
//         'Васильевич',
//         '1916',
//         '28.08.1942 г.',
//         '',
//         'Младший политрук, погиб в бою. Похоронен в д. Труханы, Темкинского района, Смоленской области.',
//         '',
//         '',
//         '',
//         "",
//         0],
//     (error) => { if (error) { console.log(error); } }
// );
// dataBaseObject.run(
//     sqlInsertPeople,
//     [
//         1,
//         4,
//         'ДМИТРИЙ ',
//         'АНДРЕЕВ',
//         'ДМИТРИЕВИЧ ',
//         '19.12.1920 г.',
//         'Неизвестна',
//         '',
//         'Был призван в Рабоче-крестьянскую Красную армию 16 июня 1942г., служил в рядах Рабоче-крестьянской Красной армии в 1942-1943 гг. Участвовал в боях за город Сталинград. 20.01.1943г. был ранен и демобилизован.',
//         'В 1939-1941 гг. работал ветеринаром-фельдшером Батаринского наслега Мегино-Кангаласского района. 17.05.1943-17.08.1943 гг. - статистик по Якутскому району Статистического управления Якутской АССР. В 1943 году работал старшим бухгалтером, заведующим отдела в Якутском Райсовете. С 10.10.1944г. по 01.05.1946г.- статистик Якутской райинспектуры ЦСУ',
//         'Медаль "За отвагу", Медаль "За оборону Сталинграда".',
//         '',
//         "",
//         0],
//     (error) => { if (error) { console.log(error); } }
// );
// dataBaseObject.run(
//     sqlInsertPeople,
//     [
//         2,
//         5,
//         'ВАСИЛИЙ  ',
//         'АНДРОСОВ',
//         'ХАРЛАМПЬЕВИЧ  ',
//         '12.01.1923 г.',
//         '11.10.2002 г.',
//         '',
//         'С июня 1942 по апрель 1947гг. служил в рядах Рабоче-крестьянской Красной и Советской армии. Участвовал в боях против японских империалистов.',
//         'В 1951-1954 гг.- следователь Прокуратуры Оленекского района Якутской АССР. В 1954-1956 гг. работал заведующим центральной базой, директором Дома культуры, инспектором Таттинского лесхоза. В системе органов статистики работал, с 17.09.1959 г. по 23.11.1959 г., инспектором по учёту Таттинской инспектуры ЦСУ.',
//         'Медаль "За победу над Японией", Медаль "За доблестный труд в Великой Отечественной войне 1941—1945 гг." .',
//         '',
//         "",
//         0],
//     (error) => { if (error) { console.log(error); } }
// );
// dataBaseObject.run(
//     sqlInsertPeople,
//     [
//         3,
//         1,
//         'ВАСИЛИЙ  ',
//         'АНИСИМОВ',
//         'ГРИГОРЬЕВИЧ   ',
//         '18.12.1918 г',
//         'Неизвестна',
//         '',
//         'Был призван в Рабоче-крестьянскую Красную Армию в 1941 г. Воевал на Северо-Западном фронте в составе 147-ой особой стрелковой бригады Северо-Западного фронта. В 1943 г. был демобилизован по ранению.',
//         'После войны работал учителем, народным судьей, Председателем колхоза. Трудовую деятельность в органах статистики начал в 1953 г. участковым инспектором Орджоникидзевского ЦСУ, с 1959 г. работал районным инспектором госстатистики Аллаиховского района, с 1981 г. - экономистом отдела капитального строительства Статуправления Якутской АССР.',
//         'Медаль «За отвагу», медаль «За победу над Германией в Великой Отечественной войне 1941-1945 гг.», медаль «Двадцать лет Победы в Великой Отечественной войне 1941-1945 гг.», медаль «50 лет Вооруженных Сил СССР», медаль «За доблестный труд в Великой Отечественной войне 1941-1945 гг.", Народный знак "25 лет победы в Великой Отечественной войне".',
//         '',
//         "",
//         0],
//     (error) => { if (error) { console.log(error); } }
// );
// dataBaseObject.run(
//     sqlInsertPeople,
//     [
//         4,
//         7,
//         'ПЕТР   ',
//         'АФАНАСЬЕВ',
//         'ЕГОРОВИЧ    ',
//         '1902 г',
//         'Неизвестна',
//         '',
//         'В 1944-1945 гг. служил в рядах Рабоче-крестьянской Красной армии., в Забайкальском военном округе. Участник боевых действий против Японии.',
//         'Родился в Тогуйском наслеге Вилюйского района ЯАССР. В 1934-1942 гг. работал инспектром Нархозучета УНХУ Вилюйского района.',
//         'Медаль «За отвагу», медаль «За победу над Германией в Великой Отечественной войне 1941-1945 гг.», медаль «Двадцать лет Победы в Великой Отечественной войне 1941-1945 гг.», медаль «50 лет Вооруженных Сил СССР», медаль «За доблестный труд в Великой Отечественной войне 1941-1945 гг.", Народный знак "25 лет победы в Великой Отечественной войне".',
//         'нет информации',
//         "",
//         0],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInsertPeople,
//     [
//         5,
//         7,
//         'ЕГОР    ',
//         'БАЛАНОВ',
//         'ДМИТРИЕВИЧ     ',
//         '22.03.1917 г.',
//         '1986гг.',
//         '',
//         'В 1943г. призван в Рабоче-крестьянскую Красную армию, служил в составе авиации ефрейтором в войне против Японии.',
//         'Начал трудовую деятельность в 1933 г. с работы учителем в Крест-Хальджайской начальной школе. В 1934-1939 гг. -заведующий избы-читальни, в 1939 г. выдвинулся на должность инспектора района по политпросветительной работе. В 1942 году поступил на работу приемщиком заготовки скота. В 1946-1948 гг. - заготовитель РПК, завхоз, дормастер, 1948-1955 гг. - участковый инспектор Таттинской и Томпонской инспектур ЦСУ СССР.',
//         'Медаль "За победу над Японией", Медаль "За доблестный труд в Великой Отечественной Войне 1941-1945гг"',
//         '',
//         "",
//         0],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInsertPeople,
//     [
//         4,
//         20,
//         'Леонил    ',
//         'Костров',
//         'Констанитинвич     ',
//         '22.03.1917 г.',
//         '1986гг.',
//         '',
//         'В 1943г. призван в Рабоче-крестьянскую Красную армию, служил в составе авиации ефрейтором в войне против Японии.',
//         'Начал трудовую деятельность в 1933 г. с работы учителем в Крест-Хальджайской начальной школе. В 1934-1939 гг. -заведующий избы-читальни, в 1939 г. выдвинулся на должность инспектора района по политпросветительной работе. В 1942 году поступил на работу приемщиком заготовки скота. В 1946-1948 гг. - заготовитель РПК, завхоз, дормастер, 1948-1955 гг. - участковый инспектор Таттинской и Томпонской инспектур ЦСУ СССР.',
//         'Медаль "За победу над Японией", Медаль "За доблестный труд в Великой Отечественной Войне 1941-1945гг"',
//         '',
//         "",
//         0],
//     (error) => { if (error) { console.log(error); } }
// );

// dataBaseObject.run(
//     sqlInsertPeople,
//     [
//         5,
//         20,
//         'Леонил    ',
//         'Леонтьев',
//         'Констанитинвич     ',
//         '22.03.1917 г.',
//         '1986гг.',
//         '',
//         'В 1943г. призван в Рабоче-крестьянскую Красную армию, служил в составе авиации ефрейтором в войне против Японии.',
//         'Начал трудовую деятельность в 1933 г. с работы учителем в Крест-Хальджайской начальной школе. В 1934-1939 гг. -заведующий избы-читальни, в 1939 г. выдвинулся на должность инспектора района по политпросветительной работе. В 1942 году поступил на работу приемщиком заготовки скота. В 1946-1948 гг. - заготовитель РПК, завхоз, дормастер, 1948-1955 гг. - участковый инспектор Таттинской и Томпонской инспектур ЦСУ СССР.',
//         'Медаль "За победу над Японией", Медаль "За доблестный труд в Великой Отечественной Войне 1941-1945гг"',
//         '',
//         "",
//         0],
//     (error) => { if (error) { console.log(error); } }
// );

// sql = `DELETE FROM people WHERE id = ?`;
// dataBaseObject.run(sql,[4],(error)=>{
//     if(error) return console.log(error.message);
// });

// query the data
// sql = 'SELECT * FROM people';
// dataBaseObject.all(sql, [], (error, rows) => {
//     if (error) {
//         return console.log(err.message);
//     }

//     rows.forEach((row) => {
//         console.log(row);
//     })
// })

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


let sqlSelectRegions = 'SELECT * FROM regions';
let responseArrayRegions = [];


dataBaseObject.all(sqlSelectRegions, [], (error, rows) => {
    if (error) {
        return console.log(err.message);
    }

    rows.forEach((row) => {
        responseArrayRegions.push(row);
    })
})


let sqlSelectSex = 'SELECT * FROM sex';
let responseArraySex = [];

dataBaseObject.all(sqlSelectSex, [], (error, rows) => {
    if (error) {
        return console.log(err.message);
    }

    rows.forEach((row) => {
        responseArraySex.push(row)
    })
})

let arrayAllPeaple = [];
let sqlSelectPeople = `
    SELECT 
        people.id ,
        regions.name_region,
        people.surname,
        people.patronymic,
        people.birth_year,
        people.death_year,
        people.gos_stat_info,
        people.war_description,
        people.reward_list,
        people.photo,
        people.position,
        sex.name_sex         
    FROM 
        people,regions,sex 
    WHERE people.region_id = regions.id_region AND people.sex = sex.id_sex`;

dataBaseObject.all(sqlSelectPeople, [], (error, rows) => {
    if (error) {
        return console.log(err.message);
    }

    rows.forEach((row) => {
        // console.log(row)
        arrayAllPeaple.push(row);
    })
})


/*Requests*/
//GET
// Получить массив регионов
app.get('/api/regions', (req, res) => {
    res.status(200).json(responseArrayRegions);
});

// Получить массив полов
app.get('/api/sex', (req, res) => {
    res.status(200).json(responseArraySex);
});

app.get('/api/people', (req, res) => {
    res.status(200).json(arrayAllPeaple);
})


// //POST "CREATE"
// app.post(`${urlRequest}`, (req, res) => {

// });

// //DELETE
// app.delete(`${urlRequest}/:id`, (req, res) => {

// });

// //PUT
// app.put(`${urlRequest}/:id`, (req, res) => {

// });

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

