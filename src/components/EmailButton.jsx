import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import { copyToClipboard } from "../utils/copyToClipboard";
import Button from "./Button";
function EmailButton() {
  const [copied, setCopied] = useState(false);
  const email = "habtamusemagn1@gmail.com";

  const handleClick = async () => {
    const success = await copyToClipboard(email);
    setCopied(success);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <Button handleClick={handleClick} copied={copied}>
      {copied ? (
        <span className="relative">
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
            Copied!
          </span>
        </span>
      ) : null}
      <EmailIcon />
    </Button>
  );
}

export default EmailButton;
