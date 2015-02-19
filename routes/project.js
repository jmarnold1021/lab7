var models = require('../models');

exports.projectInfo = function(req, res) { 
  var projectID = req.params.id;
  // query for the specific project and
  // call the following callback
  	
 
  function afterQuery(err, projects) {
    if(err) console.log(err);
    res.json(projects[0]);
  }



  models.Project.find({'_id':projectID}).exec(afterQuery);
	
}

exports.addProject = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

	var newPost = new models.Project({
                   'title':req.body.project_title,
									 'date':new Date(req.body.date),
									 'summary':req.body.summary,
									 'image':req.body.image_url
	       

	 			          });
  console.log(newPost); 
  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();
	// YOU MUST send an OK response w/ res.send();
	 function afterQuery(err, projects) {
    if(err) console.log(err);
    res.redirect('/');
  }

 
   newPost.save(afterQuery);
}

exports.deleteProject = function(req, res) {
  var projectID = req.params.id;

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
	 function afterQuery(err, projects) {
    if(err) console.log(err);
    res.send(200);
  }

  models.Project.find({'_id':projectID}).remove().exec(afterQuery);
  

}
