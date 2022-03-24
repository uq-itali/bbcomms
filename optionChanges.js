window.addEventListener('load', function() {
    //  let nameOutput = document.getElementsByClassName('ccName');
    let nameInputBox = document.getElementById('nameInputBox');
    //  let courseCodeOutput = document.getElementById('courseCodeOutput');
    let courseCodeInputBox = document.getElementById('courseCode');
    //let courseTitleOutput = document.getElementById('courseTitleOutput');
    let courseTitleInputBox = document.getElementById('courseTitle');
    let examSelected = document.getElementById('exam')
    $('#examPeriodSelect').change(function() {
        var examPeriod = document.getElementById('examPeriodSelect').value;
        if (examPeriod == 'midSem') {
            $('span#examPeriodSelected').html("<strong>Mid-Semester</strong>")
        } else if (examPeriod == 'endOfSem') {
            $('span#examPeriodSelected').html("<strong>End-of-Semester</strong>")
        } else if (examPeriod == '') {
            $('span#examPeriodSelected').html("<strong>Choose your semester above</strong>");
        }
    });
    nameInputBox.addEventListener('input', function getCCName() {
        $('.ccName').text(nameInputBox.value)
    });
    courseCodeInputBox.addEventListener('input', function getCourseCode() {
        $('.courseCodeOutput').text(courseCodeInputBox.value)
    });
    courseTitleInputBox.addEventListener('input', function getCourseTitle() {
        $('.courseTitleOutput').text(courseTitleInputBox.value)
    });
    $(examSelected).change(function() {
        if (examSelected.checked == true) {
            $('.ifExamSelected').removeClass('d-none');
        } else {
            $('.ifExamSelected').addClass('d-none');
        }
    });
    $('body').change(function() {
        var selectedDate = linked1.viewDate;
        var examPeriod = document.getElementById('examPeriodSelect').value;
        if (courseCodeInputBox.value != "" && courseTitleInputBox.value != "" && nameInputBox.value != "" && selectedDate != "") {
            $('#copyTemplateBtn, #ecpSuggestedTextCard, #initialBBCommsTextCard').removeClass('d-none');
            //$('#ecpSuggestedTextCard').removeClass('d-none');
        } else {
            $('#copyTemplateBtn, #ecpSuggestedTextCard, #initialBBCommsTextCard').addClass('d-none');
        }
        /*
       else{
            $('#copyTemplateBtn').addClass('d-none');
            alert('Please ensure you have completed all the necessary fields');
            $('#examPeriodSelect').toggleClass('border-danger');
            $('#nameInputBox').toggleClass('');
        }*/

    });
    $('#date1, #date2').click(function() {
        $('.td-half').click(function() {
            var startDate = moment(linked1.viewDate).format('LLL');
            console.log(startDate);
            var endTime = moment(linked2.viewDate).format('LT')
            console.log(endTime);
            var lastAnnouncement = moment(linked1.viewDate).subtract(3, 'day').format('LLL');
            console.log(lastAnnouncement);
            var oneWeekOut = moment(linked1.viewDate).subtract(7, 'day').format('LLL');
            console.log(oneWeekOut);
            var twoWeeksOut = moment(linked1.viewDate).subtract(14, 'day').format('LLL');
            console.log(twoWeeksOut);
            var dateOfAsst = document.getElementById('dateSelected1');
            //  dateOfAsst.innerText = startDate + '-' + endTime
        });
    });
});