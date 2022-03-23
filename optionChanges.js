window.addEventListener('load', function() {
    console.log('beforeConstant')
    const linked1 = new tempusDominus.TempusDominus(document.getElementById('date1'), {
        display: {
            sideBySide: true,
        }

    });
    console.log(linked1.viewDate)
    const linked2 = new tempusDominus.TempusDominus(document.getElementById('date2'), {
        useCurrent: false,
        display: {
            sideBySide: true,
        }
    });
    console.log(linked1.viewDate)
    console.log('afterConst')
    alert('optionChangesStarted')
    console.log('optionChangesStarted')
    console.log(linked1.viewDate)
    console.log(linked2.viewDate)

    let nameInput = document.getElementById('ccName');
    let nameInputBox = document.getElementById('nameInputBox');
    $('#date1').click(function() {
        var selectedDate = linked1.viewDate;
        var dateOfAsst = document.getElementById('dateSelected1')
        dateOfAsst.innerText = selectedDate
    })
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
    nameInputBox.addEventListener('input', function getText() {
        nameInput.innerText = nameInputBox.value;
    });
    $('body').change(function() {
        var selectedDate = linked1.viewDate;
        var examPeriod = document.getElementById('examPeriodSelect').value;
        if (examPeriod != "" && nameInputBox.value != "" && selectedDate != "") {
            $('#copyTemplateBtn').removeClass('d-none');
        }
        /*
       else{
            $('#copyTemplateBtn').addClass('d-none');
            alert('Please ensure you have completed all the necessary fields');
            $('#examPeriodSelect').toggleClass('border-danger');
            $('#nameInputBox').toggleClass('');
        }*/
        $('#date1').change(function() {
            var startDate = moment(linked1.viewDate).format('LLL');
            console.log(startDate);
            var endDate = moment(linked1.viewDate).format('LLL')
            console.log(endDate);
            var lastAnnouncement = moment(linked1.viewDate).subtract(3, 'day').format('LLL');
            console.log(lastAnnouncement);
            var oneWeekOut = moment(linked1.viewDate).subtract(7, 'day').format('LLL');
            console.log(oneWeekOut);
            var twoWeeksOut = moment(linked1.viewDate).subtract(14, 'day').format('LLL');
            console.log(twoWeeksOut);
        });
    });
    alert('optionChangesFinished')
    console.log('optionChangesFinished')
});