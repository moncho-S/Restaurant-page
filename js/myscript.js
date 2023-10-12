document.addEventListener("DOMContentLoaded", function(){
    const sections = document.querySelectorAll('.anchor');
    const navLinks = document.querySelectorAll('.nav-link');
    const boton = document.getElementById('formButton');
    
      window.addEventListener('scroll', function() {

        if (window.scrollY > 0) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
          
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } ;



        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
          });

          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });



    });

    boton.addEventListener('click', function() {
      let miFormulario = document.getElementById("formulario");
      let frameFormulario = document.getElementById("frameForm");
      let nombre = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let asunto = document.getElementById("asunto").value;
      let mensaje = document.getElementById("mensaje").value;

      if (nombre!="" && asunto!="" && email!="" && mensaje!="") {
        boton.remove(); 
        frameFormulario.innerHTML+="<h3 class='text-center'>Gracias por preferirnos, <b>" + nombre + "</b>. Su mensaje fue enviado exitosamente.</h3>"
      }

     })
    

  })