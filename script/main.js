// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior: 'smooth'});
  });
});

// IntersectionObserver for fade-in
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('animate-fadeInUp');
    }
  });
}, {threshold: 0.2});

document.querySelectorAll('.animate-on-scroll').forEach(el=>{
  observer.observe(el);
});

// Skill bars animation
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.progress-bar').forEach(bar => {
    const value = bar.dataset.value;
    bar.style.width = 0;
    setTimeout(()=>{ bar.style.width = value + '%'; }, 500);
  });
});

// Travel image lightbox
document.querySelectorAll('.travel-img').forEach(img=>{
  img.addEventListener('click', ()=>{
    const overlay = document.createElement('div');
    overlay.classList.add('fixed','top-0','left-0','w-full','h-full','bg-black','bg-opacity-80','flex','justify-center','items-center','z-50');
    const largeImg = document.createElement('img');
    largeImg.src = img.src;
    largeImg.classList.add('max-h-[90%]','max-w-[90%]','rounded-lg','shadow-2xl');
    overlay.appendChild(largeImg);
    overlay.addEventListener('click', ()=> overlay.remove());
    document.body.appendChild(overlay);
  });
});

// Contact form
function sendMessage(event){
  event.preventDefault();
  const btn = event.target.querySelector('button');
  btn.classList.add('animate-pulse');
  setTimeout(()=>{
    alert('Your message has been sent!');
    btn.classList.remove('animate-pulse');
    event.target.reset();
  }, 500);
}