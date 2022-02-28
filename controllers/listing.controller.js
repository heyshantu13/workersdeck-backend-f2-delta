const express = require('express');
const { check, validationResult, body } = require('express-validator');
const db = require("../models");
const config = require("../config/auth.config");
const User = db.users;
const Worker = db.WorkersProfile;
const City = db.City;
const Service =db.Service;
const Categories = db.Categories;
const SubCategories = db.SubCategories;
const Review = db.Review;
const Op = db.Sequelize.Op;

const getCities = (req,res) => {
    City.findAll({
        where:{
            status:'1',
          },
    }).then(result => {
        return res.status(200).send({
            status: true,
            message: "success",
            data: result
        });
    }).catch(function(err){
        return res.status(500).send({
            status: false,
            message: "Something Went wrong",
            data : null
          });
    });
}

const getCategories = (req,res) => {
    Categories.findAll({
    }).then(result => {
        return res.status(200).send({
            status:true,
            message: "Categories fetched successfully",
            data: result
          });
    }).catch(err => {
        return res.status(500).send({
            status:false,
            message: err,
            data: result
          });
    });
}

const getSubCategories = (req,res)=>{
    SubCategories.findAll({
        where:{
            category_id:req.query.category_id
        }
    }).then(result => {
        if(result){

            return res.status(200).send({
                status:true,
                message: "Subcategories fetched successfully",
                data: result
              });

        }else{
            return res.status(200).send({
                status:false,
                message: "Subcategories fetched successfully",
                data: result
              });
        }

    }).catch(err => {
        return res.status(500).send({
            status:false,
            message: err,
            data: result
          });
    });

}

const showWorkersLists =  async (req,res) => {
    const {city,pincode,category_id} = req.query;
    const city_id = req.city_id;
    var subCategoriesData = null;
    let response = {
        subcategories: {},
        services: {},
        workers: {}
    };
    await SubCategories.findAll({
        where: {
            category_id: category_id
        }
      }).then(subCatResult =>{
        if(subCatResult){
           // subCategoriesData = subCatResult;
            response.subcategories = subCatResult;
        }
      });

      await Service.findAll({
        where: {
            servicable_city_id: city_id,
            servicable_pincode:pincode,
            category_id:category_id,
        }
      }).then(results => {
        if(results){
            response.services = results;
        }
      });
     
      return res.status(200).send({
                status:true,
                message: "List fetched workers",
                data: response
        });

    
};

const getReviews =  (req,res) => {

}

const storeReviews = (req,res) => {
    
}

const getServiceDetails = async (req,res)=>{
    var response = {
        service: {},
        worker: {},
        reviews: {}
    };
    serviceId = req.params.id;
   await Service.findOne({
        where: {
            id:serviceId,
        }
    }).then(serviceResult => {
        if(serviceResult){
            Worker.findOne({
                where:{
                    id : serviceResult.wid,
                }
            }).then(workerResult => {
                Review.findAll({
                    where:{
                        sid:serviceResult.id
                    }
                }).then(reviewResults=>{
                    response.service  = serviceResult;
                    response.worker = workerResult;
                    response.reviews = reviewResults;
                    // 
                    return res.status(200).send({
                        status:true,
                        message: "Fetch succesfully",
                        data: response
                    });
                });
            });
        }

    }).catch(err => {
        return res.status(500).send({
            status:false,
            message: err,
            data: response
        });
    });
}

const createSubCategory = (req,res)=>{

    

}

module.exports = {
    getCities,
    getCategories,
    showWorkersLists,
    getSubCategories,
    getReviews,
    storeReviews,
    getServiceDetails,
    createSubCategory
}
