var query_params = { apikey: 'f6ab5f2e4f69444b9f2c0a44d9a5223d',
                     phrase: 'national safety',
                     per_page: '10',
                     start_date: "20020101",
                     end_date: "20021231",
                     sort: 'date asc'
                   };
                   
var endpoint = 'http://capitolwords.org/api/text.json';
 
var options = {
  data: query_params,
  type: 'GET',
  dataType: 'jsonp'      
};

document.querySelector('button').onclick = function() {
  var request = jQuery.ajax(endpoint, options)
    .done(showResponse);
};
