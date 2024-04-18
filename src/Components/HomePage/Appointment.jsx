import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Select from "react-select";

import Wh from "../../assets/WorkingHr.png";

const formvalidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid phone number")
    .required("Phone number is required"),
  message: Yup.string().required("Message is required"),
  department: Yup.string().required("Department is required"),
  doctor: Yup.string().required("Doctor is required"),
  date: Yup.date().required("Date is required"),
});

const onSumbit = async (values, { setSubmitting, resetForm }) => {
  try {
    const response = await axios.post(
      "https://sheet.best/api/sheets/1888c1c0-5684-4d23-9199-7f89fc48d7c7",
      values
    );
    resetForm();
    alert("Form submitted successfully");
  } catch (error) {
    if (error.response) {
      console.error("Server Error:", error.response.data);
    } else if (error.request) {
      console.error("Network Error:", error.request);
    } else {
      console.error("Error:", error.message);
    }
    alert("Failed to submit form");
  }
  setSubmitting(false);
};

const Appointment = () => {
  return (
    <>
      {/* main container for the section */}
      <div className="flex  justify-center items-center m-7 mx-auto 2xl:w-[1440px] w-auto" id="bookAppointmentSection">
        {/* content container for the form and other contents */}
        <div className="flex flex-wrap md:flex-row flex-col gap-7 justify-center ">
          {/* form container */}
          <div className="lg:w-[690px] md:h-[53rem] w-auto  bg-[#F3EFF7] flex flex-col items-center justify-center my-10  ">
            <div className="mx-5 my-5 ">
              <h1 className="text-4xl m-6 font-bold text-center">
                Book an Appointment
              </h1>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  phone: "",
                  message: "",
                  department: "",
                  doctor: "",
                  date: "",
                }}
                validationSchema={formvalidation}
                onSubmit={onSumbit}
              >
                {({ isSubmitting }) => (
                  <Form className="flex flex-col w-full gap-3  ">
                    <div className="w-full border border-gray-300 rounded">
                      <Field
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full py-1.5 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Name *"
                      />
                    </div>
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500"
                    />
                    <div className="w-full border border-gray-300 rounded">
                      <Field
                        type="text"
                        name="email"
                        id="email"
                        className="block w-full py-1.5 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Email *"
                      />
                    </div>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500"
                    />
                    <div className="w-full border border-gray-300 rounded">
                      <Field
                        type="tel"
                        name="phone"
                        id="phone"
                        className="block w-full py-1.5 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Phone Number *"
                      />
                    </div>
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500"
                    />
                    <div className="w-full border border-gray-300 rounded">
                      <Field
                        as={Select}
                        name="department"
                        id="department"
                        className="block w-full  text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent react-select"
                        options={[
                          { value: "department1", label: "Department 1" },
                          { value: "department2", label: "Department 2" },
                        ]}
                        classNamePrefix="react-select"
                        placeholder="Select Department"
                      />
                    </div>
                    <ErrorMessage
                      name="department"
                      component="div"
                      className="text-red-500"
                    />
                    <div className="w-full border border-gray-300 rounded">
                      <Field
                        as={Select}
                        name="doctor"
                        id="doctor"
                        options={[
                          { value: "doctor1", label: "Doctor 1" },
                          { value: "doctor2", label: "Doctor 2" },
                        ]}
                        classNamePrefix="react-select"
                        className="block w-full  text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Select Doctor"
                      />
                    </div>
                    <ErrorMessage
                      name="doctor"
                      component="div"
                      className="text-red-500"
                    />
                    <div className="w-full border border-gray-300 rounded">
                      <Field
                        type="date"
                        name="date"
                        id="date"
                        className="block w-full py-1.5 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Date *"
                      />
                    </div>
                    <ErrorMessage
                      name="date"
                      component="div"
                      className="text-red-500"
                    />

                    <div className="w-full border border-gray-300 rounded">
                      <Field
                        component="textarea"
                        type="text"
                        name="message"
                        id="message"
                        className="block w-full py-1.5 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 "
                        placeholder="Message *"
                      />
                    </div>
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="capitalize bg-[#652D91] px-5 py-2 sm:px-10 sm:py-3 text-white text-sm w-full"
                    >
                      Send
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>

          {/* right section of the section */}
          <div className="flex flex-col  justify-center h-auto gap-[3rem]">
            <div className="md:h-[28rem] h-auto mx-3">
              <img src={Wh} alt="" className="md:h-[28rem] h-auto w-auto" />
            </div>
            <div className="flex flex-col justify-center items-center bg-[#652D91] h-[22rem] xs:mx-3">
              <h1 className="text-3xl font-semibold text-white mx-4 text-center">
                Didn't Encounter <br /> a Question
              </h1>
              <p className="mt-2 text-white text-center">
                Unanswered Questions: <br /> What's Missing?
              </p>
              <button className="bg-[#D692EE] px-7 py-3 mt-3">
                More Questions
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
