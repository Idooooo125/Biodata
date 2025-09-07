  document.getElementById('year').textContent = new Date().getFullYear();
    const links = document.querySelectorAll('.nav-links a, .mobile a');
    links.forEach(a=>a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      if(href.startsWith('#')){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth'});
        closeMobile();
      }
    }));

    const hamb = document.getElementById('hamb');
    const mobile = document.getElementById('mobileMenu');
    hamb.addEventListener('click', ()=>{
      hamb.classList.toggle('active');
      const open = hamb.classList.contains('active');
      hamb.setAttribute('aria-expanded', open);
      mobile.style.display = open ? 'block' : 'none';
      mobile.setAttribute('aria-hidden', !open);
    });
    function closeMobile(){
      hamb.classList.remove('active');
      hamb.setAttribute('aria-expanded', 'false');
      mobile.style.display = 'none';
      mobile.setAttribute('aria-hidden', 'true');
    }

    document.addEventListener('click', (e)=>{
      if(!mobile.contains(e.target) && !hamb.contains(e.target)){
        closeMobile();
      }
    });