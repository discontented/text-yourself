$('.input').keypress(function (e) {
    if (e.which == '13') {

        //Fades out header.
        $('#instructions').fadeOut()
        //Hides opposite input initially
        $('.input').not(this).hide()

        //If box is empty and enter is pressed, will switch to other box.    
        if ($(this).text() == "") {
            $(this).empty()
            $(this).hide()
            $('.input').not(this).fadeIn().focus()
        }
        else {
            //Determines which side to post on.
            if ($(this).hasClass('right')) {
                firstText = "<div class='msg right'>" + $(this).text() + "</div>"
            }
            else if ($(this).hasClass('left')) {
                firstText = "<div class='msg left'>" + $(this).text() + "</div>"
            }
            //Clears text in input.  Issue it appearing with enter.
            $(this).empty()
            $(this).find('div').remove()
            $(this).hide()
            //Switches to opposite side and places cursor.
            $('.input').not(this).fadeIn().focus()
            //Appends text when enter is pressed.
            $('#msg-container').append(firstText)
        }
    }
})