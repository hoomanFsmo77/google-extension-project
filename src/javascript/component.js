import Card from "./components/Card/Card.js";
import Api from "./components/Api/Api.js";
import '../style/component.scss'
window.customElements.define('price-card',Card)
let api=new Api()