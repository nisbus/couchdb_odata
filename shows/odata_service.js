function(doc, req) {  
    var host = req.headers.Host;
    var path = req.path;
    var pathurl = "";
    for(var b in path){
	if (b < 3)
	    pathurl = pathurl+'/'+path[b];
    }
    var baseUrl = "http://"+host+pathurl+"/_list/odata_convert/";

    var returnBody = '<service xmlns:atom="http://www.w3.org/2005/Atom" xmlns:app="http://www.w3.org/2007/app" xmlns="http://www.w3.org/2007/app" xml:base=\"'+baseUrl+'\"><workspace><atom:title>'+path[path.length-1]+'</atom:title>';
    if(doc){
	if (doc.views){
	    for(var prop in doc.views) {
		if(doc.views.hasOwnProperty(prop)){
		    returnBody = returnBody+'<collection href=\"'+prop+'\">';
		    returnBody = returnBody+'<atom:title>'+"\""+prop+"\""+'</atom:title></collection>';
		}
	    }
	}

    }
    returnBody = returnBody+'</workspace></service>';
    return {
	headers : {
	    "Content-Type" : "text/xml"
	},
	body : returnBody};
}