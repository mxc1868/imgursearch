var util ={};

util.setHeader = function (q, page) {
    var myurl =  "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q="+q+"&count=50&offset="+ (page - 1) * 50;
    var myheader = {"Ocp-Apim-Subscription-Key" : "321f91ae0d154163b9296fae0602a0c1"};
    var options = {
        url: myurl,
        headers: myheader
    }
    return options;
};

module.exports = util;