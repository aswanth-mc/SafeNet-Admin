document.querySelectorAll('.approve-btn').forEach((button) => {
    button.addEventListener('click', async () => {
      const id = button.dataset.id; 
      try {
        const response = await fetch(`/verify/approve/${id}`, { method: 'POST' });
        if (response.ok) {
          alert('Volunteer approved!');
          location.reload(); 
        } else {
          alert('Failed to approve volunteer.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  });

  document.querySelectorAll('.reject-btn').forEach((button) => {
    button.addEventListener('click', async () => {
      const id = button.dataset.id; 
      try {
        const response = await fetch(`/verify/reject/${id}`, { method: 'POST' });
        if (response.ok) {
          alert('Volunteer rejected!');
          location.reload();
        } else {
          alert('Failed to reject volunteer.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  });