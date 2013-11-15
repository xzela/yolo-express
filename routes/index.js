
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Yolo Express' });
};

exports.about = function(req, res) {
  res.render('index', {title: 'About Yolo Express'})
};