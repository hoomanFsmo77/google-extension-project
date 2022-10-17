import '../style/popup.scss';
import '../assets/logo_32.png';
import '../assets/logo_16.png';
import '../assets/logo_48.png';
import '../assets/logo_128.png';
import '../assets/login.svg'
import '../../manifest.json';
////////////////////////////////////////////
let tab_tracer=document.querySelector('.tab_tracer')
let tab_content=document.getElementById('tab_content')


////////////////// close button
document.querySelector('.close_btn').addEventListener('click',()=>{window.close()})



//////////////////// tab
const tabContentChange = index => {
  document.querySelectorAll('#tab_content section').forEach(item=>{
      item.style.cssText='opacity:0;visibility: hidden'
  })
    console.log(tab_content[index])
  tab_content.children[index].style.cssText='opacity:1;visibility: visible'
}
document.querySelectorAll('.tab').forEach((item,index)=>{
    item.addEventListener('click',e=>{
        tabContentChange(index)
        if(index ===1){
            tab_tracer.style.left="184px"
        }else if(index===0){
            tab_tracer.style.left="0px"
        }
    })
})


/////////////////// navbar
let nav_tracer=document.querySelector('.nav_tracer')
const hideSection = index => {
  document.querySelectorAll('.section_item').forEach(item=>{
      item.style.opacity='0'
      item.style.visibility='hidden'
  })
    document.querySelector('.section_container').children[index].style.opacity='1'
    document.querySelector('.section_container').children[index].style.visibility='visible'
}

document.querySelectorAll('.nav_item').forEach((nav,index)=>{
    nav.addEventListener('click',e=>{
        hideSection(index)
        switch (index) {
            case 0:{
                nav_tracer.style.left='10%'
            }
            break
            case 1:{
                nav_tracer.style.left='45%'
            }
            break
            case 2:{
                nav_tracer.style.left='78%'
            }
        }
    })
})

