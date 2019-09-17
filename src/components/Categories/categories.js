import React from "react";
import "./categories.css";
import Navbar from "../Navbar/navbar";
import { Box } from "grommet";

const Categories = () => {
    return(
        <div className="mainDiv">
            <Box
                border={{ color: 'brand', size: 'large' }}
                direction="column"
                height={ "medium" }
                margin={{ 
                    "right": "3.5em",
                    "left": "2em"
                }}
                pad="medium"
                responsive={ true }
                width={ "medium" }
            >
                <h2>Coming Soon!</h2>
            </Box>
            <Box
                border={{ color: 'brand', size: 'large' }}
                direction="column"
                height={ "medium" }
                margin={{ 
                    "left": "3.5em",
                    "right": "2em"
                }}
                pad="medium"
                responsive={ true }
                width={ "medium" }
            >
                <h2>Add a New Show!</h2>
            </Box>
        </div>
    )
}

export default Categories;