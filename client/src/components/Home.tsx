import { Button } from "@mui/material";
import {
    bigFont, btnStyle, buttonStyle, commentsContainer, commentText, containerLinks, containerOfBtnsInHomePage,
    floatingButtonStyle, gridStyle, iconStyle, imageStyle, inlineContentWrapper, itemStyle,
    margin, mediumFont, modalContentStyle, modalOverlayStyle,
    picture, sectionStyle, textStyle
} from "../CSS/home";
import { useEffect, useState } from "react";
import { useAddcommentMutation, useGetAllcommentsQuery } from "../stores/Slices/endPointComments";
import { Comment } from "../interfaces/Interface";
import { RootState } from "../stores/Store";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Home = () => {
    const currentUser = useSelector((state: RootState) => state.auth.currentUser);
    const isLoggedIn = Boolean(currentUser);
    const [isOpen, setIsOpen] = useState(false);
    const defaultComment: Comment = { text: "" };
    const [comment_, setComment] = useState<Comment>(defaultComment);
    const [Addcomment] = useAddcommentMutation();
    const [index, setIndex] = useState(0);

    const { data } = useGetAllcommentsQuery();
    const testimonials = data ?? [];


    const next = () => {
        if (testimonials.length === 0) return;
        setIndex((index + 1) % testimonials.length);
    };

    const prev = () => {
        if (testimonials.length === 0) return;
        setIndex((index - 1 + testimonials.length) % testimonials.length);
    };

    const handleClick = async () => {
        await Addcomment(comment_);
        console.log("תגובה:", comment_);
        setIsOpen(false);
    };
    useEffect(() => {
        if (testimonials.length === 0) {
            return;
        }
        const timer = setInterval(() => {
            setIndex((prevIndex) => {
                return (prevIndex + 1) % testimonials.length;
            });
        }, 4000);

        return () => clearInterval(timer);
    }, [testimonials.length]);
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
                                <button onClick={handleClick}>שלח</button>
                            </div>
                        </div>
                    </div>
                )}

                <div style={picture}>
                    <div style={containerLinks}>
                        <div style={bigFont}>מהיום זה קל יותר מתמיד</div>
                        <div style={mediumFont}>תכנון הנסיעות שלך בלחיצות פשוטות</div>
                        <div style={mediumFont}>התאמה מושלמת לדרישות וללו"ז שלך</div>
                        <div style={mediumFont}>שיתוף ותקשורת עם נוסעים ונהגים בזמן אמת</div>
                        <div style={mediumFont}>קבלת עדכונים והודעות ישירות מהאפליקציה</div>
                        <div style={bigFont}>והכל בקליק אחד</div>
                        {currentUser && (
                            <div style={containerOfBtnsInHomePage}>
                                <Link to="/UserProfile">
                                    <Button sx={btnStyle} style={margin}>עדכן נסיעה</Button>
                                </Link>
                                <Link to="/SuggestionDrive">
                                    <Button sx={btnStyle} style={margin}>הצעת נסיעה</Button>
                                </Link>
                                <Link to="/SearchDrive">
                                    <Button sx={btnStyle} style={margin}>חפש נסיעה</Button>
                                </Link>
                            </div>)}
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
                    <div>:תגובות ממשתמשים באתר </div>
                    {testimonials.length > 0 && (
                        <div>
                            <div style={commentText}>
                                "{testimonials[index].text}"
                            </div>
                            <div style={inlineContentWrapper}>
                                <button onClick={prev} style={buttonStyle}>
                                    ←
                                </button>
                                <button onClick={next} style={buttonStyle}>
                                    →
                                </button>
                            </div>
                        </div>
                    )}
                </section>

            </div>
        </>
    );
};

export default Home;

