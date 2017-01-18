$(document).ready(function() {
//------------------------------------------------------------------------------

function insert_input () {
    var txthtml = '<input type="text" name="state" value="" class="input" id="state">';
    $("#state_slot").empty();
    $("#state_slot").html(txthtml);
};

function populate_pulldown (pullhtml) {
    $("#state_slot").empty();
    $("#state_slot").html(pullhtml);
};

function construct_pulldown (state_order, state_dict) {
    var pullhtml = '<select name="state" class="input" id="state">';
    var i;
    for (i = 0; i < state_order.length; i++) {
        var state_name = state_order[i];
        var state_abbr = state_dict[state_name];
        pullhtml += '<option value="' + state_abbr + '">';
        pullhtml += state_name + '</option>';
    };
    pullhtml += '</select>';
    populate_pulldown(pullhtml);
};

function get_states (country) {
    $.ajax( {
        url: 'ajax_get_states',
        data: 'country=' + country,
        timeout: 3000,
        dataType:'json',
        error: function(x, s, e) {
        alert('error in get states ajax call');
        },
        success: function(d, s, x) {
            var state_order = d.order;
            var state_dict = d.dict;
            if (state_dict) {
                construct_pulldown(state_order, state_dict);
            }
            else {
                insert_input();
            }
        }
    });
};

$("select#countryselect").change(function () {
    get_states( $("select#countryselect option:selected").text() );
});

function alter_pulldowns_for_me (mycountry, mystate) {
    console.log(mycountry);
    console.log(mystate);
    get_states(mycountry);
    $("select#countryselect").val(mycountry);
    $("select#state > option").each(function() {
        console.log(this.text + ' ' + this.value);
    });


};

function get_my_country_and_state () {
    var username = $.cookie('username');
    $.ajax( {
        url: 'ajax_get_location',
        data: 'username=' + username,
        timeout: 3000,
        dataType:'json',
        error: function(x, s, e) {
        alert('error in get country and state ajax call');
        },
        success: function(d, s, x) {
            var mycountry = d.country;
            var mystate = d.state;
            alter_pulldowns_for_me(mycountry, mystate);
        }
    });
};


// ON PAGE LOAD
//get_states("USA");
get_my_country_and_state();


//------------------------------------------------------------------------------
});