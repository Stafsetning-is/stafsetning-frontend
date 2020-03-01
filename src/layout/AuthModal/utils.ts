/**
 * get key for form
 * @param signupForm is signup form displaid or not
 */
export const formKey = (signupForm: boolean) =>
	signupForm ? "signup" : "login";

/**
 * get button text beneath form
 * @param signupForm  is signup form displaid or not
 */
export const extraButtonText = (signupForm: boolean) =>
	signupForm ? "Til baka" : "Búa til aðgang";

/**
 * get button text for submit button
 * @param signupForm  is signup form displaid or not
 */
export const submitButtonText = (signupForm: boolean) =>
	signupForm ? "Búa til" : "Skrá inn";
