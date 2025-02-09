const radioButtons = document.querySelectorAll('input[name="applicationforllc"]');
const content8B = document.querySelector('.option-8B');
const content8C = document.querySelector('.option-8C');

radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', function() {
        if (this.value === 'Yes') {
            content8B.classList.remove('d-none');
            content8C.classList.remove('d-none');
        } else {
            content8B.classList.add('d-none');
            content8C.classList.add('d-none');
        }
    });
});

const radioButtonstypeof = document.querySelectorAll('input[name="typeofentity"]');
const typeofcontenta = document.querySelector('.typeof-a');
const typeofcontentb = document.querySelector('.typeof-b');
const typeofcontentc = document.querySelector('.typeof-c');
const typeofcontentd = document.querySelector('.typeof-d');
const typeofcontente = document.querySelector('.typeof-e');
const typeofcontentf = document.querySelector('.typeof-f');
const typeofcontentg = document.querySelector('.typeof-g');
const typeofcontenth = document.querySelector('.typeof-h');
const typeofcontenti = document.querySelector('.typeof-i');
const typeofcontentj = document.querySelector('.typeof-j');

radioButtonstypeof.forEach(radioButtontypeof => {
    radioButtontypeof.addEventListener('change', function() {
        if (this.value === 'Sole proprietor') {
            typeofcontenta.classList.remove('d-none');
            typeofcontentb.classList.add('d-none');
            typeofcontentc.classList.add('d-none');
            typeofcontentd.classList.add('d-none');
            typeofcontente.classList.add('d-none');
            typeofcontentf.classList.add('d-none');
            typeofcontentg.classList.add('d-none');
            typeofcontenth.classList.add('d-none'); 
        } else if (this.value === 'Corporation') {
            typeofcontenta.classList.add('d-none');
            typeofcontentb.classList.remove('d-none');
            typeofcontentc.classList.add('d-none');
            typeofcontentd.classList.add('d-none');
            typeofcontente.classList.add('d-none');
            typeofcontentf.classList.add('d-none');
            typeofcontentg.classList.add('d-none');
            typeofcontenth.classList.add('d-none'); 
        }
        else if (this.value === 'Other nonprofit organization') {
            typeofcontenta.classList.add('d-none');
            typeofcontentb.classList.add('d-none');
            typeofcontentc.classList.remove('d-none');
            typeofcontentd.classList.add('d-none');
            typeofcontente.classList.add('d-none');
            typeofcontentf.classList.add('d-none');
            typeofcontentg.classList.add('d-none');
            typeofcontenth.classList.add('d-none');
          }
          else if (this.value === 'Estate') {
            typeofcontenta.classList.add('d-none');
            typeofcontentb.classList.add('d-none');
            typeofcontentc.classList.add('d-none');
            typeofcontentd.classList.remove('d-none');
            typeofcontente.classList.add('d-none');
            typeofcontentf.classList.add('d-none');
            typeofcontentg.classList.add('d-none');
            typeofcontenth.classList.add('d-none');
          }
          else if (this.value === 'Plan administrator') {
            typeofcontenta.classList.add('d-none');
            typeofcontentb.classList.add('d-none');
            typeofcontentc.classList.add('d-none');
            typeofcontentd.classList.add('d-none');
            typeofcontente.classList.remove('d-none');
            typeofcontentf.classList.add('d-none');
            typeofcontentg.classList.add('d-none');
            typeofcontenth.classList.add('d-none');
          }
          else if (this.value === 'Trust') {
            typeofcontenta.classList.add('d-none');
            typeofcontentb.classList.add('d-none');
            typeofcontentc.classList.add('d-none');
            typeofcontentd.classList.add('d-none');
            typeofcontente.classList.add('d-none');
            typeofcontentf.classList.remove('d-none');
            typeofcontentg.classList.add('d-none');
            typeofcontenth.classList.add('d-none');
          }
          else if (this.value === 'Group Exemption Number') {
            typeofcontenta.classList.add('d-none');
            typeofcontentb.classList.add('d-none');
            typeofcontentc.classList.add('d-none');
            typeofcontentd.classList.add('d-none');
            typeofcontente.classList.add('d-none');
            typeofcontentf.classList.add('d-none');
            typeofcontentg.classList.remove('d-none');
            typeofcontenth.classList.add('d-none');
          }
          else if (this.value === 'Other') {
            typeofcontenta.classList.add('d-none');
            typeofcontentb.classList.add('d-none');
            typeofcontentc.classList.add('d-none');
            typeofcontentd.classList.add('d-none');
            typeofcontente.classList.add('d-none');
            typeofcontentf.classList.add('d-none');
            typeofcontentg.classList.add('d-none');
            typeofcontenth.classList.remove('d-none');
          }

        else if (this.value === 'Partnership' || this.value === 'Personal service corporation' || this.value === 'Church or church-controlled organization' || this.value === 'Military' || this.value === 'local government' || this.value === 'Farmers Cooperative' || this.value === 'Federal government' || this.value === 'REMIC' || this.value === 'Indian tribal governments') {
            typeofcontenta.classList.add('d-none');
            typeofcontentb.classList.add('d-none');
            typeofcontentc.classList.add('d-none');
            typeofcontentd.classList.add('d-none');
            typeofcontente.classList.add('d-none');
            typeofcontentf.classList.add('d-none');
            typeofcontentg.classList.add('d-none');
            typeofcontenth.classList.add('d-none');
          }
    });
});



const reasonradioButtons = document.querySelectorAll('input[name="reasonforapplying"]');
const reasona = document.querySelector('.reason-a');
const reasonb = document.querySelector('.reason-b');
const reasonc = document.querySelector('.reason-c');
const reasond = document.querySelector('.reason-d'); 
const reasone = document.querySelector('.reason-e'); 
const reasonf = document.querySelector('.reason-f'); 


reasonradioButtons.forEach(radioButtonreason => {
    radioButtonreason.addEventListener('change', function() {
        if (this.value === 'Started new business') {
            reasona.classList.remove('d-none');
            reasonb.classList.add('d-none');
            reasonc.classList.add('d-none');
            reasond.classList.add('d-none');
            reasone.classList.add('d-none');
            reasonf.classList.add('d-none');
        }
        else if (this.value === 'Banking purpose') {
            reasona.classList.add('d-none');
            reasonb.classList.remove('d-none');
            reasonc.classList.add('d-none');
            reasond.classList.add('d-none');
            reasone.classList.add('d-none');
            reasonf.classList.add('d-none');
        }
        else if (this.value === 'Changed type of organization') {
            reasona.classList.add('d-none');
            reasonb.classList.add('d-none');
            reasonc.classList.remove('d-none');
            reasond.classList.add('d-none');
            reasone.classList.add('d-none');
            reasonf.classList.add('d-none');
        }
        else if (this.value === 'Created a trust') {
            reasona.classList.add('d-none');
            reasonb.classList.add('d-none');
            reasonc.classList.add('d-none');
            reasond.classList.remove('d-none');
            reasone.classList.add('d-none');
            reasonf.classList.add('d-none');
        }
        else if (this.value === 'Created a pension plan') {
            reasona.classList.add('d-none');
            reasonb.classList.add('d-none');
            reasonc.classList.add('d-none');
            reasond.classList.add('d-none');
            reasone.classList.remove('d-none');
            reasonf.classList.add('d-none');
        }
        else if (this.value === 'other') {
            reasona.classList.add('d-none');
            reasonb.classList.add('d-none');
            reasonc.classList.add('d-none');
            reasond.classList.add('d-none');
            reasone.classList.add('d-none');
            reasonf.classList.remove('d-none');
        }
    });
});
