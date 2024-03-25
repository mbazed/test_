import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Role_styles.css"; // Import the CSS file for styling

const TextContainer = ({ userType }) => {
  return (
    <div
      className={`text-container ${
        userType === "consumer" ? "consumer" : "stakeholder"
      }`}
    >
      <p>
        {userType === "consumer"
          ? "Consumer text goes here"
          : "Stakeholder text goes here"}
      </p>
    </div>
  );
};

const TrackingContainer = () => {
  const navigate = useNavigate();

  const handleTracking = () => {
    navigate("/track");
  };

  return (
    <div className="tracking-container">
      <button onClick={handleTracking} class="tracking-button">
        Track
      </button>
    </div>
  );
};

const ButtonContainer = () => {
  const navigate = useNavigate();

  const handleGovernmentClick = () => {
    navigate("/government");
  };
  const handleRmsClick = () => {
    navigate("/rms");
  };
  const handleManufacturersClick = () => {
    navigate("/manufacturers");
  };
  const handleDistributorsClick = () => {
    navigate("/distributors");
  };
  const handleRetailersClick = () => {
    navigate("/retailers");
  };
  return (
    <div className="button-container">
      <button onClick={handleGovernmentClick}>Government</button>
      <button onClick={handleRmsClick}>Raw Material Supplier</button>
      <button onClick={handleManufacturersClick}>Manufacturer</button>
      <button onClick={handleDistributorsClick}>Distributor</button>
      <button onClick={handleRetailersClick}>Retailer</button>
    </div>
  );
};

const ConsumerScreen = () => {
  return (
    <div className="consumer-container">
      <TextContainer userType="consumer" />
      <TrackingContainer />
    </div>
  );
};

const StakeholderScreen = () => {
  return (
    <div className="stakeholder-container">
      <TextContainer userType="stakeholder" />
      <ButtonContainer />
    </div>
  );
};

const App = () => {
  const [userType, setUserType] = useState("consumer");

  const handleUserTypeChange = (newType) => {
    setUserType(newType);
  };

  return (
    <div className="app-container">
      <div className="slider-controls">
        <label
          htmlFor="consumer"
          className={`slide consumer ${
            userType === "consumer" ? "active" : ""
          }`}
          onClick={() => handleUserTypeChange("consumer")}
        >
          Consumer
        </label>
        <label
          htmlFor="stakeholder"
          className={`slide stakeholder ${
            userType === "stakeholder" ? "active" : ""
          }`}
          onClick={() => handleUserTypeChange("stakeholder")}
        >
          Stakeholder
        </label>
        <div
          className={`slider-tab ${userType === "stakeholder" ? "shift" : ""}`}
        ></div>
      </div>

      <div className="screen">
        {userType === "consumer" && <ConsumerScreen />}
        {userType === "stakeholder" && <StakeholderScreen />}
      </div>
    </div>
  );
};

export default App;
