const bcrypt = require('bcrypt');
let db = require("../models/index");
const saltRounds = 10;
let createNewUser = async (data) => {
    return new Promise(async(resolve,reject)=>{
        try {
            let hashPaswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                image: data.fileImage,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: hashPaswordFromBcrypt,
                address: data.address,
                gender: data.gender === '1' ? true : false,
                numberPhone: data.phoneNumber,
                roleId: data.roleId,
                positionId: data.positionId,
            });
            resolve("Create new user success!");
        } catch (error) {
            reject(error);
        }
    });
}
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            await bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(password, salt, function(err, hash) {
                    let hashPasword = hash;
                    resolve(hashPasword);
                });
            });
        } catch (error) {
            reject(error);
        }
    });
}
let getAllUser = () => {
    return new Promise(async(resolve,reject)=>{
        try {
            let users = await db.User.findAll({
                raw: true,
            });
            resolve(users);
        } catch (error) {
            reject(error);
        }
    })
}
let getUserInfoById = (userId) => {
    return new Promise(async(resolve,reject)=>{
        try {
            let user = await db.User.findOne({
                where: {id: userId},
                raw: true,
            });
            if(user){
                resolve(user);
            }else{
                resolve([]);
            }
        } catch (error) {
            reject(error);
        }
    });
}
module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
}