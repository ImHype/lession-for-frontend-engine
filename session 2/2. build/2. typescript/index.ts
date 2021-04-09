async function hello(url: string) {
  return fetch(url);
}

hello('https://127.0.0.1:3000');
