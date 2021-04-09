import { request } from './request.mjs';

request('/data.json')
  .then(res => {
    return res.text();
  })
  .then(data => {
    document.querySelector('#id').innerHTML = data;
    alert('ok');
  });
