y=Number(prompt("which title from starting do you want to see"))
x=Number(prompt("which title ending do you want to see"))
for(i=y;i<=x;i++){
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log(data[i]);
   })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}