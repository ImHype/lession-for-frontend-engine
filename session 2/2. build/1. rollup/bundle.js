(function () {
  'use strict';

  const request = url => {
    return fetch(url);
  };

  request('/data.json')
    .then(res => {
      return res.text();
    })
    .then(data => {
      document.querySelector('#id').innerHTML = data;
      alert('ok');
    });

}());
