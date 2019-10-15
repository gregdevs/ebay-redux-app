
const request = require('request');

module.exports = function(app) {
    app.get('/api/findItemsAdvanced', function (req, res) {
        var queryData = req.query;//url.parse(req.originalUrl, true).query;
        if (queryData){
            const keywords = queryData && queryData.keywords;
            request({
                url: `https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=GregAtri-Discover-PRD-5b31bb683-45be06e8&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${keywords}&descriptionSearch=true&sortOrder=CurrentPriceHighest`  
            }).on('error', function(e) {
                res.end(e);
            }).pipe(res);   
        }
    });
}

