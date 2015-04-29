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

/* ###### Country pulldown changes state/province contents. ###### */
$(function(){
    var us_states = '<select name="state" class="input"><option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">D.C.</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option></select>';
    var can_states = '<select name="state" class="input"><option value="AB">Alberta</option><option value="BC">British Columbia</option><option value="MB">Manitoba</option><option value="NB">New Brunswick</option><option value="NL">Newfoundland and Labrador</option><option value="NT">Northwest Territories</option><option value="NS">Nova Scotia</option><option value="NU">Nunavut</option><option value="ON">Ontario</option><option value="PE">Prince Edward Island</option><option value="QC">Quebec</option><option value="SK">Saskatchewan</option><option value="YT">Yukon</option></select>';
    var mex_states = '<select name="state" class="input"><option value="AGS">Aguascalientes</option><option value="BCN">Baja California Norte</option><option value="BCS">Baja California Sur</option><option value="CAM">Campeche</option><option value="CHIS">Chiapas</option><option value="CHIH">Chihuahua</option><option value="COAH">Coahuila</option><option value="COL">Colima</option><option value="DF">Distrito Federal</option><option value="DGO">Durango</option><option value="GTO">Guanajuato</option><option value="GRO">Guerrero</option><option value="HGO">Hidalgo</option><option value="JAL">Jalisco</option><option value="MEX">Mexico (Estado de)</option><option value="MICH">Michoacan </option><option value="MOR">Morelos</option><option value="NAY">Nayarit</option><option value="NL">Nuevo Leon</option><option value="OAX">Oaxaca</option><option value="PUE">Puebla</option><option value="QRO">Queretaro</option><option value="QROO">Quintana Roo</option><option value="SLP">San Luis Potosi</option><option value="SIN">Sinaloa</option><option value="SON">Sonora</option><option value="TAB">Tabasco</option><option value="TAMPS">Tamaulipas</option><option value="TLAX">Tlaxcala</option><option value="VER">Veracruz</option><option value="YUC">Yucatan</option><option value="ZAC">Zacatecas</option></select>';
    var txt_state = '<input type="text" name="state" value="" class="input">';
    $("#state_slot").empty();
    $("#state_slot").html(us_states);
    $("select#countryselect").change(function () {
        if ( $("select#countryselect option:selected").text() == 'United States of America' )
            {
            $("#state_slot").empty();
            $("#state_slot").html(us_states);
            }
        else if ( $("select#countryselect option:selected").text() == 'Canada' )
            {
            $("#state_slot").empty();
            $("#state_slot").html(can_states);
            }
        else if ( $("select#countryselect option:selected").text() == 'Mexico' )
            {
            $("#state_slot").empty();
            $("#state_slot").html(mex_states);
            }
        else
            {
            $("#state_slot").empty();
            $("#state_slot").append(txt_state);
            }
    });
});

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

