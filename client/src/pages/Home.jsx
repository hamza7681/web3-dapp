import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
import DisplayCampaigns from "../components/DisplayCampaigns";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { address, contract, getCampaigns } = useStateContext();
  const fetch = async () => {
    setLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setLoading(false);
  };
  useEffect(() => {
    if (contract) fetch();
  }, [address, contract]);
  return (
    <>
      <DisplayCampaigns
        title="All Campaigns"
        loading={loading}
        campaigns={campaigns}
      />
    </>
  );
};

export default Home;
