<h1>TO DO  React App </h1>
<h2>Get Started</h2> <br />
You can find the design of the app named design.png in the root folder <br/>
The url of the deployed app is https://to-do-swart-five.vercel.app/ <br />
After clone go the project directory, you can run: <br />

### `npm install`

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

#################################################################

<h2>1. How is React different from Angular?</h2>
<ul>
<li>
Components are self-contained units that manage their own state and render their own view in React's component-based architecture. In contrast, Angular employs a Model-View-Controller (MVC) architecture, in which the model defines the data structure, the controller manages the data, and the view displays the data.
</li>
<li>
React employs one-way data binding, which means that changes in a component's state are passed down to its children via properties. Angular, on the other hand, employs two-way data binding, in which model changes are automatically reflected in the view, and vice versa.
</li>
<li>
React outperforms Angular in terms of performance thanks to its virtual DOM, which optimizes view updates. Angular, on the other hand, has a more complex architecture that can have an impact on performance.
</li>
</ul>

<h2>2. What is the virtual DOM?</h2>
<ul>
<li>
The virtual DOM (Document Object Model) is a lightweight in-memory representation of the actual DOM that React uses to update the view efficiently.When the state of a React component changes, the virtual DOM is updated rather than the actual DOM.React then uses a process known as "reconciliation" to compare the virtual DOM to the actual DOM and determine what changes need to be made.It reduces the number of changes that must be made to the DOM, resulting in faster and more efficient view updates. 
</li>
</ul>

<h2>3. What are props in React?</h2>
<ul>
<li>
props refer to a method of transmitting data from a parent component to a child component. Props are used to provide a child component with the data it requires to render its view.
</li>
</ul>

<h2>4. What are the differences between state and props?</h2>
<ul>
<li>
Props are used to pass data from a parent component to a child component and are read only, whereas state is used to store data that is specific to a component and can change over time. Props and state are both used to manage and update data in a component.
</li>
</ul>

<h2>5. What do you understand by the term CORS?</h2>
<ul>
<li>
CORS is a security mechanism that allows a web page to make cross-domain requests while maintaining the same-origin policy's security.It enables the server to control which requests are permitted and aids in the prevention of malicious requests from other domains.
</li>
</ul>
