// Member Data
const members = [
    {
        id: 1,
        name: "Md. Anwar Hossain",
        batch: "1985",
        presentAddress: "House 45, Block A, MohisBazar, Dhaka",
        permanentAddress: "Village: Kazirpara, Post: Baneswar, Thana: Paba, District: Rajshahi",
        mobile: "+8801712555555",
        email: "anwar.oraa85@gmail.com",
        college: "Rajshahi College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 2,
        name: "Md. Abul Kalam Azad",
        batch: "1985",
        presentAddress: "Flat 3B, Green View Apartment, Kazipara, Dhaka",
        permanentAddress: "Village: Joydeb, Post: Shakharia, Thana: Godagari, District: Rajshahi",
        mobile: "+8801722555555",
        email: "kalam.oraa85@gmail.com",
        college: "Rajshahi College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 3,
        name: "Md. Shahidullah",
        batch: "1985",
        presentAddress: "14/2, West Agargaon, Dhaka",
        permanentAddress: "Village: Nandigram, Post: Nandigram, Thana: Nachole, District: Chapai Nawabganj",
        mobile: "+8801732555555",
        email: "shahid.oraa85@gmail.com",
        college: "Rajshahi College",
        hall: "Shaheed Badruddoza Hall"
    },
    {
        id: 4,
        name: "Md. Golam Mostafa",
        batch: "1985",
        presentAddress: "House 22, Road 5, Dhanmondi, Dhaka",
        permanentAddress: "Village: Parana, Post: Digram, Thana: Bagha, District: Rajshahi",
        mobile: "+8801742555555",
        email: "mostafa.oraa85@gmail.com",
        college: "Rajshahi College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 5,
        name: "Md. Nurul Islam",
        batch: "1985",
        presentAddress: "Plot 8, Block C,巴赫拉,Momirpara, Dhaka",
        permanentAddress: "Village: Tanore, Post: Tanore, Thana: Tanore, District: Rajshahi",
        mobile: "+8801752555555",
        email: "nurul.oraa85@gmail.com",
        college: "Rajshahi College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 6,
        name: "Md. Fazle Hasan",
        batch: "1985",
        presentAddress: "42, Green Road, Farmgate, Dhaka",
        permanentAddress: "Village: Chowgacha, Post: Chowgacha, Thana: Charghat, District: Rajshahi",
        mobile: "+8801762555555",
        email: "fazle.oraa85@gmail.com",
        college: "Rajshahi College",
        hall: "Musa Khan Hall"
    },
    {
        id: 7,
        name: "Md. Ali Reza",
        batch: "1985",
        presentAddress: "House 15, Sector 7, Uttara, Dhaka",
        permanentAddress: "Village: Sardah, Post: Sardah, Thana: Charghat, District: Rajshahi",
        mobile: "+8801772555555",
        email: "reza.oraa85@gmail.com",
        college: "Rajshahi College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 8,
        name: "Md. Mahbubur Rahman",
        batch: "1985",
        presentAddress: "Flat 5C, Lake View, Gulshan, Dhaka",
        permanentAddress: "Village: Kunjo, Post: Kunjo, Thana: Puthia, District: Rajshahi",
        mobile: "+8801782555555",
        email: "mahbub.oraa85@gmail.com",
        college: "Rajshahi College",
        hall: "Shaheed Badruddoza Hall"
    },
    {
        id: 9,
        name: "Md. Julfikar Ali",
        batch: "1985",
        presentAddress: "House 33, Banani, Dhaka",
        permanentAddress: "Village: Badhai, Post: Badhai, Thana: Gomostapur, District: Naogaon",
        mobile: "+8801792555555",
        email: "julfikar.oraa85@gmail.com",
        college: "Rajshahi College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 10,
        name: "Md. Rafiqul Islam",
        batch: "1985",
        presentAddress: "Plot 12, Mirpur DOHS, Dhaka",
        permanentAddress: "Village: B消灭栏, Post: Durgapur, Thana: Durgapur, District: Rajshahi",
        mobile: "+8801802555555",
        email: "rafiq.oraa85@gmail.com",
        college: "Rajshahi College",
        hall: "Musa Khan Hall"
    },
    {
        id: 11,
        name: "Md. Shofiur Rahman",
        batch: "1985",
        presentAddress: "House 8, Lalmatia, Dhaka",
        permanentAddress: "Village: Hatkhola, Post: Hatkhola, Thana: Tanore, District: Rajshahi",
        mobile: "+8801812555555",
        email: "shofiur.oraa85@gmail.com",
        college: "Rajshahi College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 12,
        name: "Md. Azizul Haque",
        batch: "1985",
        presentAddress: "Flat 2B, Baridhara, Dhaka",
        permanentAddress: "Village: Khidirpur, Post: Khidirpur, Thana: Godagari, District: Rajshahi",
        mobile: "+8801822555555",
        email: "azizul.oraa85@gmail.com",
        college: "Rajshahi College",
        hall: "Shaheed Badruddoza Hall"
    }
];

// State
let currentLang = 'en';
let currentTheme = 'light';
let filteredMembers = [...members];

// DOM Elements
const langToggle = document.getElementById('langToggle');
const themeToggle = document.getElementById('themeToggle');
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
const memberSearch = document.getElementById('memberSearch');
const membersGrid = document.getElementById('membersGrid');
const memberModal = document.getElementById('memberModal');
const modalClose = document.querySelector('.modal-close');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');
const rsvpForm = document.getElementById('rsvpForm');
const reservationForm = document.getElementById('reservationForm');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const galleryItems = document.querySelectorAll('.gallery-item');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderMembers(members);
    setupEventListeners();
});

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        applyTheme();
    }
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    const icon = themeToggle.querySelector('i');
    icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('theme', currentTheme);
}

