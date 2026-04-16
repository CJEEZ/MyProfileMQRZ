document.getElementById('update-btn').addEventListener('click', function(){
  const imgUrl = document.getElementById('image-url').textContent.trim();
  const pdfUrl = document.getElementById('pdf-url').textContent.trim();
  if(imgUrl){ document.getElementById('demo-image').src = imgUrl; }
  if(pdfUrl){ document.getElementById('demo-pdf').src = pdfUrl; }
});
