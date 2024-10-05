import "./App.css";
import Accordion from "./components/Accordion";

function App() {
  const dummyData = [
    {
      header: "Introduction to Web Development",
      body: "Web development is the process of creating websites or web applications for the internet. It involves various technologies such as HTML, CSS, and JavaScript. Developers build user interfaces, ensure functionality, and improve user experience. Frontend and backend development are the two main categories. While frontend deals with the visual aspect, backend focuses on server-side logic. The collaboration between both ensures seamless web experiences. Additionally, frameworks and libraries have become essential tools, making development faster and more efficient.",
    },
    {
      header: "The Importance of Learning JavaScript",
      body: "JavaScript is a vital language for web development. It allows developers to add interactivity, dynamic content, and enhance user experiences. With JavaScript, one can manipulate the Document Object Model (DOM), make asynchronous calls, and create single-page applications. Learning JavaScript opens doors to frameworks like React, Angular, and Vue. Moreover, JavaScript is not limited to browsers; it's also used in server-side programming through Node.js. Thus, mastering JavaScript equips developers with versatile skills crucial in modern web development.",
    },
    {
      header: "Frontend vs Backend Development",
      body: "Frontend and backend development are distinct but interconnected fields. Frontend developers focus on the user interface, ensuring that elements are visually appealing and interactive. They work closely with designers to implement styles, animations, and responsive layouts. On the other hand, backend developers handle databases, servers, and application logic. They ensure that data is processed correctly, secure transactions are completed, and performance remains optimized. While frontend interacts with users, backend ensures the system runs smoothly behind the scenes.",
    },
    {
      header: "Why Learn CSS for Web Design",
      body: "CSS (Cascading Style Sheets) is a crucial technology in web design. It controls the visual presentation of web pages, allowing designers to create layouts, apply styles, and enhance the user experience. CSS works alongside HTML and JavaScript, ensuring the content is visually appealing and responsive across devices. With CSS, developers can apply animations, transitions, and sophisticated layouts. Mastering CSS is essential for creating engaging web interfaces and improving the overall user experience on the web.",
    },
    {
      header: "The Rise of Web Frameworks",
      body: "Web frameworks have revolutionized the way developers build web applications. Frameworks like React, Vue, and Angular provide a structure to streamline the development process, making it easier to manage complex codebases. These frameworks offer pre-built components, routing, and state management, allowing for faster development and better performance. As a result, developers can focus more on the business logic and user interface rather than reinventing the wheel. The adoption of frameworks has become standard practice in modern web development.",
    },
    {
      header: "The Importance of Responsive Design",
      body: "Responsive design ensures that websites are optimized for various devices and screen sizes. With the rise of mobile usage, having a responsive site is essential to provide a seamless experience across desktops, tablets, and smartphones. Developers achieve this through fluid layouts, flexible images, and media queries in CSS. By implementing responsive design, businesses can improve accessibility, retain users, and boost engagement. Ensuring compatibility with different devices is a key factor in user satisfaction and website performance.",
    },
  ];

  return (
    <div className="container">
      <Accordion value={dummyData}></Accordion>
    </div>
  );
}

export default App;
