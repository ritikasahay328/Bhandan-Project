function makeEmergencyCall() {
    const status = document.getElementById('emergency-status');
    if (status) {
        status.textContent = 'Status: Connecting to emergency support...';
    }

    window.location.href = 'tel:+9118001239000';
}

const reportForm = document.getElementById('report-form');
if (reportForm) {
    reportForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const patient = document.getElementById('patient-name').value;
        const doctor = document.getElementById('doctor-name').value;
        const details = document.getElementById('report-details').value;
        const preview = document.getElementById('report-preview');

        preview.textContent =
            `Bandhan Medical Report\n` +
            `Patient: ${patient}\n` +
            `Doctor: ${doctor}\n` +
            `Details: ${details}\n` +
            `Generated On: ${new Date().toLocaleString()}`;
    });
}
