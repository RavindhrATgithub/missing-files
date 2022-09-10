const { calculateObjectSize } = require("bson");
const { response } = require("express");
const e = require("express");
var express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;
//const  mongoose  = require("mongoose")
var app = express();


app.use(cors());

var MongoClient = require("mongodb").MongoClient;

app.get("/test", (req, res) => {
  res.send("hello from server");
});

app.get("/", (req, res) => {
  if (req.query.Year == 3) {
    console.log("this is 3rd year");

    var url =
      "mongodb+srv://newUser:eXtG1fHdLfKLxWsc@firstdb.fp4ty.mongodb.net/mydb?retryWrites=true&w=majority";
    MongoClient.connect(url, function (err, db) {
      var flag = 1;
      if (err) throw err;
      var dbo = db.db("mydb");

      dbo
        .collection("UserName3")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            for (var i = 0; i < result.length; i++) {
              if (req.query.Username == result[i].UserName) {
                flag = 0;
              }
            }

            if (flag) setflag();
            else {
              res.send("<h2>!!!   You have already responded   !!!</h2>");
            }
          }
        });
    });

    function setflag() {
      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");

        const UserName = { UserName: req.query.Username };
        dbo.collection("UserName3").insertOne(UserName, function (err, res) {
          if (err) throw err;
          console.log("username entered ");
          console.log();
        });
      });

      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");

        var sub1div1five = 0,
          sub1div1four = 0,
          sub1div1three = 0,
          sub1div1two = 0,
          sub1div1one = 0;
        var sub1div2five = 0,
          sub1div2four = 0,
          sub1div2three = 0,
          sub1div2two = 0,
          sub1div2one = 0;
        var sub1div3five = 0,
          sub1div3four = 0,
          sub1div3three = 0,
          sub1div3two = 0,
          sub1div3one = 0;
        var sub1div4five = 0,
          sub1div4four = 0,
          sub1div4three = 0,
          sub1div4two = 0,
          sub1div4one = 0;

        var sub1temp1 = parseInt(
          (parseInt(req.query.sub1ans1) +
            parseInt(req.query.sub1ans2) +
            parseInt(req.query.sub1ans3) +
            parseInt(req.query.sub1ans4) +
            parseInt(req.query.sub1ans5)) /
            5
        );
        if (sub1temp1 == 5) sub1div1five = 1;
        else if (sub1temp1 == 4) sub1div1four = 1;
        else if (sub1temp1 == 3) sub1div1three = 1;
        else if (sub1temp1 == 2) sub1div1two = 1;
        else sub1div1one = 1;

        var sub1temp2 = parseInt(
          (parseInt(req.query.sub1ans6) +
            parseInt(req.query.sub1ans7) +
            parseInt(req.query.sub1ans8) +
            parseInt(req.query.sub1ans9) +
            parseInt(req.query.sub1ans10)) /
            5
        );
        if (sub1temp2 == 5) sub1div2five = 1;
        else if (sub1temp2 == 4) sub1div2four = 1;
        else if (sub1temp2 == 3) sub1div2three = 1;
        else if (sub1temp2 == 2) sub1div2two = 1;
        else sub1div2one = 1;

        var sub1temp3 = parseInt(
          (parseInt(req.query.sub1ans11) +
            parseInt(req.query.sub1ans12) +
            parseInt(req.query.sub1ans13) +
            parseInt(req.query.sub1ans14) +
            parseInt(req.query.sub1ans15)) /
            5
        );
        if (sub1temp3 == 5) sub1div3five = 1;
        else if (sub1temp3 == 4) sub1div3four = 1;
        else if (sub1temp3 == 3) sub1div3three = 1;
        else if (sub1temp3 == 2) sub1div3two = 1;
        else sub1div3one = 1;

        var sub1temp4 = parseInt(
          (parseInt(req.query.sub1ans16) +
            parseInt(req.query.sub1ans17) +
            parseInt(req.query.sub1ans18) +
            parseInt(req.query.sub1ans19) +
            parseInt(req.query.sub1ans20)) /
            5
        );
        if (sub1temp4 == 5) sub1div4five = 1;
        else if (sub1temp4 == 4) sub1div4four = 1;
        else if (sub1temp4 == 3) sub1div4three = 1;
        else if (sub1temp4 == 2) sub1div4two = 1;
        else sub1div4one = 1;

        const ruff1 = {
          div1one: sub1div1one,
          div1two: sub1div1two,
          div1three: sub1div1three,
          div1four: sub1div1four,
          div1five: sub1div1five,
          div2one: sub1div2one,
          div2two: sub1div2two,
          div2three: sub1div2three,
          div2four: sub1div2four,
          div2five: sub1div2five,
          div3one: sub1div3one,
          div3two: sub1div3two,
          div3three: sub1div3three,
          div3four: sub1div3four,
          div3five: sub1div3five,
          div4one: sub1div4one,
          div4two: sub1div4two,
          div4three: sub1div4three,
          div4four: sub1div4four,
          div4five: sub1div4five,
        };
        dbo.collection("THIRDsub1add1").insertOne(ruff1, function (err, res) {
          if (err) throw err;
          console.log("1st subject inserted Addional ");
          console.log(
            sub1temp1 + "" + sub1temp2 + "" + sub1temp3 + "" + sub1temp4
          );
        });

        // this is second additional

        MongoClient.connect(url, function (err, db) {
          if (err) throw err;
          var dbo = db.db("mydb");

          var sub2div1five = 0,
            sub2div1four = 0,
            sub2div1three = 0,
            sub2div1two = 0,
            sub2div1one = 0;
          var sub2div2five = 0,
            sub2div2four = 0,
            sub2div2three = 0,
            sub2div2two = 0,
            sub2div2one = 0;
          var sub2div3five = 0,
            sub2div3four = 0,
            sub2div3three = 0,
            sub2div3two = 0,
            sub2div3one = 0;
          var sub2div4five = 0,
            sub2div4four = 0,
            sub2div4three = 0,
            sub2div4two = 0,
            sub2div4one = 0;

          var sub2temp1 = parseInt(
            (parseInt(req.query.sub2ans1) +
              parseInt(req.query.sub2ans2) +
              parseInt(req.query.sub2ans3) +
              parseInt(req.query.sub2ans4) +
              parseInt(req.query.sub2ans5)) /
              5
          );
          if (sub2temp1 == 5) sub2div1five = 1;
          else if (sub2temp1 == 4) sub2div1four = 1;
          else if (sub2temp1 == 3) sub2div1three = 1;
          else if (sub2temp1 == 2) sub2div1two = 1;
          else sub2div1one = 1;

          var sub2temp2 = parseInt(
            (parseInt(req.query.sub2ans6) +
              parseInt(req.query.sub2ans7) +
              parseInt(req.query.sub2ans8) +
              parseInt(req.query.sub2ans9) +
              parseInt(req.query.sub2ans10)) /
              5
          );
          if (sub2temp2 == 5) sub2div2five = 1;
          else if (sub2temp2 == 4) sub2div2four = 1;
          else if (sub2temp2 == 3) sub2div2three = 1;
          else if (sub2temp2 == 2) sub2div2two = 1;
          else sub2div2one = 1;

          var sub2temp3 = parseInt(
            (parseInt(req.query.sub2ans11) +
              parseInt(req.query.sub2ans12) +
              parseInt(req.query.sub2ans13) +
              parseInt(req.query.sub2ans14) +
              parseInt(req.query.sub2ans15)) /
              5
          );
          if (sub2temp3 == 5) sub2div3five = 1;
          else if (sub2temp3 == 4) sub2div3four = 1;
          else if (sub2temp3 == 3) sub2div3three = 1;
          else if (sub2temp3 == 2) sub2div3two = 1;
          else sub2div3one = 1;
          var sub2temp4 = parseInt(
            (parseInt(req.query.sub2ans16) +
              parseInt(req.query.sub2ans17) +
              parseInt(req.query.sub2ans18) +
              parseInt(req.query.sub2ans19) +
              parseInt(req.query.sub2ans20)) /
              5
          );
          if (sub2temp4 == 5) sub2div4five = 1;
          else if (sub2temp4 == 4) sub2div4four = 1;
          else if (sub2temp4 == 3) sub2div4three = 1;
          else if (sub2temp4 == 2) sub2div4two = 1;
          else sub2div4one = 1;

          const ruff1 = {
            div1one: sub2div1one,
            div1two: sub2div1two,
            div1three: sub2div1three,
            div1four: sub2div1four,
            div1five: sub2div1five,
            div2one: sub2div2one,
            div2two: sub2div2two,
            div2three: sub2div2three,
            div2four: sub2div2four,
            div2five: sub2div2five,
            div3one: sub2div3one,
            div3two: sub2div3two,
            div3three: sub2div3three,
            div3four: sub2div3four,
            div3five: sub2div3five,
            div4one: sub2div4one,
            div4two: sub2div4two,
            div4three: sub2div4three,
            div4four: sub2div4four,
            div4five: sub2div4five,
          };
          dbo.collection("THIRDsub2add1").insertOne(ruff1, function (err, res) {
            if (err) throw err;
            console.log("1st subject inserted Addional ");
            console.log(
              sub2temp1 + "" + sub2temp2 + "" + sub2temp3 + "" + sub2temp4
            );
          });
        });

        //this is third additional

        MongoClient.connect(url, function (err, db) {
          if (err) throw err;
          var dbo = db.db("mydb");

          var sub3div1five = 0,
            sub3div1four = 0,
            sub3div1three = 0,
            sub3div1two = 0,
            sub3div1one = 0;
          var sub3div2five = 0,
            sub3div2four = 0,
            sub3div2three = 0,
            sub3div2two = 0,
            sub3div2one = 0;
          var sub3div3five = 0,
            sub3div3four = 0,
            sub3div3three = 0,
            sub3div3two = 0,
            sub3div3one = 0;
          var sub3div4five = 0,
            sub3div4four = 0,
            sub3div4three = 0,
            sub3div4two = 0,
            sub3div4one = 0;

          var sub3temp1 = parseInt(
            (parseInt(req.query.sub3ans1) +
              parseInt(req.query.sub3ans2) +
              parseInt(req.query.sub3ans3) +
              parseInt(req.query.sub3ans4) +
              parseInt(req.query.sub3ans5)) /
              5
          );
          if (sub3temp1 == 5) sub3div1five = 1;
          else if (sub3temp1 == 4) sub3div1four = 1;
          else if (sub3temp1 == 3) sub3div1three = 1;
          else if (sub3temp1 == 2) sub3div1two = 1;
          else sub3div1one = 1;

          var sub3temp2 = parseInt(
            (parseInt(req.query.sub3ans6) +
              parseInt(req.query.sub3ans7) +
              parseInt(req.query.sub3ans8) +
              parseInt(req.query.sub3ans9) +
              parseInt(req.query.sub3ans10)) /
              5
          );
          if (sub3temp2 == 5) sub3div2five = 1;
          else if (sub3temp2 == 4) sub3div2four = 1;
          else if (sub3temp2 == 3) sub3div2three = 1;
          else if (sub3temp2 == 2) sub3div2two = 1;
          else sub3div2one = 1;

          var sub3temp3 = parseInt(
            (parseInt(req.query.sub3ans11) +
              parseInt(req.query.sub3ans12) +
              parseInt(req.query.sub3ans13) +
              parseInt(req.query.sub3ans14) +
              parseInt(req.query.sub3ans15)) /
              5
          );
          if (sub3temp3 == 5) sub3div3five = 1;
          else if (sub3temp3 == 4) sub3div3four = 1;
          else if (sub3temp3 == 3) sub3div3three = 1;
          else if (sub3temp3 == 2) sub3div3two = 1;
          else sub3div3one = 1;

          var sub3temp4 = parseInt(
            (parseInt(req.query.sub3ans16) +
              parseInt(req.query.sub3ans17) +
              parseInt(req.query.sub3ans18) +
              parseInt(req.query.sub3ans19) +
              parseInt(req.query.sub3ans20)) /
              5
          );
          if (sub3temp4 == 5) sub3div4five = 1;
          else if (sub3temp4 == 4) sub3div4four = 1;
          else if (sub3temp4 == 3) sub3div4three = 1;
          else if (sub3temp4 == 2) sub3div4two = 1;
          else sub3div4one = 1;

          const ruff1 = {
            div1one: sub3div1one,
            div1two: sub3div1two,
            div1three: sub3div1three,
            div1four: sub3div1four,
            div1five: sub3div1five,
            div2one: sub3div2one,
            div2two: sub3div2two,
            div2three: sub3div2three,
            div2four: sub3div2four,
            div2five: sub3div2five,
            div3one: sub3div3one,
            div3two: sub3div3two,
            div3three: sub3div3three,
            div3four: sub3div3four,
            div3five: sub3div3five,
            div4one: sub3div4one,
            div4two: sub3div4two,
            div4three: sub3div4three,
            div4four: sub3div4four,
            div4five: sub3div4five,
          };
          dbo.collection("THIRDsub3add1").insertOne(ruff1, function (err, res) {
            if (err) throw err;
            console.log("1st subject inserted Addional ");
            console.log(
              sub3temp1 + "" + sub3temp2 + "" + sub3temp3 + "" + sub3temp4
            );
          });
        });

        //this is fourth additional

        MongoClient.connect(url, function (err, db) {
          if (err) throw err;
          var dbo = db.db("mydb");
          var sub4div1five = 0,
            sub4div1four = 0,
            sub4div1three = 0,
            sub4div1two = 0,
            sub4div1one = 0;
          var sub4div2five = 0,
            sub4div2four = 0,
            sub4div2three = 0,
            sub4div2two = 0,
            sub4div2one = 0;
          var sub4div3five = 0,
            sub4div3four = 0,
            sub4div3three = 0,
            sub4div3two = 0,
            sub4div3one = 0;
          var sub4div4five = 0,
            sub4div4four = 0,
            sub4div4three = 0,
            sub4div4two = 0,
            sub4div4one = 0;
          var sub4temp1 = parseInt(
            (parseInt(req.query.sub4ans1) +
              parseInt(req.query.sub4ans2) +
              parseInt(req.query.sub4ans3) +
              parseInt(req.query.sub4ans4) +
              parseInt(req.query.sub4ans5)) /
              5
          );
          if (sub4temp1 == 5) sub4div1five = 1;
          else if (sub4temp1 == 4) sub4div1four = 1;
          else if (sub4temp1 == 3) sub4div1three = 1;
          else if (sub4temp1 == 2) sub4div1two = 1;
          else sub4div1one = 1;
          var sub4temp2 = parseInt(
            (parseInt(req.query.sub4ans6) +
              parseInt(req.query.sub4ans7) +
              parseInt(req.query.sub4ans8) +
              parseInt(req.query.sub4ans9) +
              parseInt(req.query.sub4ans10)) /
              5
          );
          if (sub4temp2 == 5) sub4div2five = 1;
          else if (sub4temp2 == 4) sub4div2four = 1;
          else if (sub4temp2 == 3) sub4div2three = 1;
          else if (sub4temp2 == 2) sub4div2two = 1;
          else sub4div2one = 1;
          var sub4temp3 = parseInt(
            (parseInt(req.query.sub4ans11) +
              parseInt(req.query.sub4ans12) +
              parseInt(req.query.sub4ans13) +
              parseInt(req.query.sub4ans14) +
              parseInt(req.query.sub4ans15)) /
              5
          );
          if (sub4temp3 == 5) sub4div3five = 1;
          else if (sub4temp3 == 4) sub4div3four = 1;
          else if (sub4temp3 == 3) sub4div3three = 1;
          else if (sub4temp3 == 2) sub4div3two = 1;
          else sub4div3one = 1;
          var sub4temp4 = parseInt(
            (parseInt(req.query.sub4ans16) +
              parseInt(req.query.sub4ans17) +
              parseInt(req.query.sub4ans18) +
              parseInt(req.query.sub4ans19) +
              parseInt(req.query.sub4ans20)) /
              5
          );
          if (sub4temp4 == 5) sub4div4five = 1;
          else if (sub4temp4 == 4) sub4div4four = 1;
          else if (sub4temp4 == 3) sub4div4three = 1;
          else if (sub4temp4 == 2) sub4div4two = 1;
          else sub4div4one = 1;
          const ruff1 = {
            div1one: sub4div1one,
            div1two: sub4div1two,
            div1three: sub4div1three,
            div1four: sub4div1four,
            div1five: sub4div1five,
            div2one: sub4div2one,
            div2two: sub4div2two,
            div2three: sub4div2three,
            div2four: sub4div2four,
            div2five: sub4div2five,
            div3one: sub4div3one,
            div3two: sub4div3two,
            div3three: sub4div3three,
            div3four: sub4div3four,
            div3five: sub4div3five,
            div4one: sub4div4one,
            div4two: sub4div4two,
            div4three: sub4div4three,
            div4four: sub4div4four,
            div4five: sub4div4five,
          };
          dbo.collection("THIRDsub4add1").insertOne(ruff1, function (err, res) {
            if (err) throw err;
            console.log("1st subject inserted Addional ");
            console.log(
              sub4temp1 + "" + sub4temp2 + "" + sub4temp3 + "" + sub4temp4
            );
          });
        });

        // this is fifth addional

        MongoClient.connect(url, function (err, db) {
          if (err) throw err;
          var dbo = db.db("mydb");
          var sub5div1five = 0,
            sub5div1four = 0,
            sub5div1three = 0,
            sub5div1two = 0,
            sub5div1one = 0;
          var sub5div2five = 0,
            sub5div2four = 0,
            sub5div2three = 0,
            sub5div2two = 0,
            sub5div2one = 0;
          var sub5div3five = 0,
            sub5div3four = 0,
            sub5div3three = 0,
            sub5div3two = 0,
            sub5div3one = 0;
          var sub5div4five = 0,
            sub5div4four = 0,
            sub5div4three = 0,
            sub5div4two = 0,
            sub5div4one = 0;
          var sub5temp1 = parseInt(
            (parseInt(req.query.sub5ans1) +
              parseInt(req.query.sub5ans2) +
              parseInt(req.query.sub5ans3) +
              parseInt(req.query.sub5ans4) +
              parseInt(req.query.sub5ans5)) /
              5
          );
          if (sub5temp1 == 5) sub5div1five = 1;
          else if (sub5temp1 == 4) sub5div1four = 1;
          else if (sub5temp1 == 3) sub5div1three = 1;
          else if (sub5temp1 == 2) sub5div1two = 1;
          else sub5div1one = 1;
          var sub5temp2 = parseInt(
            (parseInt(req.query.sub5ans6) +
              parseInt(req.query.sub5ans7) +
              parseInt(req.query.sub5ans8) +
              parseInt(req.query.sub5ans9) +
              parseInt(req.query.sub5ans10)) /
              5
          );
          if (sub5temp2 == 5) sub5div2five = 1;
          else if (sub5temp2 == 4) sub5div2four = 1;
          else if (sub5temp2 == 3) sub5div2three = 1;
          else if (sub5temp2 == 2) sub5div2two = 1;
          else sub5div2one = 1;
          var sub5temp3 = parseInt(
            (parseInt(req.query.sub5ans11) +
              parseInt(req.query.sub5ans12) +
              parseInt(req.query.sub5ans13) +
              parseInt(req.query.sub5ans14) +
              parseInt(req.query.sub5ans15)) /
              5
          );
          if (sub5temp3 == 5) sub5div3five = 1;
          else if (sub5temp3 == 4) sub5div3four = 1;
          else if (sub5temp3 == 3) sub5div3three = 1;
          else if (sub5temp3 == 2) sub5div3two = 1;
          else sub5div3one = 1;
          var sub5temp4 = parseInt(
            (parseInt(req.query.sub5ans16) +
              parseInt(req.query.sub5ans17) +
              parseInt(req.query.sub5ans18) +
              parseInt(req.query.sub5ans19) +
              parseInt(req.query.sub5ans20)) /
              5
          );
          if (sub5temp4 == 5) sub5div4five = 1;
          else if (sub5temp4 == 4) sub5div4four = 1;
          else if (sub5temp4 == 3) sub5div4three = 1;
          else if (sub5temp4 == 2) sub5div4two = 1;
          else sub5div4one = 1;
          const ruff1 = {
            div1one: sub5div1one,
            div1two: sub5div1two,
            div1three: sub5div1three,
            div1four: sub5div1four,
            div1five: sub5div1five,
            div2one: sub5div2one,
            div2two: sub5div2two,
            div2three: sub5div2three,
            div2four: sub5div2four,
            div2five: sub5div2five,
            div3one: sub5div3one,
            div3two: sub5div3two,
            div3three: sub5div3three,
            div3four: sub5div3four,
            div3five: sub5div3five,
            div4one: sub5div4one,
            div4two: sub5div4two,
            div4three: sub5div4three,
            div4four: sub5div4four,
            div4five: sub5div4five,
          };
          dbo.collection("THIRDsub5add1").insertOne(ruff1, function (err, res) {
            if (err) throw err;
            console.log("1st subject inserted Addional ");
            console.log(
              sub5temp1 + "" + sub5temp2 + "" + sub5temp3 + "" + sub5temp4
            );
          });
        });
        //this is sixth addional

        MongoClient.connect(url, function (err, db) {
          if (err) throw err;
          var dbo = db.db("mydb");
          var sub6div1five = 0,
            sub6div1four = 0,
            sub6div1three = 0,
            sub6div1two = 0,
            sub6div1one = 0;
          var sub6div2five = 0,
            sub6div2four = 0,
            sub6div2three = 0,
            sub6div2two = 0,
            sub6div2one = 0;
          var sub6div3five = 0,
            sub6div3four = 0,
            sub6div3three = 0,
            sub6div3two = 0,
            sub6div3one = 0;
          var sub6div4five = 0,
            sub6div4four = 0,
            sub6div4three = 0,
            sub6div4two = 0,
            sub6div4one = 0;
          var sub6temp1 = parseInt(
            (parseInt(req.query.sub6ans1) +
              parseInt(req.query.sub6ans2) +
              parseInt(req.query.sub6ans3) +
              parseInt(req.query.sub6ans4) +
              parseInt(req.query.sub6ans5)) /
              5
          );
          if (sub6temp1 == 5) sub6div1five = 1;
          else if (sub6temp1 == 4) sub6div1four = 1;
          else if (sub6temp1 == 3) sub6div1three = 1;
          else if (sub6temp1 == 2) sub6div1two = 1;
          else sub6div1one = 1;
          var sub6temp2 = parseInt(
            (parseInt(req.query.sub6ans6) +
              parseInt(req.query.sub6ans7) +
              parseInt(req.query.sub6ans8) +
              parseInt(req.query.sub6ans9) +
              parseInt(req.query.sub6ans10)) /
              5
          );
          if (sub6temp2 == 5) sub6div2five = 1;
          else if (sub6temp2 == 4) sub6div2four = 1;
          else if (sub6temp2 == 3) sub6div2three = 1;
          else if (sub6temp2 == 2) sub6div2two = 1;
          else sub6div2one = 1;
          var sub6temp3 = parseInt(
            (parseInt(req.query.sub6ans11) +
              parseInt(req.query.sub6ans12) +
              parseInt(req.query.sub6ans13) +
              parseInt(req.query.sub6ans14) +
              parseInt(req.query.sub6ans15)) /
              5
          );
          if (sub6temp3 == 5) sub6div3five = 1;
          else if (sub6temp3 == 4) sub6div3four = 1;
          else if (sub6temp3 == 3) sub6div3three = 1;
          else if (sub6temp3 == 2) sub6div3two = 1;
          else sub6div3one = 1;
          var sub6temp4 = parseInt(
            (parseInt(req.query.sub6ans16) +
              parseInt(req.query.sub6ans17) +
              parseInt(req.query.sub6ans18) +
              parseInt(req.query.sub6ans19) +
              parseInt(req.query.sub6ans20)) /
              5
          );
          if (sub6temp4 == 5) sub6div4five = 1;
          else if (sub6temp4 == 4) sub6div4four = 1;
          else if (sub6temp4 == 3) sub6div4three = 1;
          else if (sub6temp4 == 2) sub6div4two = 1;
          else sub6div4one = 1;
          const ruff1 = {
            div1one: sub6div1one,
            div1two: sub6div1two,
            div1three: sub6div1three,
            div1four: sub6div1four,
            div1five: sub6div1five,
            div2one: sub6div2one,
            div2two: sub6div2two,
            div2three: sub6div2three,
            div2four: sub6div2four,
            div2five: sub6div2five,
            div3one: sub6div3one,
            div3two: sub6div3two,
            div3three: sub6div3three,
            div3four: sub6div3four,
            div3five: sub6div3five,
            div4one: sub6div4one,
            div4two: sub6div4two,
            div4three: sub6div4three,
            div4four: sub6div4four,
            div4five: sub6div4five,
          };
          dbo.collection("THIRDsub6add1").insertOne(ruff1, function (err, res) {
            if (err) throw err;
            console.log("1st subject inserted Addional ");
            console.log(
              sub6temp1 + "" + sub6temp2 + "" + sub6temp3 + "" + sub6temp4
            );
          });
        });

        const myobj1 = {
          Excellent: req.query.E1,
          VeryGood: req.query.V1,
          Good: req.query.G1,
          Satisfaction: req.query.S1,
          Poor: req.query.P1,
        };
        dbo.collection("THIRDsub1").insertOne(myobj1, function (err, res) {
          if (err) throw err;
          console.log("1st subject inserted");
        });

        const myobj2 = {
          Excellent: req.query.E2,
          VeryGood: req.query.V2,
          Good: req.query.G2,
          Satisfaction: req.query.S2,
          Poor: req.query.P2,
        };
        dbo.collection("THIRDsub2").insertOne(myobj2, function (err, res) {
          if (err) throw err;
          console.log("2nd subject inserted");
        });

        if (req.query.selective == "AI") {
          const myobj3 = {
            Excellent: req.query.E3,
            VeryGood: req.query.V3,
            Good: req.query.G3,
            Satisfaction: req.query.S3,
            Poor: req.query.P3,
          };
          dbo.collection("THIRDsub3").insertOne(myobj3, function (err, res) {
            if (err) throw err;
            console.log("3rd subject inserted");
          });
        } else {
          const myobj3 = {
            Excellent: req.query.E3,
            VeryGood: req.query.V3,
            Good: req.query.G3,
            Satisfaction: req.query.S3,
            Poor: req.query.P3,
          };
          dbo.collection("THIRDsub7").insertOne(myobj3, function (err, res) {
            if (err) throw err;
            console.log("3rd subject inserted");
          });
        }

        const myobj4 = {
          Excellent: req.query.E4,
          VeryGood: req.query.V4,
          Good: req.query.G4,
          Satisfaction: req.query.S4,
          Poor: req.query.P4,
        };
        dbo.collection("THIRDsub4").insertOne(myobj4, function (err, res) {
          if (err) throw err;
          console.log("4th subject inserted");
        });

        const myobj5 = {
          Excellent: req.query.E5,
          VeryGood: req.query.V5,
          Good: req.query.G5,
          Satisfaction: req.query.S5,
          Poor: req.query.P5,
        };
        dbo.collection("THIRDsub5").insertOne(myobj5, function (err, res) {
          if (err) throw err;
          console.log("5th subject inserted");
        });

        const myobj6 = {
          Excellent: req.query.E6,
          VeryGood: req.query.V6,
          Good: req.query.G6,
          Satisfaction: req.query.S6,
          Poor: req.query.P6,
        };
        dbo.collection("THIRDsub6").insertOne(myobj6, function (err, res) {
          if (err) throw err;
          console.log("6th subject inserted");
        });
      });
     
      res.send("<h1>Your responses has been recorded</h1>");
      
    }
  }

  if (req.query.Year == 2) {
    console.log("this is 2rd year");
    var url =
      "mongodb+srv://newUser:eXtG1fHdLfKLxWsc@firstdb.fp4ty.mongodb.net/mydb?retryWrites=true&w=majority";

    MongoClient.connect(url, function (err, db) {
      var flag = 1;
      if (err) throw err;
      var dbo = db.db("mydb");

      dbo
        .collection("UserName2")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            for (var i = 0; i < result.length; i++) {
              if (req.query.Username == result[i].UserName) {
                flag = 0;
              }
            }

            if (flag) setflag();
            else {
              res.send("<h2>!!!   You have already responded   !!!</h2>");
            }
          }
        });
    });

    function setflag() {
      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");

        const UserName = { UserName: req.query.Username };
        dbo.collection("UserName2").insertOne(UserName, function (err, res) {
          if (err) throw err;
          console.log("username entered ");
          console.log();
        });
      });

      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");

        var sub1div1five = 0,
          sub1div1four = 0,
          sub1div1three = 0,
          sub1div1two = 0,
          sub1div1one = 0;
        var sub1div2five = 0,
          sub1div2four = 0,
          sub1div2three = 0,
          sub1div2two = 0,
          sub1div2one = 0;
        var sub1div3five = 0,
          sub1div3four = 0,
          sub1div3three = 0,
          sub1div3two = 0,
          sub1div3one = 0;
        var sub1div4five = 0,
          sub1div4four = 0,
          sub1div4three = 0,
          sub1div4two = 0,
          sub1div4one = 0;

        var sub1temp1 = parseInt(
          (parseInt(req.query.sub1ans1) +
            parseInt(req.query.sub1ans2) +
            parseInt(req.query.sub1ans3) +
            parseInt(req.query.sub1ans4) +
            parseInt(req.query.sub1ans5)) /
            5
        );
        if (sub1temp1 == 5) sub1div1five = 1;
        else if (sub1temp1 == 4) sub1div1four = 1;
        else if (sub1temp1 == 3) sub1div1three = 1;
        else if (sub1temp1 == 2) sub1div1two = 1;
        else sub1div1one = 1;

        var sub1temp2 = parseInt(
          (parseInt(req.query.sub1ans6) +
            parseInt(req.query.sub1ans7) +
            parseInt(req.query.sub1ans8) +
            parseInt(req.query.sub1ans9) +
            parseInt(req.query.sub1ans10)) /
            5
        );
        if (sub1temp2 == 5) sub1div2five = 1;
        else if (sub1temp2 == 4) sub1div2four = 1;
        else if (sub1temp2 == 3) sub1div2three = 1;
        else if (sub1temp2 == 2) sub1div2two = 1;
        else sub1div2one = 1;

        var sub1temp3 = parseInt(
          (parseInt(req.query.sub1ans11) +
            parseInt(req.query.sub1ans12) +
            parseInt(req.query.sub1ans13) +
            parseInt(req.query.sub1ans14) +
            parseInt(req.query.sub1ans15)) /
            5
        );
        if (sub1temp3 == 5) sub1div3five = 1;
        else if (sub1temp3 == 4) sub1div3four = 1;
        else if (sub1temp3 == 3) sub1div3three = 1;
        else if (sub1temp3 == 2) sub1div3two = 1;
        else sub1div3one = 1;

        var sub1temp4 = parseInt(
          (parseInt(req.query.sub1ans16) +
            parseInt(req.query.sub1ans17) +
            parseInt(req.query.sub1ans18) +
            parseInt(req.query.sub1ans19) +
            parseInt(req.query.sub1ans20)) /
            5
        );
        if (sub1temp4 == 5) sub1div4five = 1;
        else if (sub1temp4 == 4) sub1div4four = 1;
        else if (sub1temp4 == 3) sub1div4three = 1;
        else if (sub1temp4 == 2) sub1div4two = 1;
        else sub1div4one = 1;

        const ruff1 = {
          div1one: sub1div1one,
          div1two: sub1div1two,
          div1three: sub1div1three,
          div1four: sub1div1four,
          div1five: sub1div1five,
          div2one: sub1div2one,
          div2two: sub1div2two,
          div2three: sub1div2three,
          div2four: sub1div2four,
          div2five: sub1div2five,
          div3one: sub1div3one,
          div3two: sub1div3two,
          div3three: sub1div3three,
          div3four: sub1div3four,
          div3five: sub1div3five,
          div4one: sub1div4one,
          div4two: sub1div4two,
          div4three: sub1div4three,
          div4four: sub1div4four,
          div4five: sub1div4five,
        };
        dbo.collection("SECONDsub1add1").insertOne(ruff1, function (err, res) {
          if (err) throw err;
          console.log("1st subject inserted Addional ");
          console.log(
            sub1temp1 + "" + sub1temp2 + "" + sub1temp3 + "" + sub1temp4
          );
        });

        // this is second additional

        MongoClient.connect(url, function (err, db) {
          if (err) throw err;
          var dbo = db.db("mydb");

          var sub2div1five = 0,
            sub2div1four = 0,
            sub2div1three = 0,
            sub2div1two = 0,
            sub2div1one = 0;
          var sub2div2five = 0,
            sub2div2four = 0,
            sub2div2three = 0,
            sub2div2two = 0,
            sub2div2one = 0;
          var sub2div3five = 0,
            sub2div3four = 0,
            sub2div3three = 0,
            sub2div3two = 0,
            sub2div3one = 0;
          var sub2div4five = 0,
            sub2div4four = 0,
            sub2div4three = 0,
            sub2div4two = 0,
            sub2div4one = 0;

          var sub2temp1 = parseInt(
            (parseInt(req.query.sub2ans1) +
              parseInt(req.query.sub2ans2) +
              parseInt(req.query.sub2ans3) +
              parseInt(req.query.sub2ans4) +
              parseInt(req.query.sub2ans5)) /
              5
          );
          if (sub2temp1 == 5) sub2div1five = 1;
          else if (sub2temp1 == 4) sub2div1four = 1;
          else if (sub2temp1 == 3) sub2div1three = 1;
          else if (sub2temp1 == 2) sub2div1two = 1;
          else sub2div1one = 1;

          var sub2temp2 = parseInt(
            (parseInt(req.query.sub2ans6) +
              parseInt(req.query.sub2ans7) +
              parseInt(req.query.sub2ans8) +
              parseInt(req.query.sub2ans9) +
              parseInt(req.query.sub2ans10)) /
              5
          );
          if (sub2temp2 == 5) sub2div2five = 1;
          else if (sub2temp2 == 4) sub2div2four = 1;
          else if (sub2temp2 == 3) sub2div2three = 1;
          else if (sub2temp2 == 2) sub2div2two = 1;
          else sub2div2one = 1;

          var sub2temp3 = parseInt(
            (parseInt(req.query.sub2ans11) +
              parseInt(req.query.sub2ans12) +
              parseInt(req.query.sub2ans13) +
              parseInt(req.query.sub2ans14) +
              parseInt(req.query.sub2ans15)) /
              5
          );
          if (sub2temp3 == 5) sub2div3five = 1;
          else if (sub2temp3 == 4) sub2div3four = 1;
          else if (sub2temp3 == 3) sub2div3three = 1;
          else if (sub2temp3 == 2) sub2div3two = 1;
          else sub2div3one = 1;
          var sub2temp4 = parseInt(
            (parseInt(req.query.sub2ans16) +
              parseInt(req.query.sub2ans17) +
              parseInt(req.query.sub2ans18) +
              parseInt(req.query.sub2ans19) +
              parseInt(req.query.sub2ans20)) /
              5
          );
          if (sub2temp4 == 5) sub2div4five = 1;
          else if (sub2temp4 == 4) sub2div4four = 1;
          else if (sub2temp4 == 3) sub2div4three = 1;
          else if (sub2temp4 == 2) sub2div4two = 1;
          else sub2div4one = 1;

          const ruff1 = {
            div1one: sub2div1one,
            div1two: sub2div1two,
            div1three: sub2div1three,
            div1four: sub2div1four,
            div1five: sub2div1five,
            div2one: sub2div2one,
            div2two: sub2div2two,
            div2three: sub2div2three,
            div2four: sub2div2four,
            div2five: sub2div2five,
            div3one: sub2div3one,
            div3two: sub2div3two,
            div3three: sub2div3three,
            div3four: sub2div3four,
            div3five: sub2div3five,
            div4one: sub2div4one,
            div4two: sub2div4two,
            div4three: sub2div4three,
            div4four: sub2div4four,
            div4five: sub2div4five,
          };
          dbo
            .collection("SECONDsub2add1")
            .insertOne(ruff1, function (err, res) {
              if (err) throw err;
              console.log("1st subject inserted Addional ");
              console.log(
                sub2temp1 + "" + sub2temp2 + "" + sub2temp3 + "" + sub2temp4
              );
            });
        });

        //this is third additional

        MongoClient.connect(url, function (err, db) {
          if (err) throw err;
          var dbo = db.db("mydb");

          var sub3div1five = 0,
            sub3div1four = 0,
            sub3div1three = 0,
            sub3div1two = 0,
            sub3div1one = 0;
          var sub3div2five = 0,
            sub3div2four = 0,
            sub3div2three = 0,
            sub3div2two = 0,
            sub3div2one = 0;
          var sub3div3five = 0,
            sub3div3four = 0,
            sub3div3three = 0,
            sub3div3two = 0,
            sub3div3one = 0;
          var sub3div4five = 0,
            sub3div4four = 0,
            sub3div4three = 0,
            sub3div4two = 0,
            sub3div4one = 0;

          var sub3temp1 = parseInt(
            (parseInt(req.query.sub3ans1) +
              parseInt(req.query.sub3ans2) +
              parseInt(req.query.sub3ans3) +
              parseInt(req.query.sub3ans4) +
              parseInt(req.query.sub3ans5)) /
              5
          );
          if (sub3temp1 == 5) sub3div1five = 1;
          else if (sub3temp1 == 4) sub3div1four = 1;
          else if (sub3temp1 == 3) sub3div1three = 1;
          else if (sub3temp1 == 2) sub3div1two = 1;
          else sub3div1one = 1;

          var sub3temp2 = parseInt(
            (parseInt(req.query.sub3ans6) +
              parseInt(req.query.sub3ans7) +
              parseInt(req.query.sub3ans8) +
              parseInt(req.query.sub3ans9) +
              parseInt(req.query.sub3ans10)) /
              5
          );
          if (sub3temp2 == 5) sub3div2five = 1;
          else if (sub3temp2 == 4) sub3div2four = 1;
          else if (sub3temp2 == 3) sub3div2three = 1;
          else if (sub3temp2 == 2) sub3div2two = 1;
          else sub3div2one = 1;

          var sub3temp3 = parseInt(
            (parseInt(req.query.sub3ans11) +
              parseInt(req.query.sub3ans12) +
              parseInt(req.query.sub3ans13) +
              parseInt(req.query.sub3ans14) +
              parseInt(req.query.sub3ans15)) /
              5
          );
          if (sub3temp3 == 5) sub3div3five = 1;
          else if (sub3temp3 == 4) sub3div3four = 1;
          else if (sub3temp3 == 3) sub3div3three = 1;
          else if (sub3temp3 == 2) sub3div3two = 1;
          else sub3div3one = 1;

          var sub3temp4 = parseInt(
            (parseInt(req.query.sub3ans16) +
              parseInt(req.query.sub3ans17) +
              parseInt(req.query.sub3ans18) +
              parseInt(req.query.sub3ans19) +
              parseInt(req.query.sub3ans20)) /
              5
          );
          if (sub3temp4 == 5) sub3div4five = 1;
          else if (sub3temp4 == 4) sub3div4four = 1;
          else if (sub3temp4 == 3) sub3div4three = 1;
          else if (sub3temp4 == 2) sub3div4two = 1;
          else sub3div4one = 1;

          const ruff1 = {
            div1one: sub3div1one,
            div1two: sub3div1two,
            div1three: sub3div1three,
            div1four: sub3div1four,
            div1five: sub3div1five,
            div2one: sub3div2one,
            div2two: sub3div2two,
            div2three: sub3div2three,
            div2four: sub3div2four,
            div2five: sub3div2five,
            div3one: sub3div3one,
            div3two: sub3div3two,
            div3three: sub3div3three,
            div3four: sub3div3four,
            div3five: sub3div3five,
            div4one: sub3div4one,
            div4two: sub3div4two,
            div4three: sub3div4three,
            div4four: sub3div4four,
            div4five: sub3div4five,
          };
          dbo
            .collection("SECONDsub3add1")
            .insertOne(ruff1, function (err, res) {
              if (err) throw err;
              console.log("1st subject inserted Addional ");
              console.log(
                sub3temp1 + "" + sub3temp2 + "" + sub3temp3 + "" + sub3temp4
              );
            });
        });

        //this is fourth additional

        MongoClient.connect(url, function (err, db) {
          if (err) throw err;
          var dbo = db.db("mydb");
          var sub4div1five = 0,
            sub4div1four = 0,
            sub4div1three = 0,
            sub4div1two = 0,
            sub4div1one = 0;
          var sub4div2five = 0,
            sub4div2four = 0,
            sub4div2three = 0,
            sub4div2two = 0,
            sub4div2one = 0;
          var sub4div3five = 0,
            sub4div3four = 0,
            sub4div3three = 0,
            sub4div3two = 0,
            sub4div3one = 0;
          var sub4div4five = 0,
            sub4div4four = 0,
            sub4div4three = 0,
            sub4div4two = 0,
            sub4div4one = 0;
          var sub4temp1 = parseInt(
            (parseInt(req.query.sub4ans1) +
              parseInt(req.query.sub4ans2) +
              parseInt(req.query.sub4ans3) +
              parseInt(req.query.sub4ans4) +
              parseInt(req.query.sub4ans5)) /
              5
          );
          if (sub4temp1 == 5) sub4div1five = 1;
          else if (sub4temp1 == 4) sub4div1four = 1;
          else if (sub4temp1 == 3) sub4div1three = 1;
          else if (sub4temp1 == 2) sub4div1two = 1;
          else sub4div1one = 1;
          var sub4temp2 = parseInt(
            (parseInt(req.query.sub4ans6) +
              parseInt(req.query.sub4ans7) +
              parseInt(req.query.sub4ans8) +
              parseInt(req.query.sub4ans9) +
              parseInt(req.query.sub4ans10)) /
              5
          );
          if (sub4temp2 == 5) sub4div2five = 1;
          else if (sub4temp2 == 4) sub4div2four = 1;
          else if (sub4temp2 == 3) sub4div2three = 1;
          else if (sub4temp2 == 2) sub4div2two = 1;
          else sub4div2one = 1;
          var sub4temp3 = parseInt(
            (parseInt(req.query.sub4ans11) +
              parseInt(req.query.sub4ans12) +
              parseInt(req.query.sub4ans13) +
              parseInt(req.query.sub4ans14) +
              parseInt(req.query.sub4ans15)) /
              5
          );
          if (sub4temp3 == 5) sub4div3five = 1;
          else if (sub4temp3 == 4) sub4div3four = 1;
          else if (sub4temp3 == 3) sub4div3three = 1;
          else if (sub4temp3 == 2) sub4div3two = 1;
          else sub4div3one = 1;
          var sub4temp4 = parseInt(
            (parseInt(req.query.sub4ans16) +
              parseInt(req.query.sub4ans17) +
              parseInt(req.query.sub4ans18) +
              parseInt(req.query.sub4ans19) +
              parseInt(req.query.sub4ans20)) /
              5
          );
          if (sub4temp4 == 5) sub4div4five = 1;
          else if (sub4temp4 == 4) sub4div4four = 1;
          else if (sub4temp4 == 3) sub4div4three = 1;
          else if (sub4temp4 == 2) sub4div4two = 1;
          else sub4div4one = 1;
          const ruff1 = {
            div1one: sub4div1one,
            div1two: sub4div1two,
            div1three: sub4div1three,
            div1four: sub4div1four,
            div1five: sub4div1five,
            div2one: sub4div2one,
            div2two: sub4div2two,
            div2three: sub4div2three,
            div2four: sub4div2four,
            div2five: sub4div2five,
            div3one: sub4div3one,
            div3two: sub4div3two,
            div3three: sub4div3three,
            div3four: sub4div3four,
            div3five: sub4div3five,
            div4one: sub4div4one,
            div4two: sub4div4two,
            div4three: sub4div4three,
            div4four: sub4div4four,
            div4five: sub4div4five,
          };
          dbo
            .collection("SECONDsub4add1")
            .insertOne(ruff1, function (err, res) {
              if (err) throw err;
              console.log("1st subject inserted Addional ");
              console.log(
                sub4temp1 + "" + sub4temp2 + "" + sub4temp3 + "" + sub4temp4
              );
            });
        });

        // this is fifth addional

        MongoClient.connect(url, function (err, db) {
          if (err) throw err;
          var dbo = db.db("mydb");
          var sub5div1five = 0,
            sub5div1four = 0,
            sub5div1three = 0,
            sub5div1two = 0,
            sub5div1one = 0;
          var sub5div2five = 0,
            sub5div2four = 0,
            sub5div2three = 0,
            sub5div2two = 0,
            sub5div2one = 0;
          var sub5div3five = 0,
            sub5div3four = 0,
            sub5div3three = 0,
            sub5div3two = 0,
            sub5div3one = 0;
          var sub5div4five = 0,
            sub5div4four = 0,
            sub5div4three = 0,
            sub5div4two = 0,
            sub5div4one = 0;
          var sub5temp1 = parseInt(
            (parseInt(req.query.sub5ans1) +
              parseInt(req.query.sub5ans2) +
              parseInt(req.query.sub5ans3) +
              parseInt(req.query.sub5ans4) +
              parseInt(req.query.sub5ans5)) /
              5
          );
          if (sub5temp1 == 5) sub5div1five = 1;
          else if (sub5temp1 == 4) sub5div1four = 1;
          else if (sub5temp1 == 3) sub5div1three = 1;
          else if (sub5temp1 == 2) sub5div1two = 1;
          else sub5div1one = 1;
          var sub5temp2 = parseInt(
            (parseInt(req.query.sub5ans6) +
              parseInt(req.query.sub5ans7) +
              parseInt(req.query.sub5ans8) +
              parseInt(req.query.sub5ans9) +
              parseInt(req.query.sub5ans10)) /
              5
          );
          if (sub5temp2 == 5) sub5div2five = 1;
          else if (sub5temp2 == 4) sub5div2four = 1;
          else if (sub5temp2 == 3) sub5div2three = 1;
          else if (sub5temp2 == 2) sub5div2two = 1;
          else sub5div2one = 1;
          var sub5temp3 = parseInt(
            (parseInt(req.query.sub5ans11) +
              parseInt(req.query.sub5ans12) +
              parseInt(req.query.sub5ans13) +
              parseInt(req.query.sub5ans14) +
              parseInt(req.query.sub5ans15)) /
              5
          );
          if (sub5temp3 == 5) sub5div3five = 1;
          else if (sub5temp3 == 4) sub5div3four = 1;
          else if (sub5temp3 == 3) sub5div3three = 1;
          else if (sub5temp3 == 2) sub5div3two = 1;
          else sub5div3one = 1;
          var sub5temp4 = parseInt(
            (parseInt(req.query.sub5ans16) +
              parseInt(req.query.sub5ans17) +
              parseInt(req.query.sub5ans18) +
              parseInt(req.query.sub5ans19) +
              parseInt(req.query.sub5ans20)) /
              5
          );
          if (sub5temp4 == 5) sub5div4five = 1;
          else if (sub5temp4 == 4) sub5div4four = 1;
          else if (sub5temp4 == 3) sub5div4three = 1;
          else if (sub5temp4 == 2) sub5div4two = 1;
          else sub5div4one = 1;
          const ruff1 = {
            div1one: sub5div1one,
            div1two: sub5div1two,
            div1three: sub5div1three,
            div1four: sub5div1four,
            div1five: sub5div1five,
            div2one: sub5div2one,
            div2two: sub5div2two,
            div2three: sub5div2three,
            div2four: sub5div2four,
            div2five: sub5div2five,
            div3one: sub5div3one,
            div3two: sub5div3two,
            div3three: sub5div3three,
            div3four: sub5div3four,
            div3five: sub5div3five,
            div4one: sub5div4one,
            div4two: sub5div4two,
            div4three: sub5div4three,
            div4four: sub5div4four,
            div4five: sub5div4five,
          };
          dbo
            .collection("SECONDsub5add1")
            .insertOne(ruff1, function (err, res) {
              if (err) throw err;
              console.log("1st subject inserted Addional ");
              console.log(
                sub5temp1 + "" + sub5temp2 + "" + sub5temp3 + "" + sub5temp4
              );
            });
        });
        //this is sixth addional

        MongoClient.connect(url, function (err, db) {
          if (err) throw err;
          var dbo = db.db("mydb");
          var sub6div1five = 0,
            sub6div1four = 0,
            sub6div1three = 0,
            sub6div1two = 0,
            sub6div1one = 0;
          var sub6div2five = 0,
            sub6div2four = 0,
            sub6div2three = 0,
            sub6div2two = 0,
            sub6div2one = 0;
          var sub6div3five = 0,
            sub6div3four = 0,
            sub6div3three = 0,
            sub6div3two = 0,
            sub6div3one = 0;
          var sub6div4five = 0,
            sub6div4four = 0,
            sub6div4three = 0,
            sub6div4two = 0,
            sub6div4one = 0;
          var sub6temp1 = parseInt(
            (parseInt(req.query.sub6ans1) +
              parseInt(req.query.sub6ans2) +
              parseInt(req.query.sub6ans3) +
              parseInt(req.query.sub6ans4) +
              parseInt(req.query.sub6ans5)) /
              5
          );
          if (sub6temp1 == 5) sub6div1five = 1;
          else if (sub6temp1 == 4) sub6div1four = 1;
          else if (sub6temp1 == 3) sub6div1three = 1;
          else if (sub6temp1 == 2) sub6div1two = 1;
          else sub6div1one = 1;
          var sub6temp2 = parseInt(
            (parseInt(req.query.sub6ans6) +
              parseInt(req.query.sub6ans7) +
              parseInt(req.query.sub6ans8) +
              parseInt(req.query.sub6ans9) +
              parseInt(req.query.sub6ans10)) /
              5
          );
          if (sub6temp2 == 5) sub6div2five = 1;
          else if (sub6temp2 == 4) sub6div2four = 1;
          else if (sub6temp2 == 3) sub6div2three = 1;
          else if (sub6temp2 == 2) sub6div2two = 1;
          else sub6div2one = 1;
          var sub6temp3 = parseInt(
            (parseInt(req.query.sub6ans11) +
              parseInt(req.query.sub6ans12) +
              parseInt(req.query.sub6ans13) +
              parseInt(req.query.sub6ans14) +
              parseInt(req.query.sub6ans15)) /
              5
          );
          if (sub6temp3 == 5) sub6div3five = 1;
          else if (sub6temp3 == 4) sub6div3four = 1;
          else if (sub6temp3 == 3) sub6div3three = 1;
          else if (sub6temp3 == 2) sub6div3two = 1;
          else sub6div3one = 1;
          var sub6temp4 = parseInt(
            (parseInt(req.query.sub6ans16) +
              parseInt(req.query.sub6ans17) +
              parseInt(req.query.sub6ans18) +
              parseInt(req.query.sub6ans19) +
              parseInt(req.query.sub6ans20)) /
              5
          );
          if (sub6temp4 == 5) sub6div4five = 1;
          else if (sub6temp4 == 4) sub6div4four = 1;
          else if (sub6temp4 == 3) sub6div4three = 1;
          else if (sub6temp4 == 2) sub6div4two = 1;
          else sub6div4one = 1;
          const ruff1 = {
            div1one: sub6div1one,
            div1two: sub6div1two,
            div1three: sub6div1three,
            div1four: sub6div1four,
            div1five: sub6div1five,
            div2one: sub6div2one,
            div2two: sub6div2two,
            div2three: sub6div2three,
            div2four: sub6div2four,
            div2five: sub6div2five,
            div3one: sub6div3one,
            div3two: sub6div3two,
            div3three: sub6div3three,
            div3four: sub6div3four,
            div3five: sub6div3five,
            div4one: sub6div4one,
            div4two: sub6div4two,
            div4three: sub6div4three,
            div4four: sub6div4four,
            div4five: sub6div4five,
          };
          dbo
            .collection("SECONDsub6add1")
            .insertOne(ruff1, function (err, res) {
              if (err) throw err;
              console.log("1st subject inserted Addional ");
              console.log(
                sub6temp1 + "" + sub6temp2 + "" + sub6temp3 + "" + sub6temp4
              );
            });
        });
      });
      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        const myobj1 = {
          Excellent: req.query.E1,
          VeryGood: req.query.V1,
          Good: req.query.G1,
          Satisfaction: req.query.S1,
          Poor: req.query.P1,
        };
        dbo.collection("SECONDsub1").insertOne(myobj1, function (err, res) {
          if (err) throw err;
          console.log("1st subject inserted");
        });

        const myobj2 = {
          Excellent: req.query.E2,
          VeryGood: req.query.V2,
          Good: req.query.G2,
          Satisfaction: req.query.S2,
          Poor: req.query.P2,
        };
        dbo.collection("SECONDsub2").insertOne(myobj2, function (err, res) {
          if (err) throw err;
          console.log("2nd subject inserted");
        });

        const myobj3 = {
          Excellent: req.query.E3,
          VeryGood: req.query.V3,
          Good: req.query.G3,
          Satisfaction: req.query.S3,
          Poor: req.query.P3,
        };
        dbo.collection("SECONDsub3").insertOne(myobj3, function (err, res) {
          if (err) throw err;
          console.log("3rd subject inserted");
        });

        const myobj4 = {
          Excellent: req.query.E4,
          VeryGood: req.query.V4,
          Good: req.query.G4,
          Satisfaction: req.query.S4,
          Poor: req.query.P4,
        };
        dbo.collection("SECONDsub4").insertOne(myobj4, function (err, res) {
          if (err) throw err;
          console.log("4th subject inserted");
        });

        const myobj5 = {
          Excellent: req.query.E5,
          VeryGood: req.query.V5,
          Good: req.query.G5,
          Satisfaction: req.query.S5,
          Poor: req.query.P5,
        };
        dbo.collection("SECONDsub5").insertOne(myobj5, function (err, res) {
          if (err) throw err;
          console.log("5th subject inserted");
        });

        const myobj6 = {
          Excellent: req.query.E6,
          VeryGood: req.query.V6,
          Good: req.query.G6,
          Satisfaction: req.query.S6,
          Poor: req.query.P6,
        };
        dbo.collection("SECONDsub6").insertOne(myobj6, function (err, res) {
          if (err) throw err;
          console.log("6th subject inserted");
        });
      });
      res.send("<h1>Your responses has been recorded</h1>");
    }
  }
});

