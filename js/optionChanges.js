window.addEventListener("load", function () {
        
    //Assessment types retrieve checkbox values
    $('input[name="assessmentTypes"]').on("click", function () {
        var assessmentTypesArray = [];
        var assessmentTypesChecked = document.querySelectorAll('input[name="assessmentTypes"]:checked');
        for (var i = 0; i < assessmentTypesChecked.length; i++) {
            assessmentTypesArray.push(assessmentTypesChecked[i].value);
        }
        var assessmentTypeArrayToString = assessmentTypesArray
            .toString()
            .replaceAll(",", ", ");
        console.log(assessmentTypeArrayToString);
        if (assessmentTypeArrayToString.indexOf("Exam") >= 0) {
            var assessmentTypeArrayFinalList = assessmentTypeArrayToString.replace(/,(?=[^,]+$)/," and an");
            var assessmentTypeListOr = assessmentTypeArrayToString.replace(/,(?=[^,]+$)/," or an");
        } else {
            var assessmentTypeArrayFinalList = assessmentTypeArrayToString.replace(/,(?=[^,]+$)/," and");
            var assessmentTypeListOr = assessmentTypeArrayToString.replace(/,(?=[^,]+$)/," or");
        }
        console.log(assessmentTypeListOr);
        console.log(assessmentTypeArrayFinalList);
        $(".assessmentTypeListOr").text(assessmentTypeListOr);
        $(".assessmentTypesSelected").text(assessmentTypeArrayFinalList);
    });
    //End retrieve assessment type function
    //Copy previous span when the relevant button is clicked
    $(".copyPrevSpan").on("click", function () {
        var copyText = $(this).prev("span").text();
        console.log(copyText);
        if (!navigator.clipboard) {
            // use old execCommand() way
            var tempTextArea = document.createElement("textarea");
            tempTextArea.value = copyText;
            console.log(tempTextArea.value);
            document.body.appendChild(tempTextArea);
            console.log(tempTextArea.value);
            tempTextArea.focus();
            tempTextArea.select();
            document.execCommand("Copy");
            tempTextArea.remove();
        } else {
            navigator.clipboard.writeText(copyText);
        }
        var btn = $(this);
        var copySpanBtnOriginal = $(".copyPrevSpan").clone().html();
        btn.toggleClass("btn-primary btn-success");
        btn.html('<i class="fa fa-check" aria-hidden="true"></i> Copied');
        window.setTimeout(function () {
            btn.html(copySpanBtnOriginal);
            btn.toggleClass("btn-success btn-primary");
        }, 1500);
    });
    //End copy previous span function
    //Variables that get help get the input from the user
    let nameInputBox = document.getElementById("nameInputBox");
    let courseCodeInputBox = document.getElementById("courseCode");
    let courseTitleInputBox = document.getElementById("courseTitle");
    let bbAssessmentAreaLinkInputBox = document.getElementById("bbAssessmentAreaLink");
    let locationInputBox = document.getElementById("locationInputBox");
    let examSelected = document.getElementById("exam");
    let examPeriodSelect = document.getElementById("examPeriodSelect");
    let examPeriodSelectedSpan = $("span.examPeriodSelected");
    let teachingPeriodSelect = document.getElementById("teachingPeriod");
    let teachingPeriodSelectedSpan = $("span.teachingPeriodSelected");
    let ltiSelect = document.getElementById("examAccessSelect");
    let ltiSelectedSpan = $("span.examAccessType");
    let schoolOrCentralSelect = document.getElementById("schoolOrCentral");
    let schoolOrCentralSelectedSpan = $("span.schoolOrCentralSelected");
    let onOrOffCampusSelect = document.getElementById("onOrOffCampus");
    let onOrOffCampusSelectedSpan = $("span.onOrOffCampusSelected");
    let invOrNonInvSelect = document.getElementById("invOrNonInv");
    let invOrNonInvSelectedSpan = $("span.invOrNonInvSelected");
    let browserTypeSelect = document.getElementById("browserType");
    let browserTypeSelectedSpan = $("span.browserTypeSelected");
    var currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let durationSelect = document.getElementById('durationPicker');
    var examTypeEISSpan = $('span.examTypeEIS')
    var examDateAndTimeSpan = $('span.examDateAndTime');

    //Listens for the teaching period selector and adds text to relative templates based on selection 
    teachingPeriodSelect.addEventListener("click", function () {
        var teachingPeriodSelectors = document.querySelector('input[name="semester"]:checked').value;
        switch (teachingPeriodSelectors) {
            case "sem1":
                teachingPeriodSelectedSpan.html("Semester 1");
                break;
            case "sem2":
                teachingPeriodSelectedSpan.html("Semester 2");
                break;
            case "summerSem":
                teachingPeriodSelectedSpan.html("Summer Semester");
                break;
        }
    });
    //Listens for the exam period selector and adds text to relative templates based on selection
    examPeriodSelect.addEventListener("click", function () {
        var examSelectors = document.querySelector('input[name="examPeriod"]:checked').value;
        switch (examSelectors) {
            case "midSem":
                examPeriodSelectedSpan.html("<strong>Mid-Semester</strong> exam");
                break;
            case "endOfSem":
                examPeriodSelectedSpan.html("<strong>End-of-Semester</strong> exam");
                break;
            case "bothExamPeriods":
                examPeriodSelectedSpan.html("<strong>Mid-Semester and End-of-Semester</strong> exams");
                break;
        }
    });
    //Listens for the school or centrally run selector and adds text to relative templates based on selection
    ltiSelect.addEventListener("click", function () {
        var ltiSelectors = document.querySelector('input[name="examAccessType"]:checked').value;
        switch (ltiSelectors) {
            case "ltiAccess":
                ltiSelectedSpan.html("via a link in Blackboard");
                break;
            case "notViaLTI":
                ltiSelectedSpan.html("directly via <a href=\"https://uqi.inspera.com\" target=\"blank\" title=\"Inspera at UQ\">uqi.inspera.com</a>");
                break;
        }
    });
    //Listens for the school or centrally run selector and adds text to relative templates based on selection
    schoolOrCentralSelect.addEventListener("click", function () {
        var schoolOrCentralSelectors = document.querySelector('input[name="schoolOrCentral"]:checked').value;
        switch (schoolOrCentralSelectors) {
            case "School-based":
                $(schoolOrCentralSelectedSpan).html("School-based");
                break;
            case "Centrally run":
                $(schoolOrCentralSelectedSpan).html("Centrally run");
                break;
            case "School-based, but Centrally run":
                $(schoolOrCentralSelectedSpan).html("School-based but Centrally scheduled");
                break;
        }
    });
      //Listens for the invigilated or non-invigilated selector and adds text to relative templates based on selection
      invOrNonInvSelect.addEventListener("click", function () {
        var invOrNonInvSelectors = document.querySelector('input[name="invigilation"]:checked').value;
        switch (invOrNonInvSelectors) {
            case "Invigilated":
                $(invOrNonInvSelectedSpan).html("<strong>invigilated</strong>");
                break;
            case "Non-Invigilated":
                $(invOrNonInvSelectedSpan).html("<strong>non-invigilated</strong>");
                break;
        }
    });
    //Listens for the on or off campus selector and adds text to relative templates based on selection
    onOrOffCampusSelect.addEventListener("click", function () {
        var onOrOffCampusSelectors = document.querySelector('input[name="onOrOff"]:checked').value;
        switch (onOrOffCampusSelectors) {
            case "On-Campus":
                $(onOrOffCampusSelectedSpan).html("<strong>on-campus</strong>");
                break;
            case "Off-Campus":
                $(onOrOffCampusSelectedSpan).html("<strong>off-campus</strong>");
                break;
            case "Combo":
                $(onOrOffCampusSelectedSpan).html("<strong>on-campus and online for our online students</strong>");
                break;
        }
    });
    //Listens for the closed or open browser selector and adds text to relative templates based on selection
    browserTypeSelect.addEventListener("click", function () {
        var browserTypeSelectors = document.querySelector('input[name="browserType"]:checked').value;
        switch (browserTypeSelectors) {
            case "Closed Browser":
                $(browserTypeSelectedSpan).html("<strong>Closed Browser using Safe Exam Browser (the digital exam version of a closed book exam)</strong>");
                break;
            case "Open Browser":
                $(browserTypeSelectedSpan).html("<strong>Open Browser (device not locked down, the digital exam version of an open book exam)</strong>");
                break;
        }
    });
    //Get CC Name Input
    nameInputBox.addEventListener("input", function getCCName() {
        $(".ccName").text(nameInputBox.value);
    });
    //Get Course Code Input
    courseCodeInputBox.addEventListener("input", function getCourseCode() {
        $(".courseCodeOutput").text(courseCodeInputBox.value);
    });
    //Get Course Title Input
    courseTitleInputBox.addEventListener("input", function getCourseTitle() {
        $(".courseTitleOutput").text(courseTitleInputBox.value);
    });
    //Get Bb Assessment Area Link Input
    bbAssessmentAreaLinkInputBox.addEventListener("input",function getBbAssessmentAreaLink() {
            $(".bbAssessmentArea").attr("href", bbAssessmentAreaLinkInputBox.value);
        }
    );
    locationInputBox.addEventListener("input",function getExamLocation() {
        $(".examLocation").html("<strong>Location:</strong>" + " " + locationInputBox.value);
    }
);
    //Reveal all parameters relating to exams that are hidden until the exam assessment type is selected
    $(examSelected).click(function () {
        if (examSelected.checked == true) {
            $("span.currentYear").html(currentYear);
            $(".ifExamSelected").removeClass("d-none");
            setTimeout(function () {
                $(".ifExamSelected").addClass("show");
            }, 100);
        } else {
            $(".ifExamSelected").removeClass("show");
            setTimeout(function () {
                $(".ifExamSelected").addClass("d-none");
            }, 100);
        }
    });
    //When something changes on the page check all inputs to ensure they are filled in, then reveal template cards
    $("body").change(function () {
        var invOrNonInvSelectors = document.querySelector('input[name="invigilation"]:checked').value;
        var onOrOffCampusSelectors = document.querySelector('input[name="onOrOff"]:checked').value;
        var examDateOverride = document.querySelector('input[name="examPeriodOverride"]:checked').value;
        if(examDateOverride == "examPeriodOverride"){
            $(examDateAndTimeSpan).html("Refer to your personal exam timetable for the scheduled date and time of this exam.");
        }
        else{getDateAndTime()
        }
        // var browserTypeSelectors = document.querySelector('input[name="browserType"]:checked').value;
        var selectedDate = linked1.viewDate;
        if (courseCodeInputBox.value != "" && courseTitleInputBox.value != "" && nameInputBox.value != "" && bbAssessmentAreaLinkInputBox !="" && selectedDate != "") {
            $("#copyTemplateBtn, #templateHR, #templatePackageTextVideo, #ecpSuggestedTextCard, #initialBBCommsTextCard, #weblinkToInsperaTextCard, #weblinkToOnCampusInvigilatedExamsTextCard, #aeaAndSEBPracticeTextCard, #aeaPromptOnlyExamTextCard, #examInformationSheet").removeClass("d-none");
            setTimeout(function () {
                $("#copyTemplateBtn, #templateHR, #templatePackageTextVideo, #ecpSuggestedTextCard, #initialBBCommsTextCard, #weblinkToInsperaTextCard, #weblinkToOnCampusInvigilatedExamsTextCard, #aeaAndSEBPracticeTextCard, #aeaPromptOnlyExamTextCard, #examInformationSheet").addClass("show");
            }, 100);
        } else {
            $("#copyTemplateBtn, #templateHR, #templatePackageTextVideo, #ecpSuggestedTextCard, #initialBBCommsTextCard, #weblinkToInsperaTextCard, #weblinkToOnCampusInvigilatedExamsTextCard, #aeaAndSEBPracticeTextCard, #aeaPromptOnlyExamTextCard, #examInformationSheet").removeClass("show");
            setTimeout(function () {
                $("#copyTemplateBtn, #templateHR, #templatePackageTextVideo, #ecpSuggestedTextCard, #initialBBCommsTextCard, #weblinkToInsperaTextCard, #weblinkToOnCampusInvigilatedExamsTextCard, #aeaAndSEBPracticeTextCard, #aeaPromptOnlyExamTextCard, #examInformationSheet").addClass("d-none");
            }, 100);
        }
        if (invOrNonInvSelectors == "Invigilated" && onOrOffCampusSelectors == "On-Campus"){
            $(examTypeEISSpan).html('On-campus invigilated exam');
        }
        else if (invOrNonInvSelectors == "Invigilated" && onOrOffCampusSelectors == "Off-Campus"){
            $(examTypeEISSpan).html('Off-campus invigilated exam');
        }
        else if (invOrNonInvSelectors == "Non-Invigilated" && onOrOffCampusSelectors == "Off-Campus"){
            $(examTypeEISSpan).html('Off-campus non-invigilated exam');
        }
        else if (invOrNonInvSelectors == "Invigilated" && onOrOffCampusSelectors == "Combo"){
            $(examTypeEISSpan).html('Invigilated exam both on-campus for face to face and off campus for our online students')
        }
        
    });
    //Retrieve time values and calculate 3 days before, 7 days before, and 14 days before the start date
    
    $("#date1, #date2").click(function getDateAndTime() {
        $(".td-half").click(function () {
            var startDate = moment(linked1.viewDate).format("LLL");
            console.log(startDate);
            var endTime = moment(linked2.viewDate).format("LT");
            console.log(endTime);
            var lastAnnouncement = moment(linked1.viewDate)
                .subtract(3, "day")
                .format("LLL");
            console.log(lastAnnouncement);
            var oneWeekOut = moment(linked1.viewDate)
                .subtract(7, "day")
                .format("LLL");
            console.log(oneWeekOut);
            var twoWeeksOut = moment(linked1.viewDate)
                .subtract(14, "day")
                .format("LLL");
            console.log(twoWeeksOut);
            var threeWeeksOut = moment(linked1.viewDate)
                .subtract(21, "day")
                .format("LLL");
            console.log(threeWeeksOut);
            var dateOfAsst = document.getElementById("dateSelected1");
            //  dateOfAsst.innerText = startDate + '-' + endTime
            $(examDateAndTimeSpan).html(startDate + " - " + endTime);
        });
    });
   durationSelect.addEventListener("click", function getDuration(){
    var durationHours = document.getElementById('hours').value;
    var durationMins = document.getElementById('minutes').value;
    var addPlanningTime = parseInt(durationMins) + 10
    var textHours = document.getElementById('bdp-hours-label').innerText; 
    var textMins = document.getElementById('bdp-minutes-label').innerText;
    var examDurationSpan = $('span.examWorkingTime'); 
    var examTotalDurationSpan = $('span.examTotalDuration');
    if (parseInt(durationMins) == 0){  
        var durationNoPlanning = durationHours + " " + textHours;
        var fullDuration = durationHours + " " + textHours + " " + addPlanningTime + " " + textMins;
        console.log(durationNoPlanning);
        console.log(fullDuration);
        $(examDurationSpan).html(durationNoPlanning);
        $(examTotalDurationSpan).html(fullDuration);
    }
    else if (parseInt(durationMins) > 0 && parseInt(durationMins) <= 45 && parseInt(durationHours) == 0){
        var durationNoPlanning = durationMins + " " + textMins;
        var fullDuration = addPlanningTime + " " + textMins;
        console.log(durationNoPlanning);
        console.log(fullDuration);
        $(examDurationSpan).html(durationNoPlanning);
        $(examTotalDurationSpan).html(fullDuration);
    }
    else if(parseInt(durationMins) == 50 && parseInt(durationHours) == 0){
        durationHours = parseInt(durationHours) + 1;
        var durationNoPlanning = durationMins + " " + textMins;
        var fullDuration =  durationHours + " " + "hour";
        console.log(durationNoPlanning);
        console.log(fullDuration);
        $(examDurationSpan).html(durationNoPlanning);
        $(examTotalDurationSpan).html(fullDuration);
    }
    else if(parseInt(durationMins) == 55 && parseInt(durationHours) == 0){
        var durationNoPlanning = durationMins + " " + textMins;
        durationMins = '5';
        durationHours = parseInt(durationHours) + 1;
        var fullDuration = durationHours + " " + "hour" + " " + durationMins + " " + textMins;
        console.log(durationNoPlanning);
        console.log(fullDuration);
        $(examDurationSpan).html(durationNoPlanning);
        $(examTotalDurationSpan).html(fullDuration);
    }
    else if (parseInt(durationMins) > 0 && parseInt(durationMins) <= 45 && parseInt(durationHours) >= 1){
        var durationNoPlanning = durationHours + " " + textHours + " " + durationMins + " " + textMins;
        var fullDuration = durationHours + " " + textHours + " " + addPlanningTime + " " + textMins;
        console.log(durationNoPlanning);
        console.log(fullDuration);
        $(examDurationSpan).html(durationNoPlanning);
        $(examTotalDurationSpan).html(fullDuration);
    }
    else if(parseInt(durationMins) == 50 && parseInt(durationHours) >= 1){
        var durationNoPlanning = durationHours + " " + textHours + " " + durationMins + " " + textMins;
        durationHours = parseInt(durationHours) + 1;
        var fullDuration = durationHours + " " + "hours";
        console.log(durationNoPlanning);
        console.log(fullDuration);
        $(examDurationSpan).html(durationNoPlanning);
        $(examTotalDurationSpan).html(fullDuration);
    }
    else if(parseInt(durationMins) == 55 && parseInt(durationHours) >= 1){
        var durationNoPlanning = durationHours + " " + textHours + " " + durationMins + " " + textMins;
        durationMins = '5';
        durationHours = parseInt(durationHours) + 1;
        var fullDuration = durationHours + " " + "hours" + " " + durationMins + " " + textMins;
        console.log(durationNoPlanning);
        console.log(fullDuration);
        $(examDurationSpan).html(durationNoPlanning);
        $(examTotalDurationSpan).html(fullDuration);
    }
   });
   var recommendedMaterialsSelect = document.getElementById('recommendedMaterialsSelect');
   var recommendedMaterialsListBelow = document.getElementById('recommendedMaterialsListBelow');
   var specificMaterialsTextArea = document.getElementById('specificMaterialsList');
   var specificMaterialsSpan = $('span.specificMaterialsForExam');
   var calculatorSelector = document.getElementById('calculatorSelect');
   var calculatorSelectedSpan = $('span.calculatorSelection');
   var importantExamConditionInfo = $('li.importantExamConditionInfo');
   calculatorSelector.addEventListener("click", function () {
    var calculatorSelected = document.querySelector('input[name="calculator"]:checked').value;
    switch (calculatorSelected) {
        case "noCalculator":
            calculatorSelectedSpan.html("<strong>No calculators allowed</strong>");
            break;
        case "anyCalculator":
            calculatorSelectedSpan.html("<strong>Any calculator allowed</strong>");
            break;
        case "fx82Only":
            calculatorSelectedSpan.html("<strong>Casio FX82 only</strong>");
            break;
        case "fx82OrUQLabelled":
            calculatorSelectedSpan.html("<strong>Casio FX82 only or UQ labelled calculator only</strong>");
            break;
    }
   });
   var recommendedMaterialsRow = document.getElementById('recommendedMaterialsRow');
   recommendedMaterialsSelect.addEventListener("click", function () {
       var specificMaterialsSelected = document.querySelector('input[name="recommendedMaterials"]:checked').value;
       switch (specificMaterialsSelected) {
           case "noRecommendedMaterials":
            $(recommendedMaterialsRow).addClass('d-none');
            $(specificMaterialsTextArea).addClass('d-none');
            $(importantExamConditionInfo).html('You are not permitted to access any online or hard copy resources during this closed book exam, and hence you cannot cut-and-paste material other than your own work as answers.');
               break;
               case "openBook":
                   $(recommendedMaterialsRow).removeClass('d-none');
                   $(specificMaterialsTextArea).addClass('d-none');
                   $(specificMaterialsSpan).html("<strong>This is an open book exam. Any resources are allowed.</strong>")
                   $(importantExamConditionInfo).html("This is an open book exam. Any resources are allowed.");
                   
                   break;
                   case "specificMaterials":
                       $(recommendedMaterialsRow).removeClass('d-none');
                       $(recommendedMaterialsListBelow).removeClass('d-none');
                       $(specificMaterialsTextArea).removeClass('d-none');
                       $(importantExamConditionInfo).html('You are permitted to refer to the allowed resources for this exam, but you cannot cut-and-paste material other than your own work as answers.');
                       break;
    }   
    });
    specificMaterialsTextArea.addEventListener("input",function getSpecificMaterials(){
        var plainText = $("#specificMaterialsTextArea").summernote("code");
        console.log(plainText);
        specificMaterialsSpan.html(plainText);
    });
});
