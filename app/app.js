import { changePageContent } from "./model.js";

function initListeners(){
    $("nav #links ul a").on("click", function(e){
        let btnId = e.currentTarget.id;
        changePageContent(btnId);
    });
}

$(document).ready(function(){
    initListeners();
    changePageContent("home");
});

var galleryLinks = "#galleryLinks a";
var blogLinks = "#blogLinks a";

$(document).on("click", galleryLinks, function(e){
    let btnId = e.currentTarget.id;
    changePageContent(btnId);
});

$(document).on("click", blogLinks, function(e){
    let btnId = e.currentTarget.id;
    changePageContent(btnId);
});

$(document).on("click", "#readMore", function(e){
    changePageContent("about");
})