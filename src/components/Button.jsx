function Button({ children, handleClick, classname }) {
  return (
    <button
      onClick={handleClick}
      className={`${
        classname ? classname : " px-3 py-2 "
      } cursor-pointer bg-slate-900 text-white rounded-full hover:bg-slate-700 transition-colors border-4 border-slate-700`}
    >
      {children}
    </button>
  );
}

export default Button;
