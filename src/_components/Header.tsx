import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { Twitter } from "@/_icons/social-media/Twitter";
import { Facebook } from "@/_icons/social-media/Facebook";
import { Pinterest } from "@/_icons/social-media/Pinterest";
import { Instagram } from "@/_icons/social-media/Instagram";
import { Phone } from "@/_icons/contact/Phone";
import { Email } from "@/_icons/contact/Email";
import { Address } from "@/_icons/contact/Address";

interface ISocialMediaLink {
  link: string;
  icon: React.ReactNode;
}

const SocialMediaLinkItem = ({ link, icon }: ISocialMediaLink) => {
  return (
    <div className="w-10 h-10 bg-agri-50 rounded-full flex justify-center items-center">
      {icon}
    </div>
  );
};

interface IContact {
  name: string;
  value: string;
  icon: React.ReactNode;
}

const ContactItem = ({ name, value, icon }: IContact) => {
  return (
    <div className="px-6 py-4 flex justify-center items-center gap-5">
      <div>{icon}</div>
      <div>
        <div className="text-sm text-gray-500">{name}</div>
        <div className="text-md font-bold">{value}</div>
      </div>
    </div>
  );
};

function Header() {
  const socialMedia: Array<ISocialMediaLink> = [
    {
      link: "https://google.com",
      icon: <Twitter />,
    },
    {
      link: "https://google.com",
      icon: <Facebook />,
    },
    {
      link: "https://google.com",
      icon: <Pinterest />,
    },
    {
      link: "https://google.com",
      icon: <Instagram />,
    },
  ];
  const contacts: Array<IContact> = [
    {
      name: "Call Anytime",
      value: "+ 98 (000) - 9630",
      icon: <Phone />,
    },
    {
      name: "Send email",
      value: "ambed@agrios.com",
      icon: <Email />,
    },
    {
      name: "380 St Kilda Road",
      value: "Melbourne, Australia",
      icon: <Address />,
    },
  ];
  return (
    <header className="">
      <div className="h-28 flex justify-center">
        <div className="max-w-7xl w-full flex items-center">
          <div className="relative aspect-[170/51.5] max-w-[170px] w-full">
            <Image src={"/logo.png"} alt="" fill />
          </div>
          <div className="hidden flex-1 xl:flex justify-end ">
            <div className=" flex items-center justify-center gap-5">
              {socialMedia.map((media) => (
                <SocialMediaLinkItem {...media} />
              ))}
            </div>
            {contacts.map((contact, index) => (
              <>
                <ContactItem {...contact} />
                {index < contacts.length - 1 ? (
                  <div className="divider divider-horizontal before:bg-agri-50 after:bg-agri-50"></div>
                ) : null}
              </>
            ))}
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
