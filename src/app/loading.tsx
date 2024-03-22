const Loading = () => {
  return (
    <div className="w-full  flex-row-center h-screen">
      <div className="h-full w-full flex items-center justify-center absolute z-10  left-0 top-0">
        <span className="loading bg-orange-500 loading-infinity loading-lg text-white"></span>
      </div>
    </div>
  );
};

export default Loading;
