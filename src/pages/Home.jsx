import { FaWifi, FaArrowTrendUp, FaRegStar } from "react-icons/fa6";
import { MdPeople, MdOutlineAccessTime, MdOutlineSecurity } from "react-icons/md";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-blue-50 w-full">

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <FaWifi className="text-7xl text-blue-500 mx-auto" />

        <h1 className="text-4xl md:text-6xl font-bold mt-6">
          Welcome to InternetPay
        </h1>

        <p className="text-lg md:text-2xl text-gray-600 mt-4 max-w-3xl mx-auto">
          Your convenient solution for managing and paying internet bills online.
          Fast, secure, and hassle-free.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link to="/register">
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
              Get Started
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-white border px-8 py-3 rounded-full hover:bg-gray-50 transition">
              Login
            </button>
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-16">
        <div>
          <MdPeople className="text-5xl text-blue-500 mx-auto" />
          <h2 className="text-3xl font-bold mt-2">10,000+</h2>
          <p className="text-gray-600">Happy Customers</p>
        </div>

        <div>
          <MdOutlineAccessTime className="text-5xl text-blue-500 mx-auto" />
          <h2 className="text-3xl font-bold mt-2">99.9%</h2>
          <p className="text-gray-600">Uptime</p>
        </div>

        <div>
          <FaArrowTrendUp className="text-5xl text-blue-500 mx-auto" />
          <h2 className="text-3xl font-bold mt-2">50+</h2>
          <p className="text-gray-600">Cities Served</p>
        </div>

        <div>
          <FaRegStar className="text-5xl text-blue-500 mx-auto" />
          <h2 className="text-3xl font-bold mt-2">4.9/5</h2>
          <p className="text-gray-600">Customer Rating</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <FaRegStar className="text-3xl text-blue-500" />
          <h3 className="text-xl font-bold mt-4">Easy Payments</h3>
          <p className="text-gray-600 mt-2">
            Multiple payment methods including EVC Plus, Zaad, and cards.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <MdOutlineAccessTime className="text-3xl text-blue-500" />
          <h3 className="text-xl font-bold mt-4">24/7 Access</h3>
          <p className="text-gray-600 mt-2">
            Pay your bills anytime, anywhere using our platform.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <MdOutlineSecurity className="text-3xl text-blue-500" />
          <h3 className="text-xl font-bold mt-4">Secure</h3>
          <p className="text-gray-600 mt-2">
            Bank-level security to protect all transactions.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <FaWifi className="text-3xl text-blue-500" />
          <h3 className="text-xl font-bold mt-4">Track History</h3>
          <p className="text-gray-600 mt-2">
            View and manage all your payment history in one place.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex text-yellow-500 mb-4">
              <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
            </div>
            <p>"InternetPay made my billing very easy and fast."</p>
            <h4 className="font-bold mt-4">Ahmed Hassan</h4>
            <p className="text-sm text-gray-500">Business Owner</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex text-yellow-500 mb-4">
              <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
            </div>
            <p>"Mobile money payment works perfectly."</p>
            <h4 className="font-bold mt-4">Fatima Ali</h4>
            <p className="text-sm text-gray-500">Freelancer</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex text-yellow-500 mb-4">
              <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
            </div>
            <p>"Reliable service and great support."</p>
            <h4 className="font-bold mt-4">Mohamed Abdi</h4>
            <p className="text-sm text-gray-500">Home User</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <h2 className="text-3xl font-bold text-center">How It Works</h2>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 text-center">
          <div>
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto">1</div>
            <h3 className="font-bold mt-4">Create Account</h3>
            <p className="text-gray-600">Sign up easily</p>
          </div>

          <div>
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto">2</div>
            <h3 className="font-bold mt-4">Add Bill</h3>
            <p className="text-gray-600">Enter internet details</p>
          </div>

          <div>
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto">3</div>
            <h3 className="font-bold mt-4">Pay Online</h3>
            <p className="text-gray-600">Fast & secure payment</p>
          </div>

          <div>
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto">4</div>
            <h3 className="font-bold mt-4">Track History</h3>
            <p className="text-gray-600">View payment records</p>
          </div>
        </div>
      </section>


      <section className="px-4 md:px-8 lg:px-12 py-16">
        <div className="bg-blue-600 rounded-3xl text-center py-16 px-6 md:px-10 lg:px-20 max-w-6xl mx-auto">

          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to get started?
          </h1>

          <p className="text-blue-100 text-base md:text-lg lg:text-xl mb-10">
            Join thousands of users who trust InternetPay for their bill payments
          </p>

          <Link to="/register">
            <button className="bg-white text-black font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition">
              Create Account
            </button>
          </Link>

        </div>
      </section>

    </div>
  );
}

export default Home;
