import axios from 'axios';


const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  const topicDiv = document.createElement('div');
  const jsDiv = document.createElement('div');
  const bootDiv = document.createElement('div');
  const techDiv = document.createElement('div');
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  topicDiv.appendChild(jsDiv);
  topicDiv.appendChild(bootDiv);
  topicDiv.appendChild(techDiv);
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  topicDiv.classList.add('topics');
  jsDiv.classList.add('tab');
  bootDiv.classList.add('tab');
  techDiv.classList.add('tab');

  jsDiv.textContent = topics[0];
  bootDiv.textContent = topics[1];
  techDiv.textContent = topics[2];

  return topicDiv;

}
console.log(Tabs(['javascript', 'bootstrap', 'technology']));

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  const elements = document.querySelectorAll;
  const selected = document.querySelectorAll(selector);
  
  axios.get('https://lambda-times-api.herokuapp.com/topics')
       // .then((r) => console.log('success', r.data.topics))
        .then((r) => {
          const createNew = r.data.topics.map(item => {
            const newTab = Tabs(item);
            return newTab;
           
          })

          createNew.forEach(newTab => {
             if(elements === selected) {
              selected.appendChild(newTab);
             }
             return selected;
          })
         })
        
        .catch(err => {
          console.log("error:", err);
        })
         
        //console.log('success', r.data.topics))
  //console.log(url);

  // Find the array of topics inside the response, and create the tabs using the Tabs component.

  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

console.log(tabsAppender('.tabs-container'));

export { Tabs, tabsAppender }
