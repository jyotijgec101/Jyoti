import React from 'react';
import './Form.css'; // Import the external CSS file

function Form() {
  return (
    <div className="body">
      <h2 className="form"><u>FEEDBACK FORMS :</u></h2>
      <form action="backend.php">
        <h2 className="form"><u>-:Your Feedback Our inspiration:-</u></h2>
        <label htmlFor="name"><b>Name : </b></label>
        <div>
          <input type="text" name="My name" id="name" />
        </div> <br />
        <label htmlFor="email"> <b>Email : </b></label>
        <div>
          <input type="email" name="My email" id="mail" />
        </div><br />
        <label htmlFor="mobno"><b>Mobile No: </b></label>
        <div>
          <input type="number" name="Mobile No : " id="mobno" />
        </div><br />
        <div>
          <b>Gender : Male</b> <input type="radio" name="my gender" /> <b>Female</b> <input type="radio"
            name="my gender" /> <b>Others</b>
          <input type="radio" name="my gender" />
        </div><br />
        <div>
          <b>Are you interested about JYOTI :</b> <input type="checkbox" name="Interseted" />
        </div><br />
        <div>
          <div>
            <label htmlFor="mycar"><b>Review about JYOTI: </b></label>
            <select name="Myname" id="mycar">
              <option value="5star">⭐⭐⭐⭐⭐</option>
              <option value="4star">⭐⭐⭐⭐</option>
              <option value="3star">⭐⭐⭐</option>
              <option value="2star">⭐⭐</option>
              <option value="1star">⭐</option>
              <option value="choice" selected>Your Choice</option>
            </select>
          </div><br />
          <div>
            <b>Write about your Suggestion : </b> <br /> <br /> <textarea name="Suggestion" id=""  cols="40"
              rows="10"></textarea>
          </div>

          <input type="submit" value="Submit now" />

          <input type="reset" value="reset now." />
        </div>
      </form>
    </div>
  );
}

export default Form;
