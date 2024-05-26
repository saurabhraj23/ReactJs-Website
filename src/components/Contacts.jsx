import React from "react";

function Contacts() {
  return (
    <div className="contacts">
      <div>
        <form className="form">
          <h1>Contact Me</h1>
          <div>
            <label>Name</label>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <label>Message</label>
            <input type="text" placeholder="Message" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
