import toast from "react-hot-toast";

export function validateObject(
  schema: {
    validate: (arg0: any, arg1: { abortEarly: boolean }) => Promise<any>;
  },
  object: any
) {
  let hasError = false;
  return schema
    .validate(object, { abortEarly: false }) // Validate all fields
    .then(() => ({ isError: false, errors: undefined }))
    .catch((errors: { inner: any[] }) => {
      hasError = true;
      const errorObject: Record<string, string> = {};
      errors.inner.forEach((error) => {
        errorObject[error.path] = error.message;
      });
      return { isError: hasError, errors: errorObject };
    });
}

export const formatDate = (dateString: string, format: string) => {
  const date = new Date(dateString);
  type FormatKey =
    | "dd"
    | "d"
    | "MMM"
    | "MM"
    | "yyyy"
    | "yy"
    | "HH"
    | "hh"
    | "mm"
    | "ss"
    | "A";
  const map: Record<FormatKey, string> = {
    dd: String(date?.getDate())?.padStart(2, "0"),
    d: String(date?.getDate()),
    MMM: date?.toLocaleString("en-US", { month: "short" }),
    MM: String(date?.getMonth() + 1)?.padStart(2, "0"),
    yyyy: String(date?.getFullYear()),
    yy: String(date?.getFullYear())?.slice(-2),
    HH: String(date?.getHours())?.padStart(2, "0"),
    hh: String(date?.getHours() % 12 || 12)?.padStart(2, "0"),
    mm: String(date?.getMinutes())?.padStart(2, "0"),
    ss: String(date?.getSeconds())?.padStart(2, "0"),
    A: date?.getHours() >= 12 ? "PM" : "AM",
  };

  return format.replace(
    /dd|d|MMM|MM|yyyy|yy|HH|hh|mm|ss|A/g,
    (matched) => map[matched as FormatKey]
  );
};

export const copyText = (content: any) => {
  navigator.clipboard
    .writeText(content)
    .then(() => {
      toast.success("Copied...");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
};
