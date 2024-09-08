const InputField = () => {
  return (
    <div className="mt-12 flex justify-center gap-4  ">
      <input
        type="text"
        placeholder="Enter your name"
        className="border rounded-md py-1 px-2 focus:outline-none w-96"
      />
      <button className="bg-black text-white rounded-md py-2 px-4 hover">
        +
      </button>
    </div>
  );
};

export default InputField;
