A show and a list to serve your data from couchdb as an OData feed.  
  
==HowTo==    
  
Copy the show and the list to a design document in your couchdb that has some views.  

Your design document should look something like this:

```javascript
{
  "_id": "_design/mydesign_doc",
  "_rev": "3-3df0611cdf102b40a83016cf5de6c38a",
  "views": {
       "my_view": {
           "map": "function(doc) {emit(doc._id, doc.value)}"
       }
  },
  "lists": {
    "odata_convert":{
      <<CONTENTS OF ODATA_CONVERT.JS>>
    }
  },
  "shows": {
    "odata_service": {
      <<CONTENTS OF ODATA_SERVICE.JS>>
    }
  }
}
```
To consume the feed go to your servers url for example:   
  
http://localhost:5984/mydb/_design/mydesign_doc/_show/odata_service/_design/mydesign_doc  
  
You can now point anything that is able to consume odata feeds to this location (ex. powerpivot for Excel) and browse through your couchdb data.  




