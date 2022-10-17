import Card from "./components/Card/Card.js";
import Api from "./components/Api/Api.js";
import Trending from "./components/Trending/Trending.js";
import '../style/component.scss'
window.customElements.define('price-card',Card)
window.customElements.define('trending-card',Trending)
let api=new Api()
api.start()