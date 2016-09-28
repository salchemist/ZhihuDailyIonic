/**
 * Created by kongx on 2016/9/15.
 */
 var myService =angular.module('starter.services',['ngResource']);
  myService.factory("news",['$resource',function ($resource) {
   var baseUrl = "http://localhost:8100/api/4/news/";
   return{
     latest:$resource(baseUrl+"latest"),
     before:$resource(baseUrl+"before/:date"),
     detail:$resource(baseUrl+":id")
   }

 }]);
  myService.factory("loadCss",[])
