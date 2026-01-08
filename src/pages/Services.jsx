import { Wifi, Check, X } from "lucide-react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="bg-gray-50 min-h-screen px-4 md:px-6 py-16">

      <div className="text-center max-w-2xl mx-auto mb-14">
        <Wifi className="mx-auto text-blue-600 mb-4" size={42} />
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Our Internet Plans
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Choose the perfect plan for your needs. All plans include unlimited data and reliable service.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold">Basic 10Mbps</h3>
          <p className="text-3xl font-bold mt-2">$15<span className="text-sm text-gray-500">/month</span></p>

          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex gap-2"><Check className="text-green-500" size={16} />10Mbps Speed</li>
            <li className="flex gap-2"><Check className="text-green-500" size={16} />Unlimited Data</li>
            <li className="flex gap-2"><Check className="text-green-500" size={16} />Email Support</li>
            <li className="flex gap-2"><Check className="text-green-500" size={16} />1 Device</li>
          </ul>


          <button className="mt-6 w-full py-3 rounded-lg border hover:bg-gray-100">
            Get Started
          </button>

        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-600 ring-2 ring-blue-500">
          <span className="inline-block mb-4 text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
            Most Popular
          </span>

          <h3 className="text-lg font-semibold">Fiber 20Mbps</h3>
          <p className="text-3xl font-bold mt-2">$25<span className="text-sm text-gray-500">/month</span></p>

          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex gap-2"><Check className="text-green-500" size={16} />20Mbps Speed</li>
            <li className="flex gap-2"><Check className="text-green-500" size={16} />Unlimited Data</li>
            <li className="flex gap-2"><Check className="text-green-500" size={16} />Priority Support</li>
            <li className="flex gap-2"><Check className="text-green-500" size={16} />3 Devices</li>
            <li className="flex gap-2"><Check className="text-green-500" size={16} />Free Router</li>
          </ul>

          <Link to="/register">
            <button className="mt-6 w-full py-3 rounded-lg bg-black text-white hover:bg-gray-800">
              Get Started
            </button>
          </Link>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold">Premium 50Mbps</h3>
          <p className="text-3xl font-bold mt-2">$45<span className="text-sm text-gray-500">/month</span></p>

          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex gap-2"><Check className="text-green-500" size={16} />50Mbps Speed</li>
            <li className="flex gap-2"><Check className="text-green-500" size={16} />Unlimited Data</li>
            <li className="flex gap-2"><Check className="text-green-500" size={16} />24/7 Support</li>
            <li className="flex gap-2"><Check className="text-green-500" size={16} />5 Devices</li>
            <li className="flex gap-2"><Check className="text-green-500" size={16} />Free Router</li>
            <li className="flex gap-2"><Check className="text-green-500" size={16} />Static IP</li>
          </ul>

          <Link to="/register">
            <button className="mt-6 w-full py-3 rounded-lg border hover:bg-gray-100">
              Get Started
            </button>
          </Link>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold">Business 100Mbps</h3>
          <p className="text-3xl font-bold mt-2">$85<span className="text-sm text-gray-500">/month</span></p>

          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex gap-2"><Check className="text-green-500" size={16} />100Mbps Speed</li>
            <li className="flex gap-2"><Check className="text-green-500" size={16} />Unlimited Data</li>
            <li className="flex gap-2"><Check className="text-green-500" size={16} />Dedicated Support</li>
            <li className="flex gap-2"><Check className="text-green-500" size={16} />Unlimited Devices</li>
            <li className="flex gap-2"><Check className="text-green-500" size={16} />Free Equipment</li>
            <li className="flex gap-2"><Check className="text-green-500" size={16} />Static IP</li>
            <li className="flex gap-2"><Check className="text-green-500" size={16} />SLA Guarantee</li>
          </ul>

          <Link to="/register">
            <button className="mt-6 w-full py-3 rounded-lg border hover:bg-gray-100">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-center mb-6">Compare Plans</h2>

        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="min-w-[700px] w-full text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Feature</th>
                <th>Basic</th>
                <th>Fiber</th>
                <th>Premium</th>
                <th>Business</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="p-3 text-left font-medium">Speed</td>
                <td>10Mbps</td>
                <td>20Mbps</td>
                <td>50Mbps</td>
                <td>100Mbps</td>
              </tr>

              <tr className="border-t">
                <td className="p-3 text-left font-medium">Data Limit</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
              </tr>

              <tr className="border-t">
                <td className="p-3 text-left font-medium">Devices</td>
                <td>1</td>
                <td>3</td>
                <td>5</td>
                <td>Unlimited</td>
              </tr>

              <tr className="border-t">
                <td className="p-3 text-left font-medium">Router</td>
                <td><X className="text-red-500 mx-auto" /></td>
                <td><Check className="text-green-500 mx-auto" /></td>
                <td><Check className="text-green-500 mx-auto" /></td>
                <td><Check className="text-green-500 mx-auto" /></td>
              </tr>

              <tr className="border-t">
                <td className="p-3 text-left font-medium">Support</td>
                <td>Email</td>
                <td>Priority</td>
                <td>24/7</td>
                <td>Dedicated</td>
              </tr>

              <tr className="border-t">
                <td className="p-3 text-left font-medium">Static IP</td>
                <td><X className="text-red-500 mx-auto" /></td>
                <td><X className="text-red-500 mx-auto" /></td>
                <td><Check className="text-green-500 mx-auto" /></td>
                <td><Check className="text-green-500 mx-auto" /></td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">
          Additional Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Installation</h3>
            <p className="text-gray-600 text-sm mb-3">
              Professional installation within 24–48 hours
            </p>
            <p className="font-bold">$50 (one-time)</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Equipment Rental</h3>
            <p className="text-gray-600 text-sm mb-3">
              Latest router models available
            </p>
            <p className="font-bold">$5/month</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-2">Technical Support</h3>
            <p className="text-gray-600 text-sm mb-3">
              On-site support when you need it
            </p>
            <p className="font-bold">$30/visit</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Services;
