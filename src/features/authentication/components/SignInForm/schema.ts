import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email(),
    phone: yup.string().min(13).max(14),
    password: yup.string().required().min(6),
  })
  .test("oneOf", "either phone or email is present", (value, ctx) => {
    const { email, phone } = value || {};
    if (email) return true;
    if (phone) return true;
    ctx.createError({ message: "Please enter a valid email or phone number" });
  })
  .required();
type SignInSchemaData = yup.InferType<typeof schema>;

export default schema;
export type { SignInSchemaData };
