import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/features/auth/authSlice";
import { useClientQuery } from "../redux/features/client/clientApi";

const WaiverSign = () => {
  const [isSigned, setIsSigned] = useState(false);
  const user = useSelector(selectCurrentUser);
  const { data: userData, isSuccess } = useClientQuery(user?._id);

  useEffect(() => {
    if (!isSigned) {
      const script = document.createElement("script");
      script.src = "https://www.cleverwaiver.com/js/templateId.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isSigned]);

  useEffect(() => {
    if (userData?.results?.waiver_signed) {
      setIsSigned(true);
    }
  }, [isSuccess]);

  return (
    <div>
      {!isSigned && user?._id && (
        <div
          id="templateId"
          data-value="67d9470f39aac12da1635a98"
          data-text="Sign Your Waiver Online"
          data-position="left"
          data-backgroundcolor="#0ABAC3"
          data-fontcolor="#ffffff"
        />
      )}
    </div>
  );
};

export default WaiverSign;
