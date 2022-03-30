window.addEventListener('load', function() {
    //Assessment types retrieve checkbox values
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
    });
    //End retrieve assessment type function
    //Copy previous span when the relevant button is clicked
    $('.copyPrevSpan').on("click", function() {
        var copyText = $(this).prev('span').text();
        console.log(copyText)

        if (!navigator.clipboard) {
            // use old execCommand() way
            var tempTextArea = document.createElement("textarea");
            tempTextArea.value = copyText;
            console.log(tempTextArea.value)
            document.body.appendChild(tempTextArea);
            console.log(tempTextArea.value)
            tempTextArea.focus();
            tempTextArea.select();
            document.execCommand("Copy");
            tempTextArea.remove();
        } else {
            navigator.clipboard.writeText(copyText)
        }
        var btn = $(this);
        var copySpanBtnOriginal = $('.copyPrevSpan').clone().html()
        btn.toggleClass('btn-primary btn-success')
        btn.html('<i class="fa fa-check" aria-hidden="true"></i> Copied');
        window.setTimeout(function() {
            btn.html(copySpanBtnOriginal);
            btn.toggleClass('btn-success btn-primary');
        }, 1500);
    });
    //End copy previous span function
    //Variables that get help get the input from the user
    let nameInputBox = document.getElementById('nameInputBox');
    let courseCodeInputBox = document.getElementById('courseCode');
    let courseTitleInputBox = document.getElementById('courseTitle');
    let bbAssessmentAreaLinkInputBox = document.getElementById('bbAssessmentAreaLink');
    let examSelected = document.getElementById('exam');
    let examPeriodSelect = document.getElementById('examPeriodSelect');
    let examPeriodSelectedSpan = $('span.examPeriodSelected');
    

    //When exam is selected, and an exam period is then selected, then update the HTML in the exam templates
    examPeriodSelect.addEventListener("click", function() {
        var examSelectors = document.querySelector('input[name="examPeriod"]:checked').value;
        switch (examSelectors){
            case 'midSem':
                examPeriodSelectedSpan.html("<strong>Mid-Semester</strong> exam");
                break;
            case 'endOfSem':
                examPeriodSelectedSpan.html("<strong>End-of-Semester</strong> exam")
                break;
            case 'bothExamPeriods':
                examPeriodSelectedSpan.html("<strong>Mid-Semester and End-of-Semester</strong> exams")
                break;
    }
});
    //Get CC Name Input
    nameInputBox.addEventListener('input', function getCCName() {
        $('.ccName').text(nameInputBox.value)
    });
    //Get Course Code Input
    courseCodeInputBox.addEventListener('input', function getCourseCode() {
        $('.courseCodeOutput').text(courseCodeInputBox.value)
    });
    //Get Course Title Input
    courseTitleInputBox.addEventListener('input', function getCourseTitle() {
        $('.courseTitleOutput').text(courseTitleInputBox.value)
    });
    //Get Bb Assessment Area Link Input
    bbAssessmentAreaLinkInputBox.addEventListener('input', function getCourseTitle() {
        $('.bbAssessmentArea').attr('href', bbAssessmentAreaLinkInputBox.value)
    });
    //Reveal all parameters relating to exams that are hidden until the exam assessment type is selected
    $(examSelected).click(function() {
        if (examSelected.checked == true) {
            $('.ifExamSelected').removeClass('d-none');
            setTimeout(function() {
                $('.ifExamSelected').addClass('show')
            }, 100);
        } else {
            $('.ifExamSelected').removeClass('show');
            setTimeout(function() {
                $('.ifExamSelected').addClass('d-none')
            }, 100);
        }
    });
    //When something changes on the page check all inputs to ensure they are filled in, then reveal template cards
    $('body').change(function() {
        var selectedDate = linked1.viewDate;
        if (courseCodeInputBox.value != "" && courseTitleInputBox.value != "" && nameInputBox.value != "" && selectedDate != "") {
            $('#copyTemplateBtn, #templateHR, #templatePackageTextVideo, #ecpSuggestedTextCard, #initialBBCommsTextCard, #weblinkToInsperaTextCard, #weblinkToOnCampusInvigilatedExamsTextCard, #aeaAndSEBPracticeTextCard').removeClass('d-none');
            setTimeout(function() {
                $('#copyTemplateBtn, #templateHR, #templatePackageTextVideo, #ecpSuggestedTextCard, #initialBBCommsTextCard, #weblinkToInsperaTextCard, #weblinkToOnCampusInvigilatedExamsTextCard, #aeaAndSEBPracticeTextCard').addClass('show');
            }, 100);
        } else {
            $('#copyTemplateBtn, #templateHR, #templatePackageTextVideo, #ecpSuggestedTextCard, #initialBBCommsTextCard, #weblinkToInsperaTextCard, #weblinkToOnCampusInvigilatedExamsTextCard, #aeaAndSEBPracticeTextCard').removeClass('show');
            setTimeout(function() {
                $('#copyTemplateBtn, #templateHR, #templatePackageTextVideo, #ecpSuggestedTextCard, #initialBBCommsTextCard, #weblinkToInsperaTextCard, #weblinkToOnCampusInvigilatedExamsTextCard, #aeaAndSEBPracticeTextCard').addClass('d-none');
            }, 100);
        }
      
    });
    //Retrieve time values and calculate 3 days before, 7 days before, and 14 days before the start date
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
            var threeWeeksOut = moment(linked1.viewDate).subtract(21, 'day').format('LLL');
            console.log(threeWeeksOut);
            var dateOfAsst = document.getElementById('dateSelected1');
            //  dateOfAsst.innerText = startDate + '-' + endTime
        });
    });
});