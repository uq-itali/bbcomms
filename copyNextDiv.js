window.addEventListener("load", function(){
        $('.copybutton').on('click', function(event) {
        var btn = $(this);
        var snippet = btn.next('div').html();
        console.log("@GB: snippet = ", snippet);
        copyTextToClipboard(snippet);
        var originalBtn = $('.copybutton').clone().html()        
        btn.html('<i class="fa fa-check" aria-hidden="true"></i> Code copied');
        window.setTimeout(function() {
                btn.html(originalBtn);
            btn.toggleClass('btn-success btn-light');
        }, 1500);
        /* Act on the event */
    });
});

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
 
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';

    } catch (err) {

    }

    document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function() {

    }, function(err) {

    });
}