// Language Toggle
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'bn' : 'en';
    langToggle.textContent = currentLang === 'en' ? 'EN' : 'বন';
    updateLanguage();
    localStorage.setItem('lang', currentLang);
}

function updateLanguage() {
    document.querySelectorAll('[data-en]').forEach(el => {
        const key = currentLang === 'en' ? 'data-en' : 'data-bn';
        el.innerHTML = el.getAttribute(key);
    });
    
    document.querySelectorAll('[data-placeholder-en]').forEach(el => {
        el.placeholder = el.getAttribute(`data-placeholder-${currentLang}`);
    });
    
    memberSearch.placeholder = memberSearch.getAttribute(`data-placeholder-${currentLang}`);
    
    const eventDetails = document.getElementById('modalBatch');
    if (eventDetails) {
        eventDetails.textContent = currentLang === 'en' ? 'Batch 1985' : '১৯৮৫ ব্যাচ';
    }
}

// Member Rendering
function renderMembers(membersToRender) {
    membersGrid.innerHTML = '';
    
    membersToRender.forEach(member => {
        const initials = member.name.split(' ').map(n => n[0]).join('').substring(0, 2);
        
        const card = document.createElement('div');
        card.className = 'member-card';
        card.innerHTML = `
            <div class="member-avatar">${initials}</div>
            <h3>${member.name}</h3>
            <p>${currentLang === 'en' ? 'Batch' : 'ব্যাচ'} ${member.batch}</p>
            <a href="tel:${member.mobile}" class="click-to-call">
                <i class="fas fa-phone"></i> ${member.mobile}
            </a>
        `;
        
        card.addEventListener('click', () => openMemberModal(member));
        membersGrid.appendChild(card);
    });
}

function filterMembers(searchTerm) {
    const term = searchTerm.toLowerCase();
    filteredMembers = members.filter(m => 
        m.name.toLowerCase().includes(term) ||
        m.email.toLowerCase().includes(term)
    );
    renderMembers(filteredMembers);
}

// Member Modal
function openMemberModal(member) {
    const initials = member.name.split(' ').map(n => n[0]).join('').substring(0, 2);
    
    document.getElementById('modalPhoto').src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%23c47d5e' width='100' height='100'/><text x='50' y='50' text-anchor='middle' dy='.35em' fill='white' font-size='40' font-family='serif'>${initials}</text></svg>`;
    document.getElementById('modalName').textContent = member.name;
    document.getElementById('modalBatch').textContent = currentLang === 'en' ? `Batch ${member.batch}` : `ব্যাচ ${member.batch}`;
    document.getElementById('modalPresentAddress').textContent = member.presentAddress;
    document.getElementById('modalPermanentAddress').textContent = member.permanentAddress;
    
    const mobileLink = document.getElementById('modalMobile');
    mobileLink.href = `tel:${member.mobile}`;
    mobileLink.textContent = member.mobile;
    
    const emailLink = document.getElementById('modalEmail');
    emailLink.href = `mailto:${member.email}`;
    emailLink.textContent = member.email;
    
    document.getElementById('modalCollege').textContent = member.college;
    document.getElementById('modalHall').textContent = member.hall;
    
    memberModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMemberModal() {
    memberModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Tab Navigation
function switchTab(tabId) {
    tabBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    
    tabContents.forEach(content => {
        content.classList.toggle('active', content.id === tabId);
    });
}

// Gallery Lightbox
function openLightbox(src) {
    lightboxImg.src = src.replace('w=400', 'w=1200');
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Form Handling
function handleFormSubmit(form, e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    alert(currentLang === 'en' ? 
        `Thank you! We've received your submission.` : 
        `ধন্যবাদ! আ���রা আপনার সাবমিশন পেয়েছি।`
    );
    
    form.reset();
}

// Event Listeners Setup
function setupEventListeners() {
    // Language Toggle
    langToggle.addEventListener('click', toggleLanguage);
    
    // Theme Toggle
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme();
    });
    
    // Mobile Menu Toggle
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Member Search
    memberSearch.addEventListener('input', (e) => {
        filterMembers(e.target.value);
    });
    
    // Modal Close
    modalClose.addEventListener('click', closeMemberModal);
    memberModal.addEventListener('click', (e) => {
        if (e.target === memberModal) closeMemberModal();
    });
    
    // Tab Buttons
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
    
    // Gallery
    galleryItems.forEach(item => {
        item.addEventListener('click', () => openLightbox(item.dataset.src));
    });
    
    // Lightbox Close
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Forms
    rsvpForm.addEventListener('submit', (e) => handleFormSubmit(rsvpForm, e));
    reservationForm.addEventListener('submit', (e) => handleFormSubmit(reservationForm, e));
    
    // Navigation Links
    document.querySelectorAll('.nav-links a, .footer-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    });
    
    // Keyboard
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (memberModal.classList.contains('active')) closeMemberModal();
            if (lightbox.classList.contains('active')) closeLightbox();
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Initialize Saved Language
const savedLang = localStorage.getItem('lang');
if (savedLang) {
    currentLang = savedLang;
    langToggle.textContent = currentLang === 'en' ? 'EN' : 'বন';
    updateLanguage();
}