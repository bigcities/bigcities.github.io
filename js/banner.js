$('.index-trigger')
.on('mouseover', function() {
    $(this).children('.index-dropdown').addClass('active')
})
.on('mouseout', function() {
    $(this).children('.index-dropdown').removeClass('active')
})