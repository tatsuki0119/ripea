'use strict';

// function check(){
// var val = document.getElementById('check').value;
// if(val == 1){
// alert('申し訳ございませんが、サービス対象外となります。');
// }
// }


// ハンバーガーメニュー

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}