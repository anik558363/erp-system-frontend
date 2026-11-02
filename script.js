// Initialize Lucide Icons
lucide.createIcons();

// Mobile Sidebar Toggle Logic (Common for all pages)
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const sidebarBackdrop = document.getElementById('sidebarBackdrop');

if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('show');
        sidebarBackdrop.classList.toggle('show');
    });

    if (sidebarBackdrop) {
        sidebarBackdrop.addEventListener('click', () => {
            sidebar.classList.remove('show');
            sidebarBackdrop.classList.remove('show');
        });
    }
}