import { object, string, date } from "yup";

const today = new Date();
today.setHours(0, 0, 0, 0);

export const schemaStudent = object().shape({
    fullName: string().required("Full Name is required"),
    dob: date()
        .max(today, "Date of birth cannot be greater than current date")
        .required("Day of Birth is required"),
});
