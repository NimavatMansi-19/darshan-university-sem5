const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Faculty = require('./models/Faculty.js');

mongoose.connect("mongodb://localhost:27017/facultyDB",{useNewUrlParser:true})
.then(()=>{
    const app=express();
    app.use(bodyParser.urlencoded({extended:false}))

    //get all faculties

    app.get('/faculties',async(req,res)=>{
        faculties = await Faculty.find();
        res.send(faculties);
    })

    //get faculties by id
    app.get('/faculties/:id',async(req,res)=>{
        faculties = await Faculty.findOne({FacultyID:req.params.id});
        res.send(faculties);
    })

    //add new faculty
    app.post('/faculties',async(req,res)=>{
        const faculty = new Faculty({
            FacultyID: req.body.FacultyID,
            FacultyName: req.body.FacultyName
        })
        await faculty.save()
        res.send(faculty);
    })

    //update faculty by id

    app.patch('/faculties/:id',async(req,res)=>{
        try{
            const faculty = await Faculty.findOne({FacultyID:req.params.id})
            faculty.FacultyID=req.body.FacultyID;
            faculty.FacultyName=req.body.FacultyName;

            await faculty.save()
            res.send(faculty)
        }
        catch{
            res.status(404)
            res.send({error:"Faculty doesn't exist"})
        }
    })
    //Delete faculty by id

    app.delete('/faculties/:id',async(req,res)=>{
        try{
            const faculty = await Faculty.findOne({FacultyID:req.params.id})
            await faculty.delete()
            res.send(faculty)
        }
        catch{
            res.status(404)
            res.send({error:"Faculty doesn't exist"})
        }
    })

    app.listen(3000,()=>{
        console.log("Server has started")
    })
})
