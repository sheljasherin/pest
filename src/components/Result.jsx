import { useEffect, useState } from "react";
import { db, collection, getDocs } from "./firebase";

const fertilizerSuggestions = {
  "Aphid": "Use neem oil or insecticidal soap.",
  "Locust": "Apply biological pesticides like Metarhizium.",
  "Weevil": "Use diatomaceous earth or pyrethrin-based sprays.",
  "Caterpillar": "Introduce natural predators like ladybugs or use Bacillus thuringiensis (Bt).",
  "Grasshopper": "Use row covers or apply garlic spray.",
  "Moth": "Use pheromone traps and natural repellents like basil plants."
};

const Result = () => {
  const [insectData, setInsectData] = useState([]);

  useEffect(() => {
    const fetchInsectData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "insect_detections"));
        let results = [];
        querySnapshot.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        setInsectData(results);
      } catch (error) {
        console.error("Error fetching insect data:", error);
      }
    };

    fetchInsectData();
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-100 py-6 mt-20">
      {insectData.length === 0 ? (
        <p className="text-center text-gray-600">No data found.</p>
      ) : (
        <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
          {insectData.map((item) => (
            <div key={item.id} className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Total Insects: {item.total_insects}</h2>

              {/* Harmful Insects */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-red-600">Harmful Insects ({item.harmful_count})</h3>
                <ul className="list-disc pl-6 text-red-500">
                  {item.harmful_insects.map((insect) => (
                    <li key={insect}>{insect}</li>
                  ))}
                </ul>
              </div>

              {/* Non-Harmful Insects */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-green-600">Non-Harmful Insects ({item.non_harmful_count})</h3>
                <ul className="list-disc pl-6 text-green-500">
                  {item.non_harmful_insects.map((insect) => (
                    <li key={insect}>{insect}</li>
                  ))}
                </ul>
              </div>

              {/* Insect Count */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-700">Insect Count</h3>
                <ul className="list-disc pl-6 text-gray-600">
                  {Object.entries(item.insect_count).map(([insect, count]) => (
                    <li key={insect}>{insect}: {count}</li>
                  ))}
                </ul>
              </div>

              {/* Fertilizer & Tips */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-blue-700">Tips & Fertilizer Suggestions</h3>
                <ul className="list-disc pl-6 text-blue-500">
                  {item.harmful_insects.map((insect) => (
                    <li key={insect}>
                      <strong>{insect}:</strong> {fertilizerSuggestions[insect] || "Use general pest control methods."}
                    </li>
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
