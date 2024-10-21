const db = require('../connection/Connection')

// new user registration
const user_registration = (req, res) => {
    const { name, email, password, confirmpassword } = req.body.data1;
    const random_id = Math.random().toString(36).substring(2, 18)
    const sql = `INSERT INTO user_account (random_id,name,email,password,confirm_password) VALUES(?,?,?,?,?) `
    const values = [random_id, name, email, password, confirmpassword]
    db.query(sql, values, (err, data) => {
        if (err) { console.log(err) }
        else {
            return res.json({ msg: "register successfully" })
        }
    })
}

// user login
const user_login = (req, res) => {
    const { email, password } = req.body.data1;
    // if (!email) { return res.status(400).json({ error: 'email is required' }) }
    // if (!password) { return res.status(400).json({ error: 'password is required' }) }
    const sql = "SELECT * FROM user_account WHERE email = ? AND password = ?  "
    const values = [email, password]
    db.query(sql, values, (err, data) => {
        if (err) { console.log(err) }
        else {
            if (data.length > 0) {
                return res.json({ msg: "login successfully", d: data })
            }
            else { return res.json('record not found') }
        }
    })
}

// showing account data based on email
const account_data = (req, res) => {
    const { random_id } = req.params;
    const sql = "SELECT * FROM user_account WHERE random_id = ?"
    const values = [random_id]
    db.query(sql, values, (err, data) => {
        if (err) { console.log(err) }
        else {
            return res.json(data)
        }

    })
}

// update account data based on random_id
// const update_account_data = (req, res) => {


//     const { name, email, contact, address, randomid } = req.body;
//     console.log(randomid)
//     let fields = []
//     let values = []

//     if (name) {
//         fields.push("name = ?")
//         values.push(name)
//     }
//     if (email) {
//         fields.push("email = ?")
//         values.push(email)
//     }
//     if (contact) {
//         fields.push("contact = ?")
//         values.push(contact)
//     }
//     if (address) {
//         fields.push("address = ?")
//         values.push(address)
//     }

//     if (fields.length === 0) {
//         console.log('No fields to update');
//         return res.status(400).send("No data to update");
//     }

//     values.push(randomid)
//     const sql = `UPDATE user_account SET ${fields.join(", ")} WHERE random_id = ?`
//     db.query(sql, values, (err, data) => {
//         if (err) { console.log(err) }
//         else {
//             console.log(data)
//         }
//     })

// }



const update_account_data = (req, res) => {
    const { name, email, contact, address, randomid } = req.body;
    console.log(randomid)
    const sql = "SELECT * FROM user_account  WHERE random_id = ?"
    db.query(sql, [randomid], (err, data1) => {
        if (err) { console.log(err) }
        if (data1.length === 0) {
            return res.status(404).json({ msg: "no account is existing with the id" })
        }

        const currentdata = data1[0]
        const updatename = name || currentdata.name;
        const updateemail = email || currentdata.email;
        const updatecontact = contact || currentdata.contact;
        const updateaddress = address || currentdata.address;

        const update_sql = 'UPDATE user_account SET name = ?, email = ? , contact = ?, address = ?  WHERE random_id = ? '
        const values = [updatename, updateemail, updatecontact, updateaddress, randomid]

        db.query(update_sql, values, (err, data2) => {
            if (err) { console.log(err) }
            else {
                return res.json({ msg: "data updated successfully" })
            }
        })








    })



}


















module.exports = {
    user_registration,
    user_login,
    account_data,
    update_account_data
}