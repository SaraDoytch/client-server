import { Button } from "@mui/material";
import {
    bigFont, btnStyle, buttonStyle, commentsContainer, commentText, containerLinks, containerOfBtnsInHomePage,
    floatingButtonStyle, gridStyle, iconStyle, imageStyle, inlineContentWrapper, itemStyle,
    margin, mediumFont, modalContentStyle, modalOverlayStyle,
    picture, sectionStyle, textStyle
} from "../CSS/home";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { Comment } from "./interfaces/Interface";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const defaultComment: Comment = { text: "" };
    const [comment_, setComment] = useState<Comment>(defaultComment);
    const [index, setIndex] = useState(0);



    return (
        <>
            <div>
                <Button sx={floatingButtonStyle} onClick={() => setIsOpen(true)}>הוסף תגובה</Button>

                {isOpen && (
                    <div style={modalOverlayStyle} onClick={() => setIsOpen(false)}>
                        <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
                            <h3 style={{ color: "black", direction: "rtl" }}>הוספת תגובה</h3>
                            <input
                                type="text"
                                onChange={(e) => setComment(prev => ({ ...prev, text: e.target.value }))}
                                placeholder="הקלד תגובה..."
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    marginBottom: "10px",
                                    borderRadius: "8px",
                                    border: "1px solid #ccc",
                                    fontSize: "16px",
                                    backgroundColor: "white",
                                    color: "black"
                                }}
                            />
                            <div style={{ textAlign: "right" }}>
                                <button >שלח</button>
                            </div>
                        </div>
                    </div>
                )}

                <div style={picture}>
                    <div style={containerLinks}>
                        <div style={bigFont}>מהיום קל יותר ...... (צריך ניסוח)</div>
                        <div style={mediumFont}>מלל כלשהוא...</div>
                        <div style={mediumFont}>מלל כלשהוא...</div>
                        <div style={mediumFont}>מלל כלשהוא...</div>
                        <div style={mediumFont}>מלל כלשהוא...</div>
                        <div style={bigFont}>והכל בקליק אחד</div>
                        <div style={containerOfBtnsInHomePage}>
                            <Link to="/UserProfile">
                                <Button sx={btnStyle} style={margin}>פרופיל משתמש</Button>
                            </Link>
                            <Link to="/Offer">
                                <Button sx={btnStyle} style={margin}>הצעת נסיעה</Button>
                            </Link>
                            <Link to="/SearchDrive">
                                <Button sx={btnStyle} style={margin}>חפש נסיעה</Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <section style={sectionStyle}>
                    <div style={imageStyle} />
                    <div style={gridStyle}>
                        <div style={itemStyle}><div style={iconStyle}>💰</div><div style={textStyle}>חיסכון בכסף</div></div>
                        <div style={itemStyle}><div style={iconStyle}>🕒</div><div style={textStyle}>חיסכון בזמן</div></div>
                        <div style={itemStyle}><div style={iconStyle}>🌍</div><div style={textStyle}>שמירה על הסביבה</div></div>
                        <div style={itemStyle}><div style={iconStyle}>👥</div><div style={textStyle}>היכרות עם אנשים</div></div>
                        <div style={itemStyle}><div style={iconStyle}>🛣️</div><div style={textStyle}>מסלול מותאם אישית</div></div>
                        <div style={itemStyle}><div style={iconStyle}>📱</div><div style={textStyle}>שימוש פשוט באפליקציה</div></div>
                    </div>
                </section>
                <section style={commentsContainer}>
                 
                </section>
            </div>
        </>
    );
};

export default Home;
