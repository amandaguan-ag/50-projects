const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();
// function generateJoke() {
//   const config = { headers: { Accept: 'application/json' } }
//   fetch('https://icanhazdadjoke.com/', config)
//     .then(res => res.json())
//     .then(data => { jokeEl.innerHTML = data.joke })
// }
async function generateJoke() {
  const config = { headers: { Accept: 'application/json' } }
  const res = await fetch('https://icanhazdadjoke.com/', config)
  const data = await res.json()
  
  // Replace innerHTML with textContent for safe text insertion
  jokeEl.textContent = data.joke
}