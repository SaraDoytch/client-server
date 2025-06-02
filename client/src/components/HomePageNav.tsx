import { navStyle,SignUpBtn } from '../CSS/nav'
import { NavLink } from 'react-router'
import { NavbarLink } from '../CSS/homePageNav'
import { Button } from '@mui/material'




const HomePageNav = () => {



    return (
        <div>
            <nav style={navStyle}>
                <div>
                    <NavLink to='/' >RideShare</NavLink>
                </div>
                <NavLink to="/UserProfile" >
                    <div  style={NavbarLink} >
                        פרופיל משתמש
                    </div>
                </NavLink>
                <NavLink to="/Offer">
                    <div style={NavbarLink}>
                        הוספת נסיעה
                    </div>
                </NavLink>
                <NavLink to="/SearchDrive">
                    <div style={NavbarLink}>
                        חיפוש נסיעה
                    </div>
                </NavLink>
                <NavLink to="/About">
                    <div style={NavbarLink}>
                        אודות
                    </div>
                </NavLink>
                <NavLink to="/">
                    <div style={NavbarLink}>
                        עמוד הבית
                    </div>
                </NavLink>
               
                <Button style={SignUpBtn} >
              Log out
                </Button >
            
            </nav>
        </div>
    )
}

export default HomePageNav