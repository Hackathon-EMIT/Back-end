const { where } = require("sequelize");
const{Gerant}  = require("../Models"); 
const { update } = require("../Models/Notif");
module.exports = { 
    async login (req,res){
        let data , err;
        const{g_email,g_pass} = req.body;
        try {
            const gerant = await Gerant.findOne({where: {g_email , g_pass}});
            if(!gerant){
                data = "Authentification faild,pls verify"
            }else{
                data = `Authentification succes,Welcome${g_email} !!`
            }
             ;
            //gerant.map(ger=>ger.toJSON())


        }catch(error){
            err = error;
            console.error(error);
        }
        res.json({err , data});


    },
    async signup (req,res){
        const {g_email,g_pass} = req.body;
       // console.log(g_email ,g_pass);
        let data , err  ;
        let resBody = null ;
        try {
            const [newGerant,created] = await Gerant.findOrCreate({
                attributes : ["g_email"],
                where : {g_email},
                defaults:{
                    g_email : g_email,
                    g_pass: g_pass
                }
            })

            if (created == false){
                // resBody ={
                //     err : "user already exist", 
                //     data: {},
                //     msg: "Essayer avec un autre email"
                data = "user already exist" 
                
            }else{
                // resBody ={
                //     err : {}, 
                //     data:newGerant,
                //     msg: "Creation d'un nouveau compte gerant" 
                // }
                data = {
                    msg : "Sigunp succes", 
                    data : newGerant
                }
            }
            

        }catch(error){
            err = error
            console.error(error)
        }
        res.json({err , data});

    },
    async getProfilInfo (req,res){
        const {g_id} = req.params;
        let data , err ;
        try {
            const gerant = await Gerant.findAll({
                attributes : ["g_id" , "g_email"] , 
                where : {g_id }
            });
            data = gerant.map(v=>v.toJSON());

        }catch(error){
            err = error
            console.error(error);
        }
        res.json({err , data});

    },

    async updateGerant (req,res){
        const{g_id,g_pass , g_email} = req.body ;
        let data ,err ; 
        try{
            
            await Gerant.update({
                g_email :g_email ,
                g_pass : g_pass,

            }, {where : {g_id}});

            const updatedGerant = await Gerant.findOne({
                where : {g_id},
                attributes : [
                    "g_id",
                    "g_email"
                ]
            });
            data = updatedGerant.toJSON();

        }catch(error){
            err : error
            console.error(error)

        }
        res.json({err , data});


    }
};


