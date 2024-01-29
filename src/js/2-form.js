document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.querySelector('.feedback-form');
  
    feedbackForm.addEventListener('input', (e) => {
      const formData = {
        email: feedbackForm.elements.email.value.trim(),
        message: feedbackForm.elements.message.value.trim(),
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    });
  
    const storedFormData = localStorage.getItem('feedback-form-state');
  
    if (storedFormData) {
      const parsedData = JSON.parse(storedFormData);
  
      if (parsedData.email) {
        feedbackForm.elements.email.value = parsedData.email;
      }
  
      if (parsedData.message) {
        feedbackForm.elements.message.value = parsedData.message;
      }
    }

    feedbackForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      if (feedbackForm.elements.email.value.trim() && feedbackForm.elements.message.value.trim()) {
        
        const formDataForConsole = {
          email: feedbackForm.elements.email.value.trim(),
          message: feedbackForm.elements.message.value.trim(),
        };
        console.log(formDataForConsole);
  
       
        localStorage.removeItem('feedback-form-state');
        feedbackForm.reset();
      }
    });
  });
  
  