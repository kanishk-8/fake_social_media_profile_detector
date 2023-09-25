// import React from "react";

// const LoginForm = () => {
//   return (
//     <div className="container-fluid">
//       <div>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Username"
//           aria-label="Username"
//           aria-describedby="basic-addon1"
//         />
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

import React, { useState } from "react";

const FakeSocialMediaDetector = () => {
  const [username, setUsername] = useState("");
  const [result, setResult] = useState("");
  // const [showModal, setShowModal] = useState(false);
  // const [username, setUsername] = useState("");
  const [reason, setReason] = useState("");
  const detectFakeAccount = async () => {
    // Send username to server for analysis
    // Receive response from server with fake score
    const fakeScore = Math.random(); // Simulate fake score from server

    if (fakeScore > 0.5) {
      setResult(
        `The account ${username} is fake with a score of ${Math.round(
          fakeScore * 100
        )}%.`
      );
    } else {
      setResult(
        `The account ${username} is real with a score of ${Math.round(
          (1 - fakeScore) * 100
        )}%.`
      );
    }
  };

  // const reportFakeAccount = async () => {
  //   const username = prompt("Enter the username of the fake account:");
  //   const reason = prompt("Enter the reason for reporting the fake account:");

  //   if (username && reason) {
  //     // Send username and reason to server for verification
  //     alert(
  //       "Thank you for reporting the fake account. We will review your report and take appropriate action."
  //     );
  //   } else {
  //     alert(
  //       "Please enter both username and reason for reporting the fake account."
  //     );
  //   }

  // const openModal = () => {
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  const onSubmit = async () => {
    // Validate the username and reason
    if (!username) {
      alert("Please enter a username.");
      return;
    }

    if (!reason) {
      alert("Please enter a reason for reporting the fake account.");
      return;
    }
  };

  return (
    <div id="container">
      {/* <div id="title">Fake Social Media Detector</div> */}
      <div className="container-fluid ">
        <h1>
          Enter the username of any social media account and find out if it is
          fake or not.
        </h1>
      </div>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          @
        </span>
        <input
          id="input"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="d-grid gap-2">
        <button
          id="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={detectFakeAccount}
        >
          {" "}
          Detect
        </button>

        {/* modal */}

        <div
          className="modal fade"
          id="exampleModalToggle2"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  REPORT FAKE ACCOUNT
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  placeholder="Enter the username of the fake account"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter the reason for reporting the fake account"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  className="btn btn-danger"
                  variant="primary"
                  onClick={onSubmit}
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* modal2  */}
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  RESULT
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div id="result">{result}</div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>

                <button
                  id="report-button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalToggle2"
                  // onClick={reportFakeAccount}
                >
                  {/* <img src="^2^" alt="" width="20" height="20" /> */}
                  Report Fake Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FakeSocialMediaDetector;
