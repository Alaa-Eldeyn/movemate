import { FieldError, UseFormRegisterReturn } from "react-hook-form";
type InputProps = {
  idTag: string;
  type: string;
  placeholder: string;
  error: FieldError | undefined;
  register: UseFormRegisterReturn<string>;
  isTextArea?: boolean;
};
const Input = ({
  idTag,
  type,
  placeholder,
  error,
  register,
  isTextArea,
}: InputProps) => {
  return (
    <>
      <label
        htmlFor={idTag}
        className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        {isTextArea ? (
          <textarea
            placeholder={placeholder}
            rows={6}
            {...register}
            id={idTag}
            className={`peer w-full rounded-md py-2.5 px-4 border-2 text-sm border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0${
              error ? "border-red-500" : null
            }`}
          />
        ) : (
          <input
            type={type}
            id={idTag}
            className={`peer w-full rounded-md py-2.5 px-4 border-2 text-sm border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0${
              error ? "border-red-500" : null
            }`}
            placeholder={placeholder}
            {...register}
          />
        )}

        <span className="pointer-events-none rounded px-1 absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-400 peer-focus:text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          {placeholder}
        </span>
      </label>
      {error && (
        <span className="text-red-500 text-[12px]">{error.message}</span>
      )}
    </>
  );
};

export default Input;
