

console.log('Hello World!');


// -------------------
//  For clipboard.js
// -------------------

// const emailBtn = document.querySelector('.email');
// const txtAddress = emailBtn.querySelector('.txt-address');
// const txtCopied = emailBtn.querySelector('.txt-copied');
//
// var clip = new Clipboard('.email');
//
// clip.on("success", function() {
//   if (txtAddress.classList.contains('address-active')) {
//     return;
//   } else {
//     txtAddress.classList.add('address-active');
//     txtCopied.classList.add('copied-active');
//   }
//
//   function removeActive() {
//     txtAddress.classList.remove('address-active');
//     txtCopied.classList.remove('copied-active');
//   }
//
//   setTimeout(removeActive, 3000);
// });

// clip.on("error", function() {
//   document.body.insertAdjacentHTML('beforeend', '<div>that didn\'t work.</div>');
// });




// -------------------
//  Strengths dropdowns
// -------------------

// const containerLeft = document.querySelector('.containerLeft');
// const strength = containerLeft.querySelectorAll('.strength');
//
// function transition() {
//   let sub = this.querySelector('.sub');
//   let svg = this.querySelector('svg')
//
//   if (sub.classList.contains('subActive')) {
//     svg.classList.remove('svgActive');
//     sub.classList.remove('subActive');
//     setTimeout(function() {
//       sub.classList.remove('subDisplay');
//     }, 10);
//   } else {
//     svg.classList.add('svgActive');
//     sub.classList.add('subDisplay');
//     setTimeout(function() {
//       sub.classList.add('subActive');
//     }, 10);
//   }
// }
//
// strength.forEach(el => el.addEventListener('click', transition));






//
// const cards = document.querySelectorAll('.card');
//
// function transition() {
//   if (this.classList.contains('active')) {
//     this.classList.remove('active')
//   } else {
//     this.classList.add('active');
//   }
// }
//
// cards.forEach(card => card.addEventListener('click', transition));
