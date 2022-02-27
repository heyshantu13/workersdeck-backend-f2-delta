const db = require("../models");
const Address = db.Address;
const Booking = db.Booking;
const Worker = db.WorkersProfile;
const Service = db.Service;
const User = db.users;
var Sequelize,{ QueryTypes }  = require('sequelize');

const saveAddress = (req,res) => {
    const userId = req.userId;
    Address.create({
        uid: userId,
        name: req.body.name,
        type:req.body.type,
        address: req.body.address,
        pin_code: req.body.pin_code,
        
    }).then(addresses => {
        return res.status(200).send({
            status:true,
            message: "Address saved successfully!",
            data:addresses,
           });
    });
}

const deleteAddress = (req, res) => {
    const userId = req.userId;
    Address.destroy({
        where :{
            id:req.body.id,
            uid:userId
        }
    }).then(address => {
        if(!address){
            return res.status(422).send({
                status:false,
                message: "Address not found for this user",
                data:null,
               });
        }else{
            return res.status(200).send({
                status:true,
                message: "Address Deleted Succesfuly",
                data:null,
               });
        }
    })
}


const getAddress = (req,res) => {
    const userId = req.userId;
    Address.findAll({
        uid:userId
    }).then(address => {
        return res.status(200).send({
            status:true,
            message: "Address fetch successfully!",
            data:address,
           });
    });
}

const getBooking = async (req,res) => {
    const userId = req.userId;
    var response = [];
    Booking.findAll({
            where: {
                user_id: userId
            },
    }).then(bookingResult => {
        bookingResult.map((n,index) =>{
           Worker.findOne({
               where:{
                   id:n.worker_id
               }
           }).then(workerResult => {
            response[index]= workerResult;
            return res.status(200).send({
                status:true,
                message: "Details fetch successfully!",
                data:{
                    booking:bookingResult,
                    worker:response
                },
               });
           })
        })
       
    })
}

const getBookingsByType = async (req,res) => {
    const userId = req.userId;
    var response = [];
   await Booking.findAll({
            where: {
                user_id: userId
            },
    }).then(bookingResult => {
        bookingResult.map((n,index) =>{
           Worker.findOne({
               where:{
                   id:n.worker_id,
                   booking_type :type
               }
           }).then(workerResult => {
            response[index]= workerResult;
           
           })
        })
       
    })

    return res.status(200).send({
        status:true,
        message: "Details fetch successfully!",
        data:{
            booking:bookingResult,
            worker:response
        },
       });
}

module.exports = {
    saveAddress,
    deleteAddress,
    getAddress,
    getBooking,
    getBookingsByType
}