import '../style/popup.scss';
import '../assets/logo_32.png';
import '../assets/logo_16.png';
import '../assets/logo_48.png';
import '../assets/logo_128.png';
import '../../manifest.json';
////////////////////////////////////////////
let tab_tracer=document.querySelector('.tab_tracer')
let tab_content=document.getElementById('tab_content')
document.querySelector('.close_btn').addEventListener('click',()=>{window.close()})
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
