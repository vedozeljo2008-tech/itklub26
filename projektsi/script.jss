// Mobilni meni (Hamburger toggle)
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Zatvaranje menija klikom na link (na mobitelu)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Jednostavna validacija kontakt/prijava forme sa JS-om
const applyForm = document.getElementById('applyForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const gradeInput = document.getElementById('grade');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const gradeError = document.getElementById('gradeError');
const successMsg = document.getElementById('successMsg');

applyForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Reset poruka o greškama
    nameError.textContent = '';
    emailError.textContent = '';
    gradeError.textContent = '';
    successMsg.textContent = '';

    // Validacija imena
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Molimo unesite vaše ime i prezime.';
        isValid = false;
    }

    // Validacija emaila
    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
        emailError.textContent = 'Molimo unesite email adresu.';
        isValid = false;
    } else if (!emailValue.includes('@') || !emailValue.includes('.')) {
        emailError.textContent = 'Unesite validnu email adresu.';
        isValid = false;
    }

    // Validacija razreda
    if (gradeInput.value === '') {
        gradeError.textContent = 'Molimo izaberite razred.';
        isValid = false;
    }

    // Ako je sve validno
    if (isValid) {
        successMsg.textContent = 'Uspješno ste se prijavili u IT klub! Radujemo se druženju.';
        applyForm.reset();
        
        // Ukloni poruku o uspjehu nakon 5 sekundi
        setTimeout(() => {
            successMsg.textContent = '';
        }, 5000);
    }
});