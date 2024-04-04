import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import api from "../utils/api";
import __Checkbox from "./__Checkbox";

export default function EmailSubscribe() {
  const [categories, setCategories] = useState([]);
  const [email, setEmail] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [emailSubmitted, setEmailSubmited] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("categories/");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCheckboxChange = (categoryName) => {
    if (selectedCategories.includes(categoryName)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== categoryName)
      );
    } else {
      setSelectedCategories([...selectedCategories, categoryName]);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = async () => {
    if (email.trim() === "" || email.length < 5) {
      // Display an error message using SweetAlert if email is empty or less than 5 characters
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address with at least 5 characters.",
      });
      return;
    }

    try {
      await api.post("add_email/", {
        email: email,
      });
      // Show success message using SweetAlert
      Swal.fire({
        icon: "success",
        title: "Subscription Successful!",
        text: "You have successfully subscribed.",
      });
      setEmailSubmited(true);
    } catch (error) {
      console.error("Error subscribing:", error);
      if (error.response && error.response.data && error.response.data.email) {
        // Extract the email error message from the response data
        const emailErrorMessage = error.response.data.email[0];
        // Show error message using SweetAlert with the extracted error message
        Swal.fire({
          icon: "error",
          title: "Subscription Failed",
          text: emailErrorMessage,
        });
      } else {
        // Show a generic error message if the specific error message is not available
        Swal.fire({
          icon: "error",
          title: "Subscription Failed",
          text: "Failed to subscribe. Please try again later.",
        });
      }
    }
  };

  return (
    <>
      {!emailSubmitted ? (
        <form>
          <div className="font-bold">Subscribe to our resources</div>
          <div className="text-gray-500 text-sm font-semibold mt-1">
            Add your email to get notified each time we top a new content
          </div>
          <div className="mt-3 flex border-2 rounded-lg py-2 px-3 gap-x-2">
            <div className="w-fit">
              <i className="fi fi-ts-bars-staggered relative top-[0.1rem]"></i>
            </div>
            <div className="w-full">
              <input
                type="email"
                className="w-full bg-transparent border-none outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required={true}
              />
            </div>
          </div>
          {/* categories of interest */}
          <div className="my-5">
            <div className="font-bold">Category(s) of interest*</div>
            <div className="mt-2 flex gap-2 flex-wrap">
              <__Checkbox
                name="All"
                checked={selectedCategories.includes("All")}
                onChange={() => handleCheckboxChange("All")}
              />
              {categories.map((category, index) => (
                <__Checkbox
                  key={index}
                  name={category.name}
                  checked={selectedCategories.includes(category.name)}
                  onChange={() => handleCheckboxChange(category.name)}
                />
              ))}
            </div>
          </div>
          {/* submit */}
          <div className="mt-2">
            <button
              className="uppercase py-3 px-10 w-fit bg-blue-500 text-white rounded-lg text-sm font-semibold tracking-[1px]"
              type="button"
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-2">Subscription Confirmed</h2>
          <p className="text-base leading-relaxed">
            Thank you for subscribing. You'll now receive updates on our latest
            content.
          </p>
        </div>
      )}
    </>
  );
}
