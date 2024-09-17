window.onload = function () {
    alert("Welcome to Prathamesh's Personal Website!");
};

function changeAboutMeText() {
    const aboutMeTexts = ["Java full stack developer", "Data Analyst", "Application Developer"];
    const typingSpeed = 100; // Speed for typing
    const eraseSpeed = 50;   // Speed for erasing
    const pauseTime = 1500;  // Pause between switching texts
    const aboutMeElement = document.querySelector('.about-me');

    let textIndex = 0;  // Which text in the array is being displayed
    let charIndex = 0;  // Which character is being typed
    let isDeleting = false;  // Is text being deleted

    function type() {
        const currentText = aboutMeTexts[textIndex];
        
        if (!isDeleting && charIndex < currentText.length) {
            aboutMeElement.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } 
        else if (isDeleting && charIndex > 0) {
            aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, eraseSpeed);
        } 
        else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % aboutMeTexts.length;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(type, pauseTime);
            }
        }
    }

    type();
}

// Call the function after window is loaded
changeAboutMeText();


document.addEventListener('DOMContentLoaded',function(){
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body=document.body;

    darkModeToggle.addEventListener('click',() =>{
        body.classList.toggle('dark-mode');
        const currentMode = body.classList.contains('dark-mode') ? 'Dark' : 'Light';
        darkModeToggle.querySelector(i).classList.toggle('fa-sun');
        darkModeToggle.querySelector(i).classList.toggle('fa-moon');
        darkModeToggle.querySelector(i).classList.toggle('light-mode');
    });

    });

    document.addEventListener('DOMContentLoaded', function() {
        const progressBars = document.querySelectorAll('.Skill');
    
        // Observer to check when the section is in view
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target.querySelector('.progress-bar');
                    const progress = progressBar.dataset.progress;
    
                    // Set the width of the progress bar based on the data-progress attribute
                    progressBar.style.width = `${progress}%`; // Use template literals to set width
                    progressBar.classList.add('animated');
    
                    // Stop observing after the animation has started
                    observer.unobserve(entry.target);
                }
            });
        });
    
        // Observe each skill item for when it enters the viewport
        progressBars.forEach(skill => {
            observer.observe(skill);
        });
    });
    