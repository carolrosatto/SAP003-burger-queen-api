import models from '../../models/index';

const getAll = async (req,res) => {
    const orders = await models.order.findAll({raw:true});
    res.json(orders);
}

export default {
    getAll
}