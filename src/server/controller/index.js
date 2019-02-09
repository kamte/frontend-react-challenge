const phones = require('../model');

const getAllPhones = (req, res) => {
  return res.status(200).json({
        phones,
        message: "All the phones",
  });
};

const getSinglePhone = (req, res) => {
   const findPhone = phones.find(phone => phone.id === parseInt(req.params.id, 10));
   if (findPhone) {
       return res.status(200).json({
             phone: findPhone,
             message: "A single phone record",
       });
   }
   return res.status(404).json({
         message: "Phone record not found",
   });
};

module.exports = {
  getAllPhones,
  getSinglePhone,
};
