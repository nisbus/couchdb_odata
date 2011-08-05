function(head, req) {
    send('<?xml version="1.0" encoding="iso-8859-1" standalone="yes"?><feed xml:base="/_design/odata/" xmlns:d="http://schemas.microsoft.com/ado/2007/08/dataservices" xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" xmlns="http://www.w3.org/2005/Atom">');
    send('<title type="text"></title>');
    var row;
    while(row = getRow())
    {
	send('<entry>');
	send('<id>'+row.key+'</id>');
	for(var prop in row.value) {
	    if(row.value.hasOwnProperty(prop))		
		send('<'+prop+'>'+row.value[prop]+'</'+prop+'>');
	};
	send('<content type="application/xml">');
	send('<m:properties>');
	for(var prop in row.value){
	    if(row.value.hasOwnProperty(prop)){			    
		if(typeof(row.value[prop]) === "number")		    
		{
		    send('<d:'+prop+' m:type="Edm.Double">'+row.value[prop]+'</d:'+prop+'>');		    
		}
		else if (!isNaN(Date.parse(row.value[prop])))
		{
		    send('<d:'+prop+' m:type="Edm.DateTime">'+Date.parse(row.value[prop])+'</d:'+prop+'>');		    
		}
		else
		{
		    send('<d:'+prop+'>'+row.value[prop]+'</d:'+prop+'>');    
		}
	    }
	}
	send('</m:properties>');
	send('</content>');
	send('</entry>');
    }
    send('</feed>');  
}