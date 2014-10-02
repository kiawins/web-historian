var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(){
  var options = {
    encoding: 'utf8'
  };
  var reading = function(callback){
    fs.readFile('../archives/sites.txt', options, function(error, data) {
      callback(error, data);
    });
  }

  return reading(function(error,data){
    return data;
  });
};

exports.callback = function(func, args) {
  func(args);
};

exports.isUrlInList = function(target){
  var checking = function(callback) {

    //nest readListOfUrls in callback
    //follow comments on line 60

    var list = exports.readListOfUrls().split("\n");
    callback(list);
  };
  checking(function(list) {
    console.log("inside checking");
    console.log(list);
  });
  // return reading(function(error,data){
  //   var result;
  //   var list = data.split("\n");
  //   if (list.indexOf(target) === -1) {
  //     result = false;
  //   } else {
  //     result = true;
  //   }
  //   return result;
  // });
};

exports.addUrlToList = function(){
};

exports.isURLArchived = function(){
};

exports.downloadUrls = function(){
};
