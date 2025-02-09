const radioButtons = document.querySelectorAll('input[type="radio"][name="reasonsubmit"]');
radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', function() {
    contentE.classList.add('d-none');
    contentF.classList.add('d-none');
    contentH.classList.add('d-none');
    contentD.classList.add('d-none');
    contentA.classList.add('d-none');

});
})
    const optionA = document.getElementById('NonresidentGetITIN');
    const optionD = document.getElementById('dependentresidentalien');
    const optionE = document.getElementById('spouseofuscitizen');
    const optionF = document.getElementById('nonresidentstudentprofessor');
    const optionH = document.getElementById('others');

    const contentA = document.querySelector('.option-a');
    const contentD = document.querySelector('.option-d');
    const contentE = document.querySelector('.option-e');
    const contentF = document.querySelector('.option-f');
    const contentH = document.querySelector('.option-h');

    optionA.addEventListener('change', function() {
        if(this.checked) {
            contentE.classList.add('d-none');
            contentF.classList.add('d-none');
            contentH.classList.add('d-none');
            contentD.classList.add('d-none');
            contentA.classList.remove('d-none');
        }
    });

    optionD.addEventListener('change', function() {
        if(this.checked) {
            contentA.classList.add('d-none');
            contentE.classList.add('d-none');
            contentF.classList.add('d-none');
            contentH.classList.add('d-none');
            contentD.classList.remove('d-none');
        }
    });

    optionE.addEventListener('change', function() {
        if(this.checked) {
            contentA.classList.add('d-none');
            contentD.classList.add('d-none');
            contentF.classList.add('d-none');
            contentH.classList.add('d-none');
            contentE.classList.remove('d-none');
        }
    });

    optionF.addEventListener('change', function() {
        if(this.checked) {
            contentA.classList.add('d-none');
            contentD.classList.add('d-none');
            contentE.classList.add('d-none');
            contentH.classList.add('d-none');
            contentF.classList.remove('d-none');
        }
    });

    optionH.addEventListener('change', function() {
        if(this.checked) {
            contentA.classList.add('d-none');
            contentD.classList.add('d-none');
            contentE.classList.add('d-none');
            contentF.classList.add('d-none');
            contentH.classList.remove('d-none');
        }
    });

    const identificationdocuments = document.querySelectorAll('input[type="radio"][name="identificationdocument"]');
    identificationdocuments.forEach(identificationdocument => {
        identificationdocument.addEventListener('change', function() {
            contentDocument.classList.add('d-none');
});
})

const contentDocument = document.querySelector('.option-6dother');
const otherdocument = document.getElementById('otherdocument');
 
otherdocument.addEventListener('change', function() {
        if(this.checked) {
            contentDocument.classList.remove('d-none');
        }
    });



    const previouslyreceiveditins = document.querySelectorAll('input[type="radio"][name="previouslyreceiveditin"]');
    previouslyreceiveditins.forEach(previouslyreceiveditin => {
        previouslyreceiveditin.addEventListener('change', function() {
            contentItin.classList.add('d-none');
});
})

const contentItin = document.querySelector('.option-6f');
const yesreceiveditin = document.getElementById('yesreceiveditin');
 
yesreceiveditin.addEventListener('change', function() {
        if(this.checked) {
            contentItin.classList.remove('d-none');
        }
    });
