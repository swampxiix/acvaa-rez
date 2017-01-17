$(document).ready(function() {

// ######################################################
// PAGE LOAD

$('.menu_section .menu_head').each(function() {
    var section_id = $(this).parents("div").attr('id');
    var section_glyph = "#" + section_id + "_glyph";
    if ( $.cookie(section_id)=='show' ) {
        $(section_glyph).removeClass("fa-plus-square").addClass("fa-minus-square");
        $(this).next().show();
        }
    else if ( $.cookie(section_id)=='hide' ) {
        $(section_glyph).removeClass("fa-minus-square").addClass("fa-plus-square");
        $(this).next().hide();
        }
    else {
        $(section_glyph).removeClass("fa-plus-square").addClass("fa-minus-square");
        $(this).next().show();
        };
    });

$("#news2010").hide();
$("#news2010hide").hide();
$("#pfizerarticle").hide();

// ######################################################
// CLICK EVENTS

$("#show-mobile-menu").click(function() {
    if ($("#side-menu").css("display")==="block") {
        $("#side-menu").css("display", "none");
        $("#show-mobile-menu").html("Show Menu");

    } else {
        $("#side-menu").css("display", "block");
        $("#show-mobile-menu").html("Hide Menu");
    }
});

$('.menu_section .menu_head').click(function() {
    var section_id = $(this).parents("div").attr('id');
    var section_glyph = "#" + section_id + "_glyph";
    if ($(section_glyph).hasClass("fa-minus-square")) {
        $(section_glyph).removeClass("fa-minus-square").addClass("fa-plus-square");
        $.cookie(section_id, "hide", { expires: 3650 });
        }
    else if ($(section_glyph).hasClass("fa-plus-square")) {
        $(section_glyph).removeClass("fa-plus-square").addClass("fa-minus-square");
        $.cookie(section_id, "show", { expires: 3650 });
        }
    else {
        $(section_glyph).removeClass("fa-plus-square").addClass("fa-minus-square");
        $.cookie(section_id, "show", { expires: 3650 });
        }
    $(this).next().toggle('fast');
    return false;
    });

$("#pfizer").click(function() {
    $("#pfizerarticle").toggle('slow');
    });

$("#news2010show").click(function() {
    $("#news2010").show('slow');
    $("#news2010hide").show();
    $("#news2010show").hide();
    });

$("#news2010hide").click(function() {
    $("#news2010").hide('slow');
    $("#news2010hide").hide();
    $("#news2010show").show();
    });

$('#honorary').click(function () {
    $("#conferred_input").toggle(this.checked);
});

$('#memoriam').click(function () {
    $(".memoriam_input").toggle(this.checked);
});



/* ###### idTabs ~ Sean Catchpole - Version 2.2 - MIT/GPL */
(function(){var dep={"jQuery":"/js/jquery-1.4.2.min.js"};var init=function(){(function($){$.fn.idTabs=function(){var s={};for(var i=0;i<arguments.length;++i){var a=arguments[i];switch(a.constructor){case Object:$.extend(s,a);break;case Boolean:s.change=a;break;case Number:s.start=a;break;case Function:s.click=a;break;case String:if(a.charAt(0)=='.')s.selected=a;else if(a.charAt(0)=='!')s.event=a;else s.start=a;break;}}
if(typeof s['return']=="function")
s.change=s['return'];return this.each(function(){$.idTabs(this,s);});}
$.idTabs=function(tabs,options){var meta=($.metadata)?$(tabs).metadata():{};var s=$.extend({},$.idTabs.settings,meta,options);if(s.selected.charAt(0)=='.')s.selected=s.selected.substr(1);if(s.event.charAt(0)=='!')s.event=s.event.substr(1);if(s.start==null)s.start=-1;var showId=function(){if($(this).is('.'+s.selected))
return s.change;var id="#"+this.href.split('#')[1];var aList=[];var idList=[];$("a",tabs).each(function(){if(this.href.match(/#/)){aList.push(this);idList.push("#"+this.href.split('#')[1]);}});if(s.click&&!s.click.apply(this,[id,idList,tabs,s]))return s.change;for(i in aList)$(aList[i]).removeClass(s.selected);for(i in idList)$(idList[i]).hide();$(this).addClass(s.selected);$(id).show();return s.change;}
var list=$("a[href*='#']",tabs).unbind(s.event,showId).bind(s.event,showId);list.each(function(){$("#"+this.href.split('#')[1]).hide();});var test=false;if((test=list.filter('.'+s.selected)).length);else if(typeof s.start=="number"&&(test=list.eq(s.start)).length);else if(typeof s.start=="string"&&(test=list.filter("[href*='#"+s.start+"']")).length);if(test){test.removeClass(s.selected);test.trigger(s.event);}
return s;}
$.idTabs.settings={start:0,change:false,click:null,selected:".selected",event:"!click"};$.idTabs.version="2.2";$(function(){$(".idTabs").idTabs();});})(jQuery);}
var check=function(o,s){s=s.split('.');while(o&&s.length)o=o[s.shift()];return o;}
var head=document.getElementsByTagName("head")[0];var add=function(url){var s=document.createElement("script");s.type="text/javascript";s.src=url;head.appendChild(s);}
var s=document.getElementsByTagName('script');var src=s[s.length-1].src;var ok=true;for(d in dep){if(check(this,d))continue;ok=false;add(dep[d]);}if(ok)return init();add(src);})();


// ######################################################
// Radio button behavior on account page, privacy tab

$("#sec-paranoid").click(function(){
    $("input.sec-sub").attr("disabled", "disabled");
    $("legend.sec-legend").addClass("gray");
    $("td.sec-td").addClass("gray");
    });

$("#sec-permissive").click(function(){
    $("input.sec-sub").removeAttr("disabled");
    $("legend.sec-legend").removeClass("gray");
    $("td.sec-td").removeClass("gray");
    });

if ($("#sec-paranoid").is(":checked")){
    $("input.sec-sub").attr("disabled", "disabled");
    $("legend.sec-legend").addClass("gray");
    $("td.sec-td").addClass("gray");
    }

// ######################################################
// Radio button behavior on account page, for hire tab

if ($("#for-hire-yes").is(":checked")){
    $("#for-hire-extra-info").show();
    }
else {
    $("#for-hire-extra-info").hide();
    };

$("#for-hire-yes").click(function(){
    $("#for-hire-extra-info").show("fast");
    });

$("#for-hire-no").click(function(){
    $("#for-hire-extra-info").hide("fast");
    });


});

