import { useFormik } from "formik";
import CustomButton from "../components/atoms/button";
import InputField from "../components/atoms/input";
import CustomCheckbox from "../components/atoms/checkbox";

const Home = () => {
  // const [text, setText] = useState("");
  const formik = useFormik({
    initialValues: { title: "", check: false },
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  console.log("formik", formik.values);

  return (
    <div>
      <CustomButton props={{ variant: "outlined", color: "secondary" }}>
        new button
      </CustomButton>
      <InputField
        formik={formik}
        label="Label"
        props={{
          // rows: 3,
          // multiline: true,
          placeholder: "Enter title",
          name: "title",
          // value: text,
          // onChange: (e) => setText(e.target.value),
        }}
      />
      <CustomCheckbox label="hello" formik={formik} props={{ name: "check" }} />
    </div>
  );
};

export default Home;
