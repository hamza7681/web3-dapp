import React from "react";
import { useNavigate } from "react-router-dom";
import { loader } from "../assets/index";
import FundCard from "./FundCard";

const DisplayCampaigns = ({ title, loading, campaigns }) => {
  const navigate = useNavigate();
  const handleNavigate = (val) => {
    navigate(`/campaign-details/${val.pId}`, { state: val });
  };
  return (
    <>
      <div>
        <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
          {title} ({campaigns?.length})
        </h1>
        <div className="flex flex-wrap mt-[20px] gap-[26px]">
          {loading && (
            <img
              src={loader}
              alt="loader"
              className="w-[100px] h-[100px] object-contain"
            />
          )}
          {!loading && campaigns.length === 0 && (
            <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
              You have not created any campaigns yet!
            </p>
          )}
          {!loading &&
            campaigns.length > 0 &&
            campaigns.map((val,index) => (
              <FundCard
                key={index}
                {...val}
                handleClick={() => handleNavigate(val)}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default DisplayCampaigns;
