$(document).ready(function() {
    showListPromotion();
});

function showListPromotion() {
    $.ajax({
        url: 'http://localhost:8080/promotion',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            $('#promotionTableBody').empty();
            $.each(data, function(index, promotion) {
                var row = '<tr>' +
                    '<td>' + (index + 1) + '</td>' +
                    '<td>' + promotion.title + '</td>' +
                    '<td>' + promotion.startTime + '</td>' +
                    '<td>' + promotion.endTime + '</td>' +
                    '<td>' + promotion.discount + '</td>' +
                    '<td>' + promotion.detail + '</td>' +
                    '<td><button onclick="editPromotion(' + promotion.id + ')" class="btn btn-success"><i class="fas fa-edit"></i> Edit</button>' +
                    ' <button onclick="deletePromotion(' + promotion.id + ')" class="btn btn-danger"><i class="fas fa-dollar-sign"></i> Delete</button></td>' +
                    '</tr>';
                $('#promotionTableBody').append(row);
            });
        },
        error: function(xhr, status, error) {
            console.error('Error fetching promotions:', error);
            alert('Failed to fetch promotions. Please try again later.');
        }
    });
}

function editPromotion(id) {
    console.log('Edit promotion with ID:', id);
}

function deletePromotion(id) {
    console.log('Delete promotion with ID:', id);
}