app.get("/display", (req, res) => {
  if (req.query.Ayear == 2) {
    console.log("this is admin second year");
    // window.alert("Welcome Ruba mam!")
    var url =
      "mongodb+srv://newUser:eXtG1fHdLfKLxWsc@firstdb.fp4ty.mongodb.net/mydb?retryWrites=true&w=majority";
    var e = 0,
      v = 0,
      g = 0,
      s = 0,
      p = 0;
    res.write(
      "<p style='font-size:30px;text-align:center;color:rgb(250,0,0);font-weight:700;'>SECOND YEAR FEEDBACK RESPONSES</p>"
    );
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");

      dbo
        .collection("SECONDsub1")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:30px;text-align:center;color:rgb(20,20,20);font-weight:700;'>NUMBER OF STUDENTS RESPONSED   : " +
                49 +
                "</p><br>"
            );
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>PROBABILITY AND STATISTICS / 18MA301</p><hr>"
            );
            call(result);
          }
        });
      dbo
        .collection("SECONDsub2")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else { 
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>DIGITAL PRINCIPLES AND SYSTEM DESIGN / 18CS301</p><hr>"
            );
            call(result);                                                          
          }
        });

      dbo
        .collection("SECONDsub3")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>DATA STRUCTURES AND ALGORITHMS / 18CS302 </p><hr>"
            );
            call(result);
          }
        });
      dbo
        .collection("SECONDsub4")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>COMPUTER ORGANISATION AND ARCHITECTURE / 18CS303</p><hr>"
            );
            call(result);
          }
        });

      dbo
        .collection("SECONDsub5")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>OPERATING SYSTEMS / 18CS304</p><hr>"
            );

            call(result);
          }
        });
      dbo
        .collection("SECONDsub6")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>DATA STRUCTURES AND ALGORITHMS LABORATORY / 18CS305</p><hr>"
            );
            call(result);
          }
        });
        dbo
        .collection("THIRDsub3")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>OPERATING SYSTEMS LABORATORY / 18CS306</p><hr>"
            );
            call(result);
          }
        });
        
         
    });
    function call(result) {
      for (var i = 0; i < result.length; i++) {
        e += parseInt(result[i].Excellent);
        v += parseInt(result[i].VeryGood);
        g += parseInt(result[i].Good);
        s += parseInt(result[i].Satisfaction);
        p += parseInt(result[i].Poor);
      }
      var length = result.length;
      length *= 2;
      let V = (v / length) * 10;
      let G = (g / length) * 10;
      let P = (p / length) * 10;
      let S = (s / length) * 10;
      let E = (e / length) * 10;

      res.write(
        "<p style='font-weight:bold'> Excellent(5 marks): &nbsp; &nbsp; " +
          E.toFixed(0) +
          "%</p>"
      );
      res.write(
        "<p style='height:25px;border:1px solid black;border-radius:5px;width:" +
          E * 10 +
          "px;background-color:rgb(250,150,10);'></p>"
      );
      res.write(
        "<p style='font-weight:bold'> VeryGood(4 marks):&nbsp; &nbsp;" +
          V.toFixed(0) +
          "%  </p>"
      );
      res.write(
        "<p style='height:25px;border:1px solid black;border-radius:5px;width:" +
          V * 10 +
          "px;background-color:rgb(250,150,10);'></p>"
      );
      res.write(
        "<p style='font-weight:bold'> Good(3 marks): &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; " +
          G.toFixed(0) +
          "% </p>"
      );
      res.write(
        "<p style='height:25px;border:1px solid black;border-radius:5px;width:" +
          G * 10 +
          "px;background-color:rgb(250,150,10);'></p>"
      );
      res.write(
        "<p style='font-weight:bold'> Satisfaction(2 marks): " +
          S.toFixed(0) +
          "%  </p>"
      );
      res.write(
        "<p style='height:25px;border:1px solid black;border-radius:5px;width:" +
          S * 10 +
          "px;background-color:rgb(250,150,10);'></p>"
      );
      res.write(
        "<p style='font-weight:bold'> Poor(1 marks):  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; " +
          P.toFixed(0) +
          "% </p>"
      );
      res.write(
        "<p style='height:25px;border:1px solid black;border-radius:5px;width:" +
          P * 10 +
          "px;background-color:rgb(250,150,10);'></p><hr><br><br><br>"
      );

      e = 0;
      v = 0;
      p = 0;
      g = 0;
      s = 0;
    }
  } else {
    console.log("this is admin third year");
    //  window.alert("Welcome Manimala mam!")
    var url =
      "mongodb+srv://newUser:eXtG1fHdLfKLxWsc@firstdb.fp4ty.mongodb.net/mydb?retryWrites=true&w=majority";
    var e = 0,
      v = 0,
      g = 0,
      s = 0,
      p = 0;
    res.write(
      "<p style='font-size:30px;text-align:center;color:rgb(250,0,0);font-weight:700;'>THIRD YEAR FEEDBACK RESPONSES</p>"
    );
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");

      dbo
        .collection("THIRDsub1")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(20,20,20);font-weight:700;'>NUMBER OF STUDENTS RESPONSED   : " +
                63 +
                "</p><br>"
            );
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>PRINCIPLES OF COMPILER DESIGN / 18CS601</p><hr>"
            );
            call(result);
          }
        });
      dbo
        .collection("THIRDsub2")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>WEB TECHNOLOGY / 18CS602</p><hr>"
            );
            call(result);
          }
        });

      dbo
        .collection("THIRDsub3")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>ARTIFICIAL INTELLIGENCE / 18CSPE602</p><hr>"
            );
            call(result);
          }
        });

      dbo
        .collection("THIRDsub7")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>PYTHON PROGRAMMING /18CSPE604 </p><hr>"
            );
            call(result);
          }
        });
      dbo
        .collection("THIRDsub4")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>COMPUTER HARDWARE AND TROUBLESHOOTING / 18CSPE609</p><hr>"
            );
            call(result);
          }
        });

      dbo
        .collection("THIRDsub5")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>BASICS OF INTERNET OF THINGS / 18ECOE06</p><hr>"
            );

            call(result);
          }
        });
      dbo
        .collection("THIRDsub6")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>MOBILE COMPUTING / 18CSPE804</p><hr>"
            );
            call(result);
          }
        });
       
    });

    function call(result) {
      for (var i = 0; i < result.length; i++) {
        e += parseInt(result[i].Excellent);
        v += parseInt(result[i].VeryGood);
        g += parseInt(result[i].Good);
        s += parseInt(result[i].Satisfaction);
        p += parseInt(result[i].Poor);
      }
      var length = result.length;
      length *= 2;
      let V = (v / length) * 10;
      let G = (g / length) * 10;
      let P = (p / length) * 10;
      let S = (s / length) * 10;
      let E = (e / length) * 10;

      res.write(
        "<p style='font-weight:bold'> Excellent(5 marks): &nbsp; &nbsp; " +
          E.toFixed(0) +
          "%</p>"
      );
      res.write(
        "<p style='height:25px;border:1px solid black;border-radius:5px;width:" +
          E * 10 +
          "px;background-color:rgb(250,150,10);'></p>"
      );
      res.write(
        "<p style='font-weight:bold'> VeryGood(4 marks):&nbsp; &nbsp;" +
          V.toFixed(0) +
          "%  </p>"
      );
      res.write(
        "<p style='height:25px;border:1px solid black;border-radius:5px;width:" +
          V * 10 +
          "px;background-color:rgb(250,150,10);'></p>"
      );
      res.write(
        "<p style='font-weight:bold'> Good(3 marks): &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; " +
          G.toFixed(0) +
          "% </p>"
      );
      res.write(
        "<p style='height:25px;border:1px solid black;border-radius:5px;width:" +
          G * 10 +
          "px;background-color:rgb(250,150,10);'></p>"
      );
      res.write(
        "<p style='font-weight:bold'> Satisfaction(2 marks): " +
          S.toFixed(0) +
          "%  </p>"
      );
      res.write(
        "<p style='height:25px;border:1px solid black;border-radius:5px;width:" +
          S * 10 +
          "px;background-color:rgb(250,150,10);'></p>"
      );
      res.write(
        "<p style='font-weight:bold'> Poor(1 marks):  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; " +
          P.toFixed(0) +
          "% </p>"
      );
      res.write(
        "<p style='height:25px;border:1px solid black;border-radius:5px;width:" +
          P * 10 +
          "px;background-color:rgb(250,150,10);'></p><hr><br><br><br>"
      );

      e = 0;
      v = 0;
      p = 0;
      g = 0;
      s = 0;
    }
  }
});

