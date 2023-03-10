const { PointSale } = require("../../Models");

module.exports = {
    async getCoordById(req,res){
        const { ps_id } = req.params;
        let data,err;

        try {
            const ps = await PointSale.findOne({ 
                attributes:["coord_long","coord_lat"],
                where: { ps_id } 
            });
            data = ps.toJSON();
        } catch (error) {
            err = error;
        }

        res.json({ err, data })
    },
    

    async getAllCoord(req,res){

    },

    async groupByRegion(req,res){

    }
}