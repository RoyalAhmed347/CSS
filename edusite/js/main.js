const toggelBtn = document.querySelector('.toggel-hum i');
const mainManu = document.querySelector('.navbar ul')


toggelBtn.addEventListener('click', () => {
    mainManu.classList.toggle('show')
    toggelBtn.classList.toggle('fa-x')
})



document.addEventListener('DOMContentLoaded',()=>{
const mainBtn = document.querySelectorAll('.btn')
    mainBtn.forEach((btn)=>{
        btn.addEventListener('mouseover',()=>{
        btn.classList.add('jsbtn')
        })
        btn.addEventListener('mouseout',()=>{
        btn.classList.remove('jsbtn')
        })

    })
})
    


const about_video = document.getElementById('about-video');

about_video.addEventListener('mouseover',()=>{
    document.querySelector('.play-icon').style.color = '#EE650A';
})
about_video.addEventListener('mouseout',()=>{
    document.querySelector('.play-icon').style.color = '#374050';
})