app.get("/add-display", (req, res) => {
  if (req.query.Ayear == 2) {
    console.log("this is admin second year");
    // window.alert("Welcome Ruba mam!")


    var url =
      "mongodb+srv://newUser:eXtG1fHdLfKLxWsc@firstdb.fp4ty.mongodb.net/mydb?retryWrites=true&w=majority";
    var e1 = 0,
      v1 = 0,
      g1 = 0,
      s1 = 0;
    var e2 = 0,
      v2 = 0,
      g2 = 0,
      s2 = 0;
    var e3 = 0,
      v3 = 0,
      g3 = 0,
      s3 = 0;
    var e4 = 0,
      v4 = 0,
      g4 = 0,
      s4 = 0;
    var e5 = 0,
      v5 = 0,
      g5 = 0,
      s5 = 0;

    res.write(
      "<p style='font-size:30px;text-align:center;color:rgb(250,0,0);font-weight:700;'>SECOND YEAR FEEDBACK RESPONSES</p>"
    );
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");

      dbo
        .collection("SECONDsub1add1")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:30px;text-align:center;color:rgb(20,20,20);font-weight:700;'>NUMBER OF STUDENTS RESPONSED   : " +
                49 +
                "</p><br>"
            );
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>PROBABILITY AND STATISTICS / 18MA301</p><hr>"
            );
            call(result);
          }
        });
      dbo
        .collection("SECONDsub2add1")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>DIGITAL PRINCIPLES AND SYSTEM DESIGN / 18CS301</p><hr>"
            );
            call(result);
          }
        });

      dbo
        .collection("SECONDsub3add1")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>DATA STRUCTURES AND ALGORITHMS / 18CS302 </p><hr>"
            );
            call(result);
          }
        });
      dbo
        .collection("SECONDsub4add1")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>COMPUTER ORGANISATION AND ARCHITECTURE / 18CS303</p><hr>"
            );
            call(result);
          }
        });

      dbo
        .collection("SECONDsub5add1")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>OPERATING SYSTEMS / 18CS304</p><hr>"
            );

            call(result);
          }
        });
      dbo
        .collection("SECONDsub6add1")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>   DATA STRUCTURES AND ALGORITHMS LABORATORY / 18CS305</p><hr>"
            );
            call(result);
          }
        });

        dbo
        .collection("THIRDsub3add1")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>   OPERATING SYSTEMS LABORATORY / 18CS306</p><hr>"
            );
            call(result);
          }
        });
 
    });

    function call(result) {
      for (var i = 0; i < result.length; i++) {
        e1 += parseInt(result[i].div1one);
        e2 += parseInt(result[i].div1two);
        e3 += parseInt(result[i].div1three);
        e4 += parseInt(result[i].div1four);
        e5 += parseInt(result[i].div1five);

        v1 += parseInt(result[i].div2one);
        v2 += parseInt(result[i].div2two);
        v3 += parseInt(result[i].div2three);
        v4 += parseInt(result[i].div2four);
        v5 += parseInt(result[i].div2five);

        g1 += parseInt(result[i].div3one);
        g2 += parseInt(result[i].div3two);
        g3 += parseInt(result[i].div3three);
        g4 += parseInt(result[i].div3four);
        g5 += parseInt(result[i].div3five);

        s1 += parseInt(result[i].div4one);
        s2 += parseInt(result[i].div4two);
        s3 += parseInt(result[i].div4three);
        s4 += parseInt(result[i].div4four);
        s5 += parseInt(result[i].div4five);
        //p+=parseInt(result[i].Poor(1 marks));
      }
      var length = result.length;
      length *= 2;

      let results1 =
        parseInt((e1 * 100) / result.length) * 5 +
        parseInt((e2 * 100) / result.length) * 4 +
        parseInt((e3 * 100) / result.length) * 3 +
        parseInt((e4 * 100) / result.length) * 2 +
        parseInt((e5 * 100) / result.length);
      let results2 =
        parseInt((g1 * 100) / result.length) * 5 +
        parseInt((g2 * 100) / result.length) * 4 +
        parseInt((g3 * 100) / result.length) * 3 +
        parseInt((g4 * 100) / result.length) * 2 +
        parseInt((g5 * 100) / result.length);
      let results3 =
        parseInt((v1 * 100) / result.length) * 5 +
        parseInt((v2 * 100) / result.length) * 4 +
        parseInt((v3 * 100) / result.length) * 3 +
        parseInt((v4 * 100) / result.length) * 2 +
        parseInt((v5 * 100) / result.length);
      let results4 =
        parseInt((s1 * 100) / result.length) * 5 +
        parseInt((s2 * 100) / result.length) * 4 +
        parseInt((s3 * 100) / result.length) * 3 +
        parseInt((s4 * 100) / result.length) * 2 +
        parseInt((s5 * 100) / result.length);

     
        res.write(
          "<p style='font-weight:bold;font-size:22px;'>1. Planning and Organisation</p>"
        );
        res.write(
          "<p style='font-weight:bold;'> Overall marks : &nbsp; &nbsp; " +
          (results1+=200)/100 +
            " marks / 5 marks</p>"
        );
        res.write(
          "<p style='height:25px;border:1px solid black;border-radius:5px;width:" +
          results1 +
            "px;background-color:rgb(250,150,10);'></p>"
        );
  
        res.write(
          "<p style='font-weight:bold;font-size:22px;'>2. preparation</p>"
        );
        res.write(
          "<p style='font-weight:bold;'> Overall marks : &nbsp; &nbsp; " +
            (results2+=200) / 100 +
            " marks / 5 marks</p>"
        );
        res.write(
          "<p style='height:25px;border:1px solid black;border-radius:5px;width:" +
          results2 +
            "px;background-color:rgb(250,150,10);'></p>"
        );
  
        res.write(
          "<p style='font-weight:bold;font-size:22px;'>3. Student's participation</p>"
        );
        res.write(
          "<p style='font-weight:bold;'> Overall marks : &nbsp; &nbsp; " +
          (results3+=200)/ 100 +
            " marks / 5 marks</p>"
        );
        res.write(
          "<p style='height:25px;border:1px solid black;border-radius:5px;width:" +
          results3+
            "px;background-color:rgb(250,150,10);'></p>"
        );
  
        res.write(
          "<p style='font-weight:bold;font-size:22px;'>4. Class management / Assessment of Students</p>"
        );
        res.write(
          "<p style='font-weight:bold;'> Overall marks : &nbsp; &nbsp; " +
            (results4+=200) / 100 +
            " marks / 5 marks</p>"
        );
        res.write(
          "<p style='height:25px;border:1px solid black;border-radius:5px;width:" +
            results4+
            "px;background-color:rgb(250,150,10);'></p>"
        );

       e1 = 0;
      v1 = 0;
      p1 = 0;
      g1 = 0;
      s1 = 0;
      e2 = 0;
      v2 = 0;
      p2 = 0;
      g2 = 0;
      s2 = 0;
      e3 = 0;
      v3 = 0;
      p3 = 0;
      g3 = 0;
      s3 = 0;
      e4 = 0;
      v4 = 0;
      p4 = 0;
      g4 = 0;
      s4 = 0;
      e5 = 0;
      v5 = 0;
      p5 = 0;
      g5 = 0;
      s5 = 0;
    }
  } else {
    console.log("this is admin third year additional");

    // window.alert("Welcome Manimala mam!")
    var url =
      "mongodb+srv://newUser:eXtG1fHdLfKLxWsc@firstdb.fp4ty.mongodb.net/mydb?retryWrites=true&w=majority";
    var e1 = 0,
      v1 = 0,
      g1 = 0,
      s1 = 0;
    var e2 = 0,
      v2 = 0,
      g2 = 0,
      s2 = 0;
    var e3 = 0,
      v3 = 0,
      g3 = 0,
      s3 = 0;
    var e4 = 0,
      v4 = 0,
      g4 = 0,
      s4 = 0;
    var e5 = 0,
      v5 = 0,
      g5 = 0,
      s5 = 0;

    res.write(
      "<p style='font-size:25px;text-align:center;color:rgb(250,0,0);font-weight:700;'>THIRD YEAR FEEDBACK RESPONSES</p>"
    );
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");

      dbo
        .collection("THIRDsub1add1")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(20,20,20);font-weight:700;'>NUMBER OF STUDENTS RESPONSED   : " +
                63 +
                "</p><br>"
            );
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'> PRINCIPLES OF COMPILER DESIGN / 18CS601</p><hr>"
            );
            call(result);
          }
        });
      dbo
        .collection("THIRDsub2add1")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'> WEB TECHNOLOGY / 18CS602</p><hr>"
            );
            call(result);
          }
        });

      dbo
        .collection("THIRDsub3add1")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'> ARTIFICIAL INTELLIGENCE / 18CSPE602</p><hr>"
            );
            call(result);
          }
        });
      
        dbo
        .collection("SECONDsub6add1")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'> PYTHON PROGRAMMING /18CSPE604 </p><hr>"
            );
            call(result);
          }
        });
      
        dbo
        .collection("THIRDsub4add1")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>COMPUTER HARDWARE AND TROUBLESHO0TING / 18CSPE609</p><hr>"
            );
            call(result);
          }
        });

      dbo
        .collection("THIRDsub5add1")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'>BASICS OF INTERNET OF THINGS / 18ECOE06 </p><hr>"
            );

            call(result);
          }
        });
      dbo
        .collection("THIRDsub6add1")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          else {
            res.write(
              "<p style='font-size:25px;text-align:center;color:rgb(250,60,0);font-weight:700;'> MOBILE COMPUTING / 18CSPE804 </p><hr>"
            );
            call(result);
          }
        });
    
    });

    function call(result) {
      for (var i = 0; i < result.length; i++) {
        e1 += parseInt(result[i].div1one);
        e2 += parseInt(result[i].div1two);
        e3 += parseInt(result[i].div1three);
        e4 += parseInt(result[i].div1four);
        e5 += parseInt(result[i].div1five);

        v1 += parseInt(result[i].div2one);
        v2 += parseInt(result[i].div2two);
        v3 += parseInt(result[i].div2three);
        v4 += parseInt(result[i].div2four);
        v5 += parseInt(result[i].div2five);

        g1 += parseInt(result[i].div3one);
        g2 += parseInt(result[i].div3two);
        g3 += parseInt(result[i].div3three);
        g4 += parseInt(result[i].div3four);
        g5 += parseInt(result[i].div3five);

        s1 += parseInt(result[i].div4one);
        s2 += parseInt(result[i].div4two);
        s3 += parseInt(result[i].div4three);
        s4 += parseInt(result[i].div4four);
        s5 += parseInt(result[i].div4five);
        //p+=parseInt(result[i].Poor(1 marks));
      }
      var length = result.length;
      length *= 2;

      let results1 =
        parseInt((e1 * 100) / result.length) * 5 +
        parseInt((e2 * 100) / result.length) * 4 +
        parseInt((e3 * 100) / result.length) * 3 +
        parseInt((e4 * 100) / result.length) * 2 +
        parseInt((e5 * 100) / result.length);
      let results2 =
        parseInt((g1 * 100) / result.length) * 5 +
        parseInt((g2 * 100) / result.length) * 4 +
        parseInt((g3 * 100) / result.length) * 3 +
        parseInt((g4 * 100) / result.length) * 2 +
        parseInt((g5 * 100) / result.length);
      let results3 =
        parseInt((v1 * 100) / result.length) * 5 +
        parseInt((v2 * 100) / result.length) * 4 +
        parseInt((v3 * 100) / result.length) * 3 +
        parseInt((v4 * 100) / result.length) * 2 +
        parseInt((v5 * 100) / result.length);
      let results4 =
        parseInt((s1 * 100) / result.length) * 5 +
        parseInt((s2 * 100) / result.length) * 4 +
        parseInt((s3 * 100) / result.length) * 3 +
        parseInt((s4 * 100) / result.length) * 2 +
        parseInt((s5 * 100) / result.length);

        res.write(
          "<p style='font-weight:bold;font-size:22px;'>1. Planning and Organisation</p>"
        );
        res.write(
          "<p style='font-weight:bold;'> Overall marks : &nbsp; &nbsp; " +
          (results1+=200)/100 +
            " marks / 5 marks</p>"
        );
        res.write(
          "<p style='height:25px;border:1px solid black;border-radius:5px;width:" +
          results1 +
            "px;background-color:rgb(250,150,10);'></p>"
        );
  
        res.write(
          "<p style='font-weight:bold;font-size:22px;'>2. preparation</p>"
        );
        res.write(
          "<p style='font-weight:bold;'> Overall marks : &nbsp; &nbsp; " +
            (results2+=200) / 100 +
            " marks / 5 marks</p>"
        );
        res.write(
          "<p style='height:25px;border:1px solid black;border-radius:5px;width:" +
          results2 +
            "px;background-color:rgb(250,150,10);'></p>"
        );
  
        res.write(
          "<p style='font-weight:bold;font-size:22px;'>3. Student's participation</p>"
        );
        res.write(
          "<p style='font-weight:bold;'> Overall marks : &nbsp; &nbsp; " +
          (results3+=200)/ 100 +
            " marks / 5 marks</p>"
        );
        res.write(
          "<p style='height:25px;border:1px solid black;border-radius:5px;width:" +
          results3+
            "px;background-color:rgb(250,150,10);'></p>"
        );
  
        res.write(
          "<p style='font-weight:bold;font-size:22px;'>4. Class management / Assessment of Students</p>"
        );
        res.write(
          "<p style='font-weight:bold;'> Overall marks : &nbsp; &nbsp; " +
            (results4+=200) / 100 +
            " marks / 5 marks</p>"
        );
        res.write(
          "<p style='height:25px;border:1px solid black;border-radius:5px;width:" +
            results4+
            "px;background-color:rgb(250,150,10);'></p>"
        );

      e1 = 0;
      v1 = 0;
      p1 = 0;
      g1 = 0;
      s1 = 0;
      e2 = 0;
      v2 = 0;
      p2 = 0;
      g2 = 0;
      s2 = 0;
      e3 = 0;
      v3 = 0;
      p3 = 0;
      g3 = 0;
      s3 = 0;
      e4 = 0;
      v4 = 0;
      p4 = 0;
      g4 = 0;
      s4 = 0;
      e5 = 0;
      v5 = 0;
      p5 = 0;
      g5 = 0;
      s5 = 0;
    }
  }
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});