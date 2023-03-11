const { PointSale } = require("../../Models");

module.exports = {
    async getCoordById(req,res){
        const { ps_id } = req.query;
        let data,err;

        try {
            const ps = await PointSale.findOne({ 
                attributes:["coord_long","coord_lat"],
                where: { ps_id } 
            });
            data = await ps.toJSON();
        } catch (error) {
            err = error;
        }

        res.json({ err, data })
    },


    async getAllCoord(req,res){
        let data,err;

        try {
            const ps = await PointSale.findAll({ 
                attributes:["coord_long","coord_lat"],
            });
            data = await ps.map(v => v.toJSON());
        } catch (error) {
            err = error;
            console.error(error)
        }

        res.json({ err, data })
    },

    async groupByRegion(req,res){
        let data,err;
        
        let { region } = req.query;
        try {
            const ps = await PointSale.findAll({ 
                where: { region }
            });
            data = await ps.map(v => v.toJSON());
        } catch (error) {
            err = error;
            console.error(error)
        }

        res.json({ err, data })
    }
}