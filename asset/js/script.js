$(document).ready(function () {
    const $hamburger = $('.hamburger');
    const $navLinks = $('.nav-links');

    $hamburger.on('click', function (e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        $navLinks.toggleClass('active');
        $('body').toggleClass('menu-open');
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.nav-links').length &&
            !$(e.target).closest('.hamburger').length) {
            $hamburger.removeClass('active');
            $navLinks.removeClass('active');
            $('body').removeClass('menu-open');
        }
    });

    $navLinks.on('click', function (e) {
        e.stopPropagation();
    });

    $('.nav-links a').on('click', function () {
        $hamburger.removeClass('active');
        $navLinks.removeClass('active');
        $('body').removeClass('menu-open');
    });

    $('.box').on('click', function () {
        $('.box').removeClass('selected');
    
        // Add 'selected' class to the clicked box
        $(this).addClass('selected');
    
        // Enable the 'Next' button
        $('#next-button').prop('disabled', false);
      });

      $('#next-button').on('click', function () {
        if (!$(this).prop('disabled')) {
          window.location.href = 'main_page.html';
        }
      });
    
});

function displayFileName(input, displayId) {
    var fileName = input.files[0] ? input.files[0].name : 'No file chosen';
    $('#' + displayId).text(fileName);
    
    var statusId = 'status' + displayId.match(/\d+/)[0];
    
    // Show "Execute" button in the status column
    $('#' + statusId).html('<button class="execute-btn" onclick="executeProcess(\'' + statusId + '\')">Execute</button>');
}

function executeProcess(statusId) {
    var button = $('#' + statusId).find('.execute-btn');
    
    button.prop('disabled', true).text('Processing...');
    
    setTimeout(function() {
        $('#' + statusId).html(
            '<span class="processed-text">Processed</span>' +
            '<span class="calculation-card">(Calculation Card - Benefits and Pensions)</span>'
        );
    }, 2000); 
}


