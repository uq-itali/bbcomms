$('body').change(function(){
    if(examPeriod != "" && nameInputBox.value != ""){
    $('#copyTemplateBtn').removeClass('d-none');
  }
else{
    $('#copyTemplateBtn').addClass('d-none');
}
});