"use client";

import { IconButton } from "@/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Copy, Link } from "lucide-react";

export function InviteLinkInput() {
  function copyInviteLink() {
    console.log("Hello word");
  }
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField
        readOnly
        defaultValue="http://localhost:3000/invite/65454546541321564"
      />

      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
