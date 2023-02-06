import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@material-ui/core";
import useForm from "react-hook-form";
import Tables from "../table";
import { formatDate } from "../utils";
import { schemaStudent } from "../utils/validation";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const [listStudent, setListStudent] = useState([]);

    const navigate = useNavigate();

    const { register, handleSubmit, errors } = useForm({
        validationSchema: schemaStudent,
    });

    const onSubmit = (data) => {
        const prepareData = { ...data, dob: formatDate(data.dob) };
        setListStudent([...listStudent, prepareData]);
    };

    const addListStudent = (listStudent) => {
        fetch("url", {
            method: "POST",
            body: JSON.stringify(listStudent),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => {
                if (response.isOk) {
                    navigate("/list-student-added", { data: response?.result });
                }
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    };

    return (
        <>
            <div
                style={{
                    background: "#f1f1f1",
                    margin: "40px",
                    paddingTop: "20px",
                    borderRadius: "15px",
                }}
            >
                <Box pl={5}>
                    <Typography sx={{ p: 5 }} variant="h5">
                        Info Student
                    </Typography>
                </Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{ maxWidth: "100%" }}>
                        <Box display="flex" justifyContent="flex-center" alignItems="center">
                            <Box flexGrow={2} p={5}>
                                <Typography sx={{ flex: "1 1 100%" }} component="p">
                                    Full Name
                                </Typography>
                                <TextField
                                    name="fullName"
                                    error={!!errors.fullName}
                                    helperText={errors.fullName ? errors.fullName.message : ""}
                                    type="text"
                                    inputRef={register}
                                    fullWidth
                                />
                            </Box>
                            <Box flexGrow={2} p={5}>
                                <Typography sx={{ flex: "1 1 100%" }} component="p">
                                    Day of birth
                                </Typography>
                                <TextField
                                    name="dob"
                                    error={!!errors.dob}
                                    inputRef={register}
                                    helperText={errors.dob ? errors.dob.message : ""}
                                    type="date"
                                    fullWidth
                                />
                            </Box>
                            <Box flexGrow={1} p={5}>
                                <Button
                                    background="dark"
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                >
                                    Add new student
                                </Button>
                            </Box>
                        </Box>
                    </div>
                </form>
            </div>
            <div
                style={{
                    background: "#f1f1f1",
                    margin: "40px",
                    borderRadius: "15px",
                }}
            >
                <Box p={5}>
                    <Box display="flex" justifyContent="space-between" pb={2}>
                        <Typography sx={{ p: 5, m: 3 }} variant="h5">
                            New Student List
                        </Typography>
                        <Button
                            color="primary"
                            disabled={listStudent.length < 30}
                            onClick={() => addListStudent(listStudent)}
                            variant="contained"
                        >
                            Submit
                        </Button>
                    </Box>
                    <Tables data={listStudent} />
                </Box>
            </div>
        </>
    );
}
