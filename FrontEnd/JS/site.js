// Backend call
$.getJSON('/data', function(d){
    alert(JSON.stringify(d));
    $('#name').text(d.name);
    $('#college').text(d.college);
    $('#regno').text(d.regno);

});
// Show data from js file to html file