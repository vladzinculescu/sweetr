function sweetnr(elementID, openTag, closeTag) {
    var textArea = $('#' + elementID);
    var len = textArea.val().length;
    var start = textArea[0].selectionStart;
    var end = textArea[0].selectionEnd;
    if(!closeTag) {
        closeTag = '';
    }
    if(end-start){ //wrapp text
        var selectedText = textArea.val().substring(start, end);
        var replacement = openTag + selectedText + closeTag;
    } else { //insert before text
        var replacement = openTag;
        closeTag = '';
    }
        textArea.val(textArea.val().substring(0, start) + replacement + textArea.val().substring(end, len));
}

$(document).ready(function(){
	$('.sweetr').remove();
	$('<style></style')
        .addClass('sweetr')
		.html('.sweetr { background: #eee; border-top: 1px solid #ccc; padding: 5px 2px; overflow: hidden; zoom: 1; } .sweetr .button { border: 1px solid transparent; border-radius: 10px; color: #333; cursor: pointer; display: inline-block; font-size: 11px; padding: 1px 8px; text-decoration: none; } .sweetr .button:hover { background: #fff; border-color: #BBB; border-right-color: #DDD; border-bottom-color: #DDD; }')
		.appendTo('body');
	var sweetr = $('<div></div>').attr('class','sweetr')
	$('<span></span>')
		.html('H1')
		.addClass('button')
		.click(function(e){
			sweetnr($(this).parent().next().attr('id'),'# ');
		})
		.appendTo($(sweetr));
	$('<span></span>')
		.html('H2')
		.addClass('button')
		.click(function(e){
			sweetnr($(this).parent().next().attr('id'),'## ');
		})
		.appendTo($(sweetr));
	$('<span></span>')
        .html('H3')
        .addClass('button')
        .click(function(e){
            sweetnr($(this).parent().next().attr('id'),'### ');
        })
        .appendTo($(sweetr));
    $('<span></span>')
		.html('IMG')
		.addClass('button')
		.click(function(e){
            e.preventDefault();
            e.stopPropagation();
            sweetnr($(this).parent().next().attr('id'),'![Image](imageURL)');
		})
		.appendTo($(sweetr));
    $('<span></span>')
        .html('B')
        .addClass('button')
        .css({
            'font-weight'     : 'bold'
        })
        .click(function(e){
            e.preventDefault();
            e.stopPropagation();
            sweetnr($(this).parent().next().attr('id'),'**','**');
        })
        .appendTo($(sweetr));
    $('<span></span>')
        .html('i')
        .addClass('button')
        .css({
            'font-family'   : 'serif',
            'font-size'     : '12px',
            'font-style'    : 'italic'
        })
        .click(function(e){
            e.preventDefault();
            e.stopPropagation();
            sweetnr($(this).parent().next().attr('id'),'*','*');
        })
        .appendTo($(sweetr));
    $('<span></span>')
        .html('Break')
        .addClass('button')
        .click(function(e){
            e.preventDefault();
            e.stopPropagation();
            sweetnr($(this).parent().next().attr('id'),' \n\n---\n');
        })
        .appendTo($(sweetr));
	$('textarea').before(sweetr);
});