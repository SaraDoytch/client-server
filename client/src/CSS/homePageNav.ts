import { CSSProperties } from "@mui/material";

export const NavbarContainer: CSSProperties = {
    display: "flex",
    justifyContent: "space-around", 
    alignItems: "center",
    backgroundColor: "#E0F2F7",
    padding: "1rem 2rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
    width: "100%",
    boxSizing: "border-box", 
};
export const NavbarLink: CSSProperties = {
    textDecoration: "none", 
    fontSize: "120%",
    fontWeight: "100",
    padding: "0.5rem 1rem", 
    position: "relative", 
    overflow: "hidden", 
    cursor: "pointer",
    transition: "color 0.3s ease-in-out",
    color: 'rgb(0, 0, 0)',
    fontFamily: "Calibri",


};
export const NavbarLinkHover: CSSProperties = {
    textDecoration: "none", 
    fontSize: "1.4rem",
    fontWeight: "600",
    padding: "0.5rem 1rem", 
    position: "relative", 
    overflow: "hidden", 
    cursor: "pointer",
    transition: "color 0.3s ease-in-out",
    color: 'rgb(39, 8, 165)',
    fontFamily: "Calibri",


};