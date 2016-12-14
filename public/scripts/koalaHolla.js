console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // load existing koalas on page load
  getKoalas();

  // add koala button click
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    var objectToSend = {
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      sex: $('#sexIn').val(),
      ready_for_transfer: $('#readyForTransferIn').val(),
      notes: $('#notesIn').val(),
    };
    // call saveKoala with the new obejct
    saveKoala( objectToSend );
  }); //end addButton on click
}); // end doc ready

var getKoalas = function(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    url: '/getKoalas',
    type: 'GET',
    success: function( data ){
      console.log( 'got some koalas: ', data );
      displaySomeKoalas( data );
    } // end success
  }); //end ajax
  // display on DOM with buttons that allow edit of each
} // end getKoalas

var saveKoala = function( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
  $.ajax({
    url: '/addKoala',
    type: 'post',
    data: newKoala,
    success: function( data ){
      console.log( 'got some koalas: ', data );
      displaySomeKoalas( data );

    } // end success
  }); //end ajax
}

var displaySomeKoalas = function( koalaArray ){
  var outputText = '';
  $('#outputKoalas').html('');
  for (var i = 0; i < koalaArray.length; i++) {
    $('#outputKoalas').append('<tr><td>' + koalaArray[i].name + '</td> <td>' + koalaArray[i].age + '</td> <td>' + koalaArray[i].sex + '</td> <td>' + koalaArray[i].ready_for_transfer + '</td> <td>' + koalaArray[i].notes + '</td></tr>');
    // <tr><td>koalaArray[i].name</td> <td>koalaArray[i].age</td> <td>koalaArray[i].sex</td> <td>koalaArray[i].ready_for_transfer</td> <td>koalaArray[i].notes</td></tr>
  }
}; // end displaySomeKoalas()
