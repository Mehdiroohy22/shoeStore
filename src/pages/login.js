import El from "@/library/El";
import validation from "@/functions/validation";
import validationUserData from "@/functions/validationUserData";
import "flowbite";
import Router from "@/functions/router";

const login = () => {
  const togglePassword = () => {
    const passwordInput = document.getElementById("password");
    const passwordIcon = document.getElementById("password-icon");
    const passwordType =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", passwordType);
    passwordIcon.setAttribute(
      "name",
      passwordType === "password" ? "eye-off" : "eye"
    );
  };

  const emailInput = El({
    element: "input",
    type: "email",
    placeholder: "Email",
    id: "email",
    className:
      "bg-gray-50 rounded w-full py-2 pl-12 border-0 focus:ring-black focus:border-black ring-transparent",
  });

  const passwordInput = El({
    element: "input",
    type: "password",
    placeholder: "Password",
    id: "password",
    className:
      "bg-gray-50 rounded w-full py-2 pl-12 border-0 focus:ring-black focus:border-black ring-transparent",
  });

  const signInButton = El({
    element: "button",
    type: "submit",
    child: "Sign In",
    className:
      "text-white bg-black opacity-50 py-2 w-4/5 rounded-full bottom-0 absolute mb-8",
    disabled: true,
    onclick: () => {
      validationUserData(emailInput.value, passwordInput.value);
    },
  });

  emailInput.addEventListener("input", () => {
    if (emailInput.value && passwordInput.value) {
      signInButton.disabled = false;
      signInButton.className =
        "text-white bg-black py-2 w-4/5 rounded-full bottom-0 absolute mb-8";
    } else {
      signInButton.disabled = true;
      signInButton.className =
        "text-white bg-black opacity-50 py-2 w-4/5 rounded-full bottom-0 absolute mb-8";
    }
  });

  passwordInput.addEventListener("input", () => {
    if (emailInput.value && passwordInput.value) {
      signInButton.disabled = false;
      signInButton.className =
        "text-white bg-black py-2 w-4/5 rounded-full bottom-0 absolute mb-8";
    } else {
      signInButton.disabled = true;
      signInButton.className =
        "text-white bg-black opacity-50 py-2 w-4/5 rounded-full bottom-0 absolute mb-8";
    }
  });

  return El({
    element: "div",
    className: "h-screen bg-white flex flex-col items-center",
    child: [
      El({
        element: "div",
        className: "w-full pt-5 pl-8",
        child: El({
          element: "button",
          child: El({
            element: "ion-icon",
            name: "arrow-back",
            onclick: () => {
              Router().navigate('/slider')
            }
          }),
        }),
      }),
      El({
        element: "div",
        className: "flex justify-center mt-16 mb-20",
        innerHTML: `<svg width="54" height="81" viewBox="0 0 54 81" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.23355 17.7415C22.2531 10.4389 33.6453 3.542 39.7482 0.499261C44.834 -2.54348 47.1042 9.00132 42.7997 16.7273C38.4952 24.4532 26.5252 28.8982 26.5252 28.8982C26.5252 28.8982 52.9712 22.8128 53.9884 46.1404C54.2537 52.2259 49.9198 59.3256 46.8683 61.3541C43.8168 63.3826 17.3708 79.1034 14.3194 80.6248C10.7425 82.4081 9.23359 77.582 9.23359 71.4965C9.23359 57.2971 25.5081 52.2259 25.5081 52.2259C11.2679 54.2544 2.1135 49.1832 0.0791923 33.9695C-0.598903 28.8982 3.13068 21.1646 9.23355 17.7415Z" fill="black"/>
        </svg>
        `,
      }),
      El({
        element: "form",
        name: "formLogin",
        id: "form-login",
        onsubmit: validation,
        className: "flex flex-col gap-y-8 items-center",
        child: [
          El({
            element: "h1",
            child: "Login to Your Account",
            className: "text-3xl font-medium",
          }),
          El({
            element: "div",
            className: "relative w-full",
            child: [
              emailInput,
              El({
                element: "ion-icon",
                name: "mail",
                className: "absolute left-4 top-3 text-gray-500",
              }),
            ],
          }),
          El({
            element: "div",
            className: "relative w-full",
            child: [
              passwordInput,
              El({
                element: "ion-icon",
                name: "lock-closed",
                className: "absolute left-4 top-3 text-gray-500",
              }),
              El({
                element: "ion-icon",
                id: "password-icon",
                name: "eye-off",
                className: "absolute right-4 top-3 text-gray-500",
                onclick: () => {
                  togglePassword();
                },
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex justify-center items-center mr-4",
            child: [
              El({
                element: "input",
                type: "checkbox",
                id: "rememberMe",
                value: "",
                className:
                  "w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-transparent",
              }),
              El({
                element: "label",
                className: "ml-2 text-sm font-normal text-gray-900",
                for: "rememberMe",
                child: "Remember Me",
              }),
            ],
          }),
          El({
            element: "span",
            id: "inputError",
            className:
              "flex justify-center items-center text-red-500 text-xl hidden",
            child: "Wrong Email or Password!",
          }),
          signInButton,
        ],
      }),
    ],
  });
};

export default login;
