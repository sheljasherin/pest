import { FaExclamationCircle, FaCheckCircle } from 'react-icons/fa'; // Import the icons for red and green symbols

function Result() {
  const insects = [
    { name: "Brownplant hopper", count: 17 },
    { name: "ladybug", count: 8 },
    { name: "grasshopper", count: 20 },
    { name: "caterpillar", count: 10 },
  ];

  return (
    <div className="max-w-screen-lg mx-auto mt-5 p-5">
      <table className="table-auto w-full border mt-20 border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Insect Name</th>
            <th className="border border-gray-300 p-2">Count</th>
            <th className="border border-gray-300 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {insects.map((insect, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{insect.name}</td>
              <td className="border border-gray-300 p-2">{insect.count}</td>
              <td className="border border-gray-300 p-2">
                {insect.count > 15 ? (
                  <div className="flex items-center text-red-600">
                    <FaExclamationCircle className="mr-2" /> Harmful
                  </div>
                ) : (
                  <div className="flex items-center text-green-600">
                    <FaCheckCircle className="mr-2" /> Not Harmful
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Additional section for harmful insects */}
      <div className="mt-10 p-5 border-t border-gray-300">
        <h3 className="text-xl font-semibold mb-4">Important Notice:</h3>
        <p>
          If harmful insects are detected (such as those with a count higher than 15), it is crucial to take
          immediate action. These insects can damage crops significantly.
        </p>
        <p className="mt-2">
          It is recommended to use pesticides carefully. Before using any pesticide, make sure to follow
          the instructions on the label, including the quantity to use, safety precautions, and environmental
          considerations.
        </p>
        <p className="mt-2 text-red-600">
          Always wear protective gear and ensure that the pesticide is safe for the environment before applying it.
        </p>
      </div>
    </div>
  );
}

export default Result;
