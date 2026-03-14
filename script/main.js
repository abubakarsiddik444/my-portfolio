
  // Mobile menu toggle

  const menuToggleBtn = document.getElementById('menu-btn'); // variable name changed to avoid conflict
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });


  // Active button highlighting

  const allLinks = document.querySelectorAll('#menu a, #mobile-menu a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  allLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    
    if (linkPage === currentPage) {
      link.classList.add('btn-active', 'btn-success'); // active button
    } else {
      link.classList.remove('btn-active', 'btn-success'); // deactivate others
    }

    // Mobile: link click hides the menu
    link.addEventListener('click', () => {
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    });
  });












  function openSkillModal(skill){

const modal = document.getElementById("skillModal");
const content = document.getElementById("skillContent");

let data = {

html: `
<div class="card bg-white">
<div class="card-body text-center">

<i class="fa-brands fa-html5 text-5xl text-orange-500"></i>

<h2 class="card-title justify-center mt-3">
HTML5
</h2>

<p>
Building structured and semantic web pages using modern HTML standards.
</p>

<progress class="progress progress-success w-full mt-3" value="90" max="100"></progress>

</div>
</div>
`,

css: `
<div class="card bg-white">
<div class="card-body text-center">

<i class="fa-brands fa-css3-alt text-5xl text-blue-500"></i>

<h2 class="card-title justify-center mt-3">
CSS3
</h2>

<p>
Designing responsive layouts and styling modern user interfaces.
</p>

<progress class="progress progress-info w-full mt-3" value="85" max="100"></progress>

</div>
</div>
`,

tailwind: `
<div class="card bg-white">
<div class="card-body text-center">

<i class="fa-solid fa-wind text-5xl text-cyan-500"></i>

<h2 class="card-title justify-center mt-3">
Tailwind CSS
</h2>

<p>
Creating fast, responsive and modern UI using utility-first CSS.
</p>

<progress class="progress progress-accent w-full mt-3" value="80" max="100"></progress>

</div>
</div>
`,

js: `
<div class="card bg-white">
<div class="card-body text-center">

<i class="fa-brands fa-js text-5xl text-yellow-400"></i>

<h2 class="card-title justify-center mt-3">
JavaScript
</h2>

<p>
Adding interactivity and dynamic functionality to websites.
</p>

<progress class="progress progress-warning w-full mt-3" value="70" max="100"></progress>

</div>
</div>
`,

react: `
<div class="card bg-white">
<div class="card-body text-center">

<i class="fa-brands fa-react text-5xl text-blue-400"></i>

<h2 class="card-title justify-center mt-3">
React (Learning)
</h2>

<p>
Learning modern front-end development using React framework.
</p>

<progress class="progress progress-primary w-full mt-3" value="50" max="100"></progress>

</div>
</div>
`,

freelancing: `
<div class="card bg-white">
<div class="card-body text-center">

<i class="fa-solid fa-laptop-code text-5xl text-green-500"></i>

<h2 class="card-title justify-center mt-3">
Freelancing
</h2>

<p>
Providing web development services and building websites for clients.
</p>

<progress class="progress progress-success w-full mt-3" value="75" max="100"></progress>

</div>
</div>
`
};

content.innerHTML = data[skill];

modal.showModal();

}



