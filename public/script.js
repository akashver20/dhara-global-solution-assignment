async function verifyCertificate() {
    const certificateId = document.getElementById('certificateId').value;
    const verificationResultElement = document.getElementById('verificationResult');
  
    try {
      const response = await fetch(`/verify?certificateId=${certificateId}`);
      const result = await response.json();
  
      if (result.success) {
        verificationResultElement.style.color = 'green';
        verificationResultElement.innerText = 'Certificate is valid!';
      } else {
        verificationResultElement.style.color = 'red';
        verificationResultElement.innerText = 'Certificate is invalid.';
      }
    } catch (error) {
      console.error('Error verifying certificate:', error);
      verificationResultElement.style.color = 'red';
      verificationResultElement.innerText = 'Error verifying certificate.';
    }
  }
  