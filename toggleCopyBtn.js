$('body').change(function(){
    var examPeriod = $('#examPeriodSelect').val();
    if(examPeriod != "" && nameInputBox.value != ""){
    $('#copyTemplateBtn').removeClass('d-none');
  }
else{
    $('#copyTemplateBtn').addClass('d-none');
}
});