document.addEventListener('DOMContentLoaded', function () {
     const promptFilingsRadio = document.querySelector('input[value="PromptfilingsActAgent"]');
    const ownActAgentRadio = document.querySelector('input[value="OwnActAgent"]');
     const regentDiv = document.querySelector('.agentdetils');

     const isitLLCRadios = document.querySelectorAll('input[name="isitllc"]');
    const thisIsLLCDiv = document.querySelector('.thisisllc');

    function toggleRegentDiv() {
        if (promptFilingsRadio.checked) {
            regentDiv.style.display = 'none';
        } else if (ownActAgentRadio.checked) {
            regentDiv.style.display = 'flex';
        }
    }
 
    function toggleLLCDiv() {
        const selectedValue = document.querySelector('input[name="isitllc"]:checked').value;
        if (selectedValue === "LLC") {
            thisIsLLCDiv.style.display = 'block';
        } else {
            thisIsLLCDiv.style.display = 'none';
        }
    }

     promptFilingsRadio.addEventListener('change', toggleRegentDiv);
    ownActAgentRadio.addEventListener('change', toggleRegentDiv);

     isitLLCRadios.forEach(function (radio) {
        radio.addEventListener('change', toggleLLCDiv);
    });

    toggleRegentDiv();
    toggleLLCDiv();
});