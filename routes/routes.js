const express = require('express');
const router = express.Router();
const {
  authController,
  listingController,
  workersController,
  userController,
  bookingController,
} = require('../controllers/');
const { 
  verifySignUp,
  authJwt,
  workerSignup,
  isWorker,
  serviceIsBookable,
  ReqValidations
} = require("../middlewares");


// Authentication API
router.post(
    "/user/signup",
    [
        verifySignUp.checkDuplicateMobileOrEmail,
    ],
    authController.signup
  );
router.post('/user/signin', authController.signin);
router.post("/user/reset-password",authController.resetPassword);
router.get(
  "/user/myprofile",
  [
    authJwt.verifyToken,
  ],
  authController.myprofile
);

router.get(
  "/user/booking",
  [
    authJwt.verifyToken,
  ],
  userController.getBooking
);


router.post(
  "/user/save/address",
  [
    authJwt.verifyToken,
  ],
  userController.saveAddress
);

router.get(
  "/user/address",
  [
    authJwt.verifyToken,
  ],
  userController.getAddress
);

router.delete(
  "/user/delete/address",
  [
    authJwt.verifyToken,
  ],
  userController.deleteAddress
);

// Workers api
router.post('/worker/signup',
[
  verifySignUp.checkDuplicateMobileOrEmail,
  workerSignup.validateCategory,
  workerSignup.validateSubCategory,
],
workersController.signup
);

// Service apis
router.post('/worker/createservice',
[
  authJwt.verifyToken,
  isWorker.isWorker,
  workerSignup.validateCity,
  workerSignup.validateCategory,
  workerSignup.validateSubCategory,
],
workersController.CreateService
);

router.get('/services/list',
[
  ReqValidations.checkValidCity
],
listingController.showWorkersLists);


// Get service details by ID
router.get('/service/:id',listingController.getServiceDetails);

// Review api
//router.get('/get/reviews/:id', listingController.getReviews);
router.post('/store/reviews/:id', listingController.storeReviews);

// Book New service

router.post('/service/book/new',
[
  authJwt.verifyToken,
  serviceIsBookable.checkIfBookable,
  ReqValidations.checkIfUserAddressIsValid
],
bookingController.createNewBooking
);

router.get('/service/get/availability',
[
  authJwt.verifyToken,
  serviceIsBookable.checkIfBookable,
],
bookingController.getTimeAvailability
);



// Other APIs
router.get('/cities',listingController.getCities);
router.get('/categories',listingController.getCategories);
router.get('/subcategories',listingController.getSubCategories);

module.exports = router;
