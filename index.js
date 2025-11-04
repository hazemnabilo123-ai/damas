function dosomesing() {

console. log ( 'hazem' )

}



    const images = document.querySelectorAll('.slider img');
    const blurBg = document.querySelector('.blur-bg');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    let index = 0;

    // دالة عرض الصورة
    function showImage(i) {
      images.forEach(img => img.classList.remove('active'));
      images[i].classList.add('active');
      blurBg.style.backgroundImage = `url('${images[i].src}')`;
    }

    function nextImage() {
      index = (index + 1) % images.length;
      showImage(index);
    }

    function prevImage() {
      index = (index - 1 + images.length) % images.length;
      showImage(index);
    }

    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);

    // تغيير تلقائي كل 5 ثواني
    setInterval(nextImage, 5000);

    // أول تحميل
    showImage(index);