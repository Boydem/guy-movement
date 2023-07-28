import { ContactFormProps } from "@/components/contact-form"

export const sendContactForm = async (data: ContactFormProps) => {
  return await fetch("api/email", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
}
