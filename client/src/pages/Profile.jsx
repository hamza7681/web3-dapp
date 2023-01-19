import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
import DisplayCampaigns from "../components/DisplayCampaigns";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { address, contract, getUserCampaigns } = useStateContext();
  const fetch = async () => {
    setLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setLoading(false);
  };
  useEffect(() => {
    if (contract) fetch();
  }, [address, contract]);
  return (
    <>
      <DisplayCampaigns
        title="Users Campaigns"
        loading={loading}
        campaigns={campaigns}
      />
    </>
  );
};

export default Profile;
