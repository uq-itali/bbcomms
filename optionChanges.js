window.addEventListener('load', function() {
    $('input[name="assessmentTypes"]').on('click', function() {
            var assessmentTypesArray = []
            var assessmentTypesChecked = document.querySelectorAll('input[name="assessmentTypes"]:checked')
            for (var i = 0; i < assessmentTypesChecked.length; i++) {
                assessmentTypesArray.push(assessmentTypesChecked[i].value)
            }
            var assessmentTypeArrayToString = assessmentTypesArray.toString().replaceAll(',', ', ');
            console.log(assessmentTypeArrayToString);
            if (assessmentTypeArrayToString.indexOf("Exam") >= 0) {
                var assessmentTypeArrayFinalList = assessmentTypeArrayToString.replace(/,(?=[^,]+$)/, ' and an')
                var assessmentTypeListOr = assessmentTypeArrayToString.replace(/,(?=[^,]+$)/, ' or an')
            } else {
                var assessmentTypeArrayFinalList = assessmentTypeArrayToString.replace(/,(?=[^,]+$)/, ' and')
                var assessmentTypeListOr = assessmentTypeArrayToString.replace(/,(?=[^,]+$)/, ' or')
            }
            console.log(assessmentTypeListOr);
            console.log(assessmentTypeArrayFinalList);
            $('.assessmentTypeListOr').text(assessmentTypeListOr)
            $('.assessmentTypesSelected').text(assessmentTypeArrayFinalList)
        })
        //  let nameOutput = document.getElementsByClassName('ccName');
    let nameInputBox = document.getElementById('nameInputBox');
    //  let courseCodeOutput = document.getElementById('courseCodeOutput');
    let courseCodeInputBox = document.getElementById('courseCode');
    //let courseTitleOutput = document.getElementById('courseTitleOutput');
    let courseTitleInputBox = document.getElementById('courseTitle');
    let bbAssessmentAreaLinkInputBox = document.getElementById('bbAssessmentAreaLink')
    let examSelected = document.getElementById('exam');
    var examPeriodSelected = $("input:radio[name='examPeriod']:checked").val();
    var examPeriodSelected = $("input:checkbox[name='assessmentTypes']:checked").val();
    $('#examPeriodSelect').change(function() {
        if (examPeriodSelected == 'midSem') {
            $('span#examPeriodSelected').html("<strong>Mid-Semester</strong>")
        } else if (examPeriod == 'endOfSem') {
            $('span#examPeriodSelected').html("<strong>End-of-Semester</strong>")
        } else if (examPeriod == 'bothExamPeriods') {
            $('span#examPeriodSelected').html("<strong>Mid-Semester and End-of-Semester</strong>");
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
    bbAssessmentAreaLinkInputBox.addEventListener('input', function getCourseTitle() {
        $('.bbAssessmentArea').attr('href', bbAssessmentAreaLinkInputBox.value)
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