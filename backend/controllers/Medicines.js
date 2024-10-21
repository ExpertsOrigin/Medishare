const db = require('../connection/Connection')
const cloudinary = require("../utils/Cloudinary")

// entering new medicine
const enter_new_medicine = (req, res) => {
    let uploadimg;
    cloudinary.uploader.upload(req.file.path, function (err, result) {
        uploadimg = result.url
        // console.log(uploadimg)

        // const { email2 } = req.body;
        const { email, name, price, expiry_date, location, company } = req.body;

        const sql = "INSERT INTO medicines (email,name,price,expiry_date,location,company,image) VALUES (?,?,?,?,?,?,?)  "
        const values = [email, name, price, expiry_date, location, company, uploadimg]
        db.query(sql, values, (err, data) => {
            if (err) { console.log(err) }
            else {
                return res.json({ msg: "data added", d: data })
                // console.log(data)
            }
        })



    })
}

//showing all medicines

const get_medicines = (req, res) => {
    const sql = "SELECT * FROM medicines "
    db.query(sql, (err, data) => {
        if (err) { console.log(err) }
        else {
            return res.json(data)
            // console.log(data)
            // const image1 = data[0].image
            // const main_image = image1.toString('base64')
            // console.log(main_image)

        }
    })
}

// showing all medicines based on company
const get_company_medicines = (req, res) => {
    const { company } = req.params
    const sql = "SELECT * FROM medicines WHERE company = ? "
    db.query(sql, [company], (err, data) => {
        if (err) { console.log(err) }
        else {
            return res.json(data)
        }
    })
}


// showing all medicines based on name
const get_medicines_by_email = (req, res) => {
    const { email } = req.body;
    // console.log(email2)
    const sql = "SELECT * FROM medicines WHERE email = ? "
    db.query(sql, [email], (err, data) => {
        if (err) { console.log(err) }
        else {
            if (data.length > 0) { return res.json(data) }
            else {
                return res.json([])
            }
        }
    })
}


const get_companies = (req, res) => {
    const sql = "SELECT * FROM companies"
    db.query(sql, (err, data) => {
        if (err) { return res.json(err) }
        else {
            return res.json(data)
        }
    })
}


const get_companies_by_name = (req, res) => {
    const { id } = req.params;
    const sql = "SELECT * FROM companies WHERE c_name = ?"
    db.query(sql, [id], (err, data) => {
        if (err) { return res.json(err) }
        else {
            return res.json(data)
        }
    })
}


const delete_medicine = (req, res) => {
    const { id } = req.body;
    const sql = 'DELETE FROM medicines WHERE id = ? '
    db.query(sql, [id], (err, data) => {
        if (err) { return res.json(err) }
        else {
            return res.json({ msg: "post deleted successfully" })
        }
    })
}
















module.exports = {
    enter_new_medicine,
    get_medicines,
    get_company_medicines,
    get_medicines_by_email,
    get_companies,
    get_companies_by_name,
    delete_medicine
}