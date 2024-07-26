        const Customer = require('../models/Customer')

        const listCustomer = async(req,res) => {
            try{
                const customer =await Customer.getCustomers();
                res.json(customer);

            }catch(error){
                res.status(500).json({erro:error.message})
            }
            
        }

        const insertCustomer = async(req, res)=>{
            try {
                const customer = await Customer.insert(req.body);
                res.status(201).json(customer)
            } catch (error) {
                res.status(500).json( { error: error.message } );
            }
        }
        const updateCustomer = async(rep, res)=>{
            try {
                const customer = await Customer.update(req.body, req.params.id);
                res.status(201).json(customer)
            } catch (error) {
                res.status(500).json( { error: error.message } );
            }
        }

        const deleteCustomer = async(rep, res)=>{
            try {
                const customer = await Customer.delete(rep.params.id);
                res.status(201).json(customer)
            } catch (error) {
                res.status(500).json( { error: error.message } );
            }
        }
        module.exports ={
            listCustomer,
            insertCustomer,
            updateCustomer,
            deleteCustomer,
        };