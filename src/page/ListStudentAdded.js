import React from "react";
import { Typography, Box, Button } from "@material-ui/core";
import Tables from "../table";
import { useNavigate } from "react-router-dom";

export default function ListStudentAdded(props) {
    const navigate = useNavigate();

    const { data } = props;
    return (
        <div
            style={{
                background: "#f1f1f1",
                margin: "40px",
                borderRadius: "15px",
            }}
        >
            <Button onClick={() => navigate("/")}>Back</Button>
            <Box p={5}>
                <Typography sx={{ p: 5, m: 3 }} variant="h5">
                    Student List
                </Typography>

                <Tables data={data} />
            </Box>
        </div>
    );
}
