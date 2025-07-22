document.addEventListener('DOMContentLoaded', function() {
      const loadingScreen = document.querySelector('.loading-screen');
      const passwordContainer = document.querySelector('.password-container');
      const loadingText = document.querySelector('.loading-text');
      const spans = loadingText.querySelectorAll('span');
      const passwordInput = document.getElementById('passwordInput');
      const submitButton = document.getElementById('submitPassword');
      const message = document.getElementById('message');
  
      let isWrongPassword = false;
  
      function resetAnimation() {
        spans.forEach((span, index) => {
          span.style.animation = 'none';
          void span.offsetWidth; // Kích hoạt reflow
          span.style.animation = `fadeInUp 0.6s forwards ${index * 0.1}s`;
        });
      }
  
      resetAnimation();
  
      const animationInterval = setInterval(resetAnimation, 3000);
  
      setTimeout(function() {
        clearInterval(animationInterval);
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
          loadingScreen.style.display = 'none';
          passwordContainer.classList.add('show');
        }, 500);
      }, 3500); // 3.5 giây loading
  
      submitButton.addEventListener('click', checkPassword);
  
      passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          checkPassword();
        }
      });
  
      passwordInput.addEventListener('click', function() {
        if (isWrongPassword) {
          passwordInput.value = '';
          passwordInput.classList.remove('error-input');
          message.classList.add('hidden');
          isWrongPassword = false;
        }
      });
      
      function checkPassword() {
        const password = passwordInput.value;
        message.classList.remove('hidden', 'error', 'success');
         
        if (password.length !== 3 ) {
          message.textContent = "3 kí tự em yêu à";
          message.classList.add('error');
          passwordInput.classList.add('error-input');
          isWrongPassword = true;
          return;
        }
        
        if (password.toLowerCase() === "mie") {
          message.textContent = "Đúng rồi chính nó đó:))";
          message.classList.add('success');
          submitButton.disabled = true;
          
          // tele after 2s
          setTimeout(function() {
            window.location.href = "birthday2.html";
          }, 2000);
        } else {
          message.textContent = "saii roiiiiii☃️";
          message.classList.add('error');
          passwordInput.classList.add('error-input');
          isWrongPassword = true;
        }
      }
    });

//////////// này của trang birthday

document.addEventListener('DOMContentLoaded', function() {
        const envelopeWrapper = document.getElementById('envelopeWrapper');
        const letterContent = document.getElementById('letterContent');
        const paragraphs = document.querySelectorAll('.letter-content p');

        envelopeWrapper.addEventListener('click', function() {
            // animation phong bi
            envelopeWrapper.classList.add('open');
          
            setTimeout(() => {
                letterContent.classList.add('show');
              
                paragraphs.forEach((para, index) => {
                    setTimeout(() => {
                        para.style.opacity = 1;
                        para.style.transform = 'translateY(0)';
                    }, index * 200 + 500);
                });
            }, 800);
        });
    });

// music
document.getElementById('envelopeWrapper').addEventListener('click', function() {
    const audio = new Audio('music/music1.mp3');
    audio.play().catch(e => console.log("Không thể phát nhạc:", e));
});

document.getElementById('envelopeWrapper').addEventListener('click', function() {
            this.classList.add('open');
  
            document.body.classList.add('show-bg');
  
            setTimeout(function() {
                document.getElementById('letterContent').classList.add('show');
            }, 800);
        });

  