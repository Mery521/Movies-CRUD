const { config } = require("dotenv");

const limit = config.limit;

const offSetLimit  = (page) => {
    if (!page){
        return 0
    }
    else{
        page = (page * limit) - limit;
        return page;
    }
}

module.exports = { offSetLimit, limit}
