import { CSSProperties } from "@mui/material";

export const navStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    backgroundColor: "white",
    borderBottom: "1px solidrgb(255, 255, 255)",
    position: "fixed", 
    top: 0, 
    left: 0,
    right: 0, 
    zIndex: 1000,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    height: '10vh'

}
export const LoginBtn: CSSProperties = {

    backgroundColor: "rgb(52, 13, 211)", 
    color: "white",

    borderRadius: "5px",
    padding: "0.6rem 1rem",
    fontSize: "0.9rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginLeft: "1vw",
    border: "1px solid transparent",
}
export const SignUpBtn: CSSProperties = {
    backgroundColor: "white", 
    color: "rgb(52, 13, 211)",
    border: "1px solid rgb(52, 13, 211)",
    borderRadius: "5px",
    padding: "0.6rem 1rem",
    fontSize: "0.9rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginLeft: "1vw",
}
export const containerOfBtns: CSSProperties = {
    width: "15vw",
    display: "flex"
}