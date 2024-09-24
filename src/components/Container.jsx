const Container = ({ className, children }) => {
  return (
    <div className={`${className} max-w-screen-xl mx-auto px-4 xl:px-0 `}>
      {children}
    </div>
  );
};

export default Container;
