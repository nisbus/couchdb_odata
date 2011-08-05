function(doc, req) {  
    var b = '<service xmlns:atom="http://www.w3.org/2005/Atom" xmlns:app="http://www.w3.org/2007/app" xmlns="http://www.w3.org/2007/app" xml:base="odata/_design/odata/_list/odata_convert/"><workspace><atom:title>CouchDbOData</atom:title>';
    if(doc){
	if (doc.views){
	    for(var prop in doc.views) {
		if(doc.views.hasOwnProperty(prop)){
		    b = b+'<collection href=\"'+prop+'\">';
		    b = b+'<atom:title>'+"\""+prop+"\""+'</atom:title></collection>';
		}
	    }
	}

    }
    b = b+'</workspace></service>';
    return {
	headers : {
	    "Content-Type" : "text/xml"
	},
	body : b};
}