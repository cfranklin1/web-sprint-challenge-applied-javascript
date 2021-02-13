const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  const headDiv = document.createElement('div');
  const theDate = document.createElement('span');
  const theTitle = document.createElement('h1');
  const theTemp = document.createElement('span');
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  headDiv.appendChild(theDate);
  headDiv.appendChild(theTitle);
  headDiv.appendChild(theTemp);

  headDiv.classList.add('header');
  theDate.classList.add('date');
  theTemp.classList.add('temp');

  theDate.textContent = date;
  theTitle.textContent = title;
  theTemp.textContent = temp;

  return headDiv;
}

console.log(Header('the title', 'the date', 'the temp'));



const headerAppender = (selector) => {
  // TASK 2
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const newHeader = Header('A Title', 'February 12th 2021', '75');
  
  const elements = document.querySelectorAll;
  const selected = document.querySelectorAll(selector);
  if(elements === selected) {
    selected.appendChild(newHeader);
  } 
    return selected
}

console.log(headerAppender('.header-container'));



export { Header, headerAppender }
