"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface Prediction {
  rank: number;
  class: string;
  confidence: number;
}

interface DiseaseInfo {
  [key: string]: string;
}

const UploadPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [info, setInfo] = useState<DiseaseInfo | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setPredictions(data.predictions);
      setInfo(data.info);
    } catch (err) {
      console.error("Error uploading file:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#f5aa42]">
        🌱 CROP DISEASE PREDICTION
      </h1>

      {/* File selector with shadcn button */}
      <div className="flex flex-col items-center gap-4">
        <label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="file-input"
          />
          <Button asChild variant="outline">
            <span>Select Image</span>
          </Button>
        </label>

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-64 rounded-lg shadow mb-4"
          />
        )}

        <Button
          onClick={handleUpload}
          disabled={!file || loading}
          className="w-40"
        >
          {loading ? "Predicting..." : "Upload & Predict"}
        </Button>
      </div>

      {/* Results */}
      {predictions.length > 0 && (
        <div className="mt-8 max-w-xl text-center">
          <h2 className="text-2xl font-semibold mb-4">🔮 Top Predictions</h2>
          <ul className="space-y-1">
            {predictions.map((pred) => (
              <li key={pred.rank}>
                {pred.rank}. {pred.class} - {pred.confidence}%
              </li>
            ))}
          </ul>
        </div>
      )}

      {info && (
        <div className="mt-8 max-w-xl text-left">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            📋 Disease Info
          </h2>
          <ul className="space-y-1">
            {Object.entries(info).map(([key, val]) => (
              <li key={key}>
                <b>{key}:</b> {val}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadPage;