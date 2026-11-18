/* ==========================================================================
   AL-HIKMAH MODEL ACADEMY - INTERACTIVE LOGIC (HEFZ|TECH)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const portalModal = document.getElementById('portalModal');
    const openPortalBtn = document.getElementById('openPortalBtn');
    const closePortalBtn = document.getElementById('closePortalBtn');
    const admissionForm = document.getElementById('admissionForm');

    // Open Student/Parent Portal Modal
    openPortalBtn.addEventListener('click', () => {
        portalModal.style.display = 'flex';
    });

    // Close Modal
    closePortalBtn.addEventListener('click', () => {
        portalModal.style.display = 'none';
    });

    // Close Modal when clicking outside
    portalModal.addEventListener('click', (e) => {
        if (e.target === portalModal) {
            portalModal.style.display = 'none';
        }
    });

    // Handle Admission Form Submission via WhatsApp
    admissionForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const student = document.getElementById('studentName').value.trim();
        const classLevel = document.getElementById('classLevel').value;
        const phone = document.getElementById('parentPhone').value.trim();

        const message = `Assalamu Alaikum, I would like to inquire about admission:\n\n*Student Name:* ${student}\n*Class:* ${classLevel}\n*Parent Phone:* ${phone}\n\n_(Sent via School Website Demo by Hefz|tech)_`;

        const whatsappNumber = "2349027192335";
        const whatsappUrl = `https://wa.me{whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    });
});
