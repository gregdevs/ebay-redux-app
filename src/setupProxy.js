
const request = require('request');

module.exports = function(app) {
    app.get('/api/findItemsAdvanced', function (req, res) {
        var queryData = req.query;
        if (queryData){
            const keywords = queryData && queryData.keywords,
                  sortBy = queryData && queryData.sortBy;
            request({
                url: `https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME={APPNAME}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${keywords}&descriptionSearch=true&sortOrder=${sortBy}`  
            }).on('error', function(e) {
                res.end(e);
            }).pipe(res);   
        }
    });
}

