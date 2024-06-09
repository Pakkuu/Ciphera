import Navbar from "./components/Navbar";

const Home = () => {

  return (
    <div className="min-h-screen w-full flex bg-gradient-to-br from-[#ffffff30] to-[#cb6ce535] relative">
      <div className="absolute top-[2rem] right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-md opacity-20"></div>
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-md opacity-20"></div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-md opacity-20"></div>
      <div className="relative h-[85vh] w-[90%] bg-white bg-opacity-10 shadow-[0_0_15px_rgba(0,0,0,0.05)] backdrop-filter backdrop-blur-[3rem] rounded-3xl m-auto z-10">
        <Navbar />
        <div className="font-medium">
          {/*https://docs.aws.amazon.com/amazon-s3-encryption-client/latest/developerguide/what-is-s3-encryption-client.html*/}
        </div>
      </div>
    </div>
  );
};

export default Home;