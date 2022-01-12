import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const liArray = links.map((link)=>{
    return <a key={link} href={"#" + link}>{link}</a>
  })
  return <nav>{liArray}</nav>;
}

export default NavBar;
