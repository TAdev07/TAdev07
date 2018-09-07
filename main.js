var clk_hide = false;
var arr_emoji = ['🔴','♥️','♣️','♠️', '🔳','🔵','💙','🔺','🔶','⚫','♦️'];
var obj = {
	word_count : 0,
	str : ""
}

function onHandleChange (e){
	clk_hide = e.checked;
	render(obj.str, obj.word_count);
}

function CountWords (this_field) {
	var str = this_field.value;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    str = str.replace(/ + /g," ");
    fullStr = str.trim()  + " "; 
    
	var initial_whitespace_rExp = /^[^A-Za-z0-9]+/gi;
	var left_trimmedStr = fullStr.replace(initial_whitespace_rExp, "");
	var non_alphanumerics_rExp = rExp = /[^A-Za-z0-9]+/gi;
	var cleanedStr = left_trimmedStr.replace(non_alphanumerics_rExp, " ");
	var splitString = cleanedStr.split(" ");
	var word_count = splitString.length -1;
	
	render(str,word_count);
	return obj = {
		word_count,
		str
	}
}

function render(str,word_count){
	console.log(word_count);
	var value_init = document.getElementById('input').value;
	var list_emoji = '';
	ar = str.split(' ');
	for(i = 0, len = arr_emoji.length; i < word_count; i++){
		var num = ar[i].split('')[0].charCodeAt(0)%10;
		list_emoji += arr_emoji[num];
	}
	if(clk_hide){
		document.getElementById('output').value = list_emoji;
	}
	else{
		document.getElementById('output').value = list_emoji + ' (sub:' +value_init + ' )';
	}
}

$("#copyAll").click(function(){
    $("#output").select();
    document.execCommand('copy');
});