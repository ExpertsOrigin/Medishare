const express = require('express');
const { user_registration, user_login, account_data, update_account_data } = require('../controllers/User_account');
const { enter_new_medicine, get_company_medicines, get_medicines, get_medicines_by_email, get_companies, get_companies_by_name, delete_medicine } = require('../controllers/Medicines');
const uploading = require("../middleware/Multer")
const router = express.Router();
const multer = require('multer')
const upload = multer().none()
// user account
router.post('/user_registration', user_registration)
router.post('/user_login', user_login)
router.get('/account_data/:random_id', account_data)
// router.post('/update_account_data/:random_id', update_account_data)
router.post('/update_account_data', upload, update_account_data)


// medicines
router.post('/enter_new_medicine', uploading.single('image'), enter_new_medicine)
router.get('/get_company_medicines/:company', get_company_medicines)
router.get('/get_medicines', get_medicines)
router.post('/get_medicines_by_email', get_medicines_by_email)



// get companies
router.get('/get_companies', get_companies)
router.get('/get_companies_by_name/:id', get_companies_by_name)


// delete medicine
router.delete('/delete_medicine', delete_medicine)


















module.exports = router
