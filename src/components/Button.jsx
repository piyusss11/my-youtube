function Button(props) {
  const { name } = props;
  return (
    <div>
      <button className="text-base border-2 px-4 py-1 rounded-xl bg-gray-200 ">
        {name}
      </button>
    </div>
  );
}

export default Button;
