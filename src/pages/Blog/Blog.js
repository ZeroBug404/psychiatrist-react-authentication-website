import React from "react";
import { Card } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="container p-5">
      <Card className="">
        <Card.Header>Q & A</Card.Header>
        <Card.Body>
          <Card.Title>1. Difference between authorization and authentication</Card.Title>
          <Card.Text>
              <p>Authentication : 1.telling the system who you are by providing
            username and password. 2.who are you</p>
             <p>Authorization : 1.things you
            can do according to who you are 2. what rights do you have</p>
          </Card.Text>
          <Card.Title>2. Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
          <Card.Text>
            <p>
            It’s easy to start a project with Firebase or add a Firebase to your project. With Firebase, it's simple to connect and use built-in third-party authentication providers, including Google, Facebook, Github.
            <br />
            Other authentication options-
            <li>Password-based authentication</li>
            <li>Multi-factor authentication</li>
            <li>Certificate-based authentication</li>
            <li>Token-based authentication</li> 
            </p>
          </Card.Text>
          <Card.Title>3. What other services does firebase provide other than authentication</Card.Title>
          <Card.Text>
            <li>Cloud Functions</li>
            <li>Hosting</li>
            <li>Cloud Storage</li>
            <li>Google Analytics</li>
            <li>Predictions</li>
            <li>Cloud Messaging</li>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;
