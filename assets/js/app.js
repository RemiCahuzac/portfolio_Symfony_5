import '../scss/app.scss';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap';

console.log("Test")
$("body").on("click", ".collection-add", (e) => {
    console.log(e.target.dataset.collection)
})


