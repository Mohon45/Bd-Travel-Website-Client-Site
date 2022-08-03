import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";

const MessangerChart = () => {
  return (
    <div>
      <MessengerCustomerChat
        pageId={process.env.MESSANGER_PAGE_ID}
        appId={process.env.MESSANGER_APP_ID}
      />
    </div>
  );
};

export default MessangerChart;
