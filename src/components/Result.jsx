import { FaExclamationCircle, FaCheckCircle } from 'react-icons/fa';
import { useEffect, useState } from "react";
import { db, collection, getDocs } from "./firebase";

const Result = () => {
  const [insectData, setInsectData] = useState([]);

  useEffect(() => {
    const fetchInsectData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "insect_detections"));
        const results = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setInsectData(results);
      } catch (error) {
        console.error("Error fetching insect data:", error);
      }
    };

    fetchInsectData();
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto mt-5 p-5">
      {insectData.length === 0 ? (
        <p className="text-center text-gray-600">No data found.</p>
      ) : (
        <div className="space-y-6">
          {insectData.map((item) => (
            <div key={item.id} className="border border-gray-300 rounded-lg p-4 shadow-md bg-gray-50">
              <h3 className="text-xl font-semibold text-center text-gray-700">
                Total Insects Detected: {item.total_insects}
              </h3>

              {/* Harmful Insects */}
              <div className="p-4 border-l-4 border-red-600 bg-red-100 rounded-lg">
                <h4 className="font-bold text-red-600">Harmful Insects ({item.harmful_count}):</h4>
                <ul className="list-disc list-inside text-red-500">
                  {item.harmful_insects.map((insect, index) => (
                    <li key={index}>{insect}</li>
                  ))}
                </ul>
                <p className="text-xs text-red-600 mt-2">
                  Precaution: Use protective gear and consider safe pesticide solutions.
                </p>
              </div>

              {/* Non-Harmful Insects */}
              <div className="p-4 border-l-4 border-green-600 bg-green-100 rounded-lg">
                <h4 className="font-bold text-green-600">Non-Harmful Insects ({item.non_harmful_count}):</h4>
                <ul className="list-disc list-inside text-green-500">
                  {item.non_harmful_insects.map((insect, index) => (
                    <li key={index}>{insect}</li>
                  ))}
                </ul>
              </div>

              {/* Insect Count */}
              <div className="p-4 border-l-4 border-gray-600 bg-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-700">Insect Count:</h4>
                <ul className="list-disc list-inside text-gray-800">
                  {Object.entries(item.insect_count).map(([insect, count]) => (
                    <li key={insect}>{insect}: {count}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Result;
