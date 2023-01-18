const mongoose = require('mongoose')
const express=require('express')
const city=require('../models/goalSchema')

//routes GET/api

const getApi= async (req,resp)=>{
    const data = await city.find()
    resp.status(200).json(data)
}
//post/api
const postApi= async(req,resp)=>{
    const data= new city(req.body)
    const result= await data.save()
    resp.status(200).json(result)
}
//put/api(update)
const putApi=async (req,resp)=>{
    const data=await city.updateOne(
            req.params,
            {$set:req.body}
    )
    resp.json(data) 
}

module.exports={
    getApi,
    postApi,
    putApi
}






