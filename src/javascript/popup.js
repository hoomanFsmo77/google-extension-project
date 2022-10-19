import Api from "./components/Api/Api.js";
import Close from "./components/Close_btn/Close.js";
import Tab from "./components/Tab/Tab.js";
import Navbar from "./components/Navbar/Navbar.js";
import Search from "./components/Search/Search.js";
import '../style/popup.scss';
import '../assets/logo_32.png';
import '../assets/logo_16.png';
import '../assets/logo_48.png';
import '../assets/logo_128.png';
import '../assets/login.svg'
import '../assets/fire.svg'
import '../../manifest.json';
////////////////////////////////////////////
window.addEventListener('load',()=>{
    let api=new Api()
    api.start()
    let close=new Close()
    let tab=new Tab()
    let nav=new Navbar()
    let search=new Search()
})