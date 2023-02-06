$(document).ready(function() {
    var data = [
      {id: 1, firstName: 'Sudarshan', lastName: 'Phullel', address:'Butwal'},
      {id: 2, firstName: 'Niraj', lastName: 'Gyawali', address: 'Dovan Palpa'},
      {id: 3, firstName: 'Saroj', lastName: 'Gautam', address: 'Bardaghat'},
      {id: 4, firstName: 'Srijan', lastName: 'Aryal', address: 'Kathmandu'}
    ];
  
    $.each(data, function(index, item) {
      var newRow = $('<tr>').append(
        $('<td>').text(item.id),
        $('<td>').text(item.firstName),
        $('<td>').text(item.lastName),
        $('<td>').text(item.address)
      ).click(function() {
        $('#modal-body').text(item.firstName + ' ' + item.lastName + ': ' + item.address);
        $('#exampleModal').modal('show');
      });
      $('#table-body').append(newRow);
    });
  });