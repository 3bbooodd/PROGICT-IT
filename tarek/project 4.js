document.getElementById("subscription-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    if (isValidEmail(email)) {
      document.getElementById("message").innerText = "Subscription successful!";
      // Here you can add code to submit the form data to your server or perform other actions
    } else {
      document.getElementById("message").innerText = "Please enter a valid email address";
    }
  });
  
  function isValidEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
    document.getElementById('subscription-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        if (name && email) {
          // You can add your subscription logic here, like sending the data to a server
          document.getElementById('message').innerText = "Thank you, ${name}! You are now subscribed.";
          // You may want to reset the form after submission
          document.getElementById('subscription-form').reset();
        } else {
          document.getElementById('message').innerText = 'Please enter your name and email.';
        }
      });
      
  }
    
    
    