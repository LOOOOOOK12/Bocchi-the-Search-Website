const toggle = document.getElementById('darkmode');
const body = document.querySelector('body');
const container = document.getElementById('SearchContainer');


toggle.addEventListener('click',function(){
  
        if(this.classList.toggle('darkmode')){
          body.style.background = 'pink';
          body.style.transition = '0.5s';
          container.style.background = 'rgb(253, 125, 146)';
        }
        else{
          body.style.background='#466DFF';
          body.style.transition = '0.5s';
          container.style.background = '#3A6EA5';
          body.style.transition = '0.5s';
          toggle.style.border = '3px solid pink';
        }

})