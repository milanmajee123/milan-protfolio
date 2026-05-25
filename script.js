// মেনু আইটেমে ক্লিক করলে মসৃণভাবে স্ক্রোল হওয়ার স্ক্রিপ্ট
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
