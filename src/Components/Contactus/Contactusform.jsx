import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';
import whatsappicon from "../../assets/whatsapp.png";

function Contactusform() {
  return (
    <>
      {/* contactus form head */}
      <div className="px-10  my-11 2xl:w-[1440px] w-auto mx-auto">
        <h1 className="font-bold text-2xl text-center py-1">
          WE ARE MORE THAN WILLING TO PROVIDE OUR ASSISTANCE.
        </h1>
        <p className="text-[#652D91] text-center py-1 text-[14px]">Have inquiries?</p>
        <p className="text-[#652D91] text-center text-[14px]">
          Interested in learning more about the services we offer, Feel free to
          text us at any time.
        </p>
      </div>
      <div className="flex justify-center gap-8 px-10 2xl:w-[1440px] w-auto mx-auto flex-wrap py-3">
        {/* Contact form section */}
        <div className="flex flex-col justify-center gap-4 ">
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              phonenumber: "",
              email: "",
              comments: "",
            }}
            validate={(values) => {
              const errors = {};
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              const phoneRegex = /^\d{10}$/;
            
              if (!values.firstname) {
                errors.firstname = "First name is required*";
              }
              if (!values.lastname) {
                errors.lastname = "Last name is required*";
              }
              if (!values.email) {
                errors.email = "Email is required*";
              } else if (!emailRegex.test(values.email)) {
                errors.email = "Invalid email address";
              }
              if (!values.phonenumber) {
                errors.phonenumber = "Phone number is required*";
              } else if (!phoneRegex.test(values.phonenumber)) {
                errors.phonenumber = "Invalid phone number (10 digits)";
              }
              if (!values.comments) {
                errors.comments = "Comments are required*";
              }
              // Add more validation rules for other fields if needed
              return errors;
            }}
            
            // onSubmit function
            onSubmit={async (values, { setSubmitting }) => {
              try {
                // Transform form values into an object with column names
                const formData = {
                  "First Name": values.firstname,
                  "Last Name": values.lastname,
                  "Phone Number": values.phonenumber,
                  "Email Address": values.email,
                  "Comments": values.comments
                };
            
                // Send form data to Google Sheet via Sheet.Best API
                const response = await axios.post("https://sheet.best/api/sheets/bf7eb17f-b289-4f53-a4ba-7f0db3c767bb", formData);
                console.log('Form data sent successfully:', response.data);
                // Optionally, you can show a success message or redirect the user
                alert("Form submitted successfully");
              } catch (error) {
                // Handle error
                console.error('Error sending form data:', error.response.data);
                // Optionally, you can show an error message to the user
              } finally {
                // Reset submitting state
                setSubmitting(false);
              }
            }}
            
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-4">
                {/* Firstname and Lastname fields */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:px-8 ">
                    <Field
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      className="p-2 border-b border-gray-400 w-full placeholder:text-black placeholder:text-sm focus:outline-none focus:border-[#652D91]"
                    />
                    <ErrorMessage
                      name="firstname"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                  <div className="md:px-8">
                    <Field
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      className="p-2 border-b border-gray-400 w-full placeholder:text-black placeholder:text-sm focus:outline-none focus:border-[#652D91]"
                    />
                    <ErrorMessage
                      name="lastname"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                </div>

                {/* Phonenumber and Email fields */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:px-8">
                    <Field
                      type="text"
                      name="phonenumber"
                      placeholder="+91 Phone Number"
                      className="p-2 border-b border-gray-400 w-full  placeholder:text-black placeholder:text-sm focus:outline-none focus:border-[#652D91]"
                    />
                    <ErrorMessage
                      name="phonenumber"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                  <div className="md:px-8">
                    <Field
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      className="p-2 border-b border-gray-400 w-full  placeholder:text-black placeholder:text-sm focus:outline-none focus:border-[#652D91]"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-xs"
                    />
                  </div>
                </div>

                {/* Comments field */}
                <div className="md:px-8">
                  <Field
                    type="text"
                    name="comments"
                    placeholder="Comments"
                    className="p-2 border-b border-gray-400  w-full  placeholder:text-black placeholder:text-sm focus:outline-none focus:border-[#652D91]"
                  />
                  <ErrorMessage
                    name="comments"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>
                {/* Submit button */}
                <div className="px-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-white bg-[#652D91] w-full text-center p-2 hover:bg-[#652D91] "
                  >
                    {isSubmitting ? "Submitting..." : "SUBMIT"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* WhatsApp icon section */}
        {/* <div className="flex justify-start items-end w-14">
          <a href="https://www.whatsapp.com">
            <img src={whatsappicon} alt="whatsapp" />
          </a>
        </div> */}
      </div>
    </>
  );
}

export default Contactusform;
