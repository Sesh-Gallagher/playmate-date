import React, { useState } from 'react';
import { BookOpen, Music, Palette, Code } from 'lucide-react';
import type { Interest } from '../../types/profile';

interface InterestQuizProps {
  onComplete: (interests: Interest[]) => void;
}

export function InterestQuiz({ onComplete }: InterestQuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedInterests, setSelectedInterests] = useState<Interest[]>([]);

  const categories = [
    {
      name: 'Creative',
      icon: Palette,
      interests: ['Drawing', 'Crafts', 'Dancing', 'Singing'],
    },
    {
      name: 'Learning',
      icon: BookOpen,
      interests: ['Science', 'History', 'Math', 'Reading'],
    },
    {
      name: 'Technology',
      icon: Code,
      interests: ['Coding', 'Robotics', 'Gaming', 'Digital Art'],
    },
    {
      name: 'Music',
      icon: Music,
      interests: ['Piano', 'Guitar', 'Drums', 'Singing'],
    },
  ];

  const handleInterestSelect = (interest: string) => {
    const newInterest: Interest = {
      id: Math.random().toString(36).substr(2, 9),
      category: categories[currentStep].name,
      name: interest,
      level: 'beginner',
    };

    setSelectedInterests((prev) => [...prev, newInterest]);
  };

  const handleNext = () => {
    if (currentStep === categories.length - 1) {
      onComplete(selectedInterests);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const category = categories[currentStep];
  const Icon = category.icon;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-purple-500 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">
          What {category.name} activities do you enjoy?
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {category.interests.map((interest) => (
          <button
            key={interest}
            className={`p-4 rounded-lg border-2 ${
              selectedInterests.some((i) => i.name === interest)
                ? 'border-purple-500 bg-purple-50'
                : 'border-gray-200 hover:border-purple-200'
            }`}
            onClick={() => handleInterestSelect(interest)}
          >
            {interest}
          </button>
        ))}
      </div>

      <button
        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
        onClick={handleNext}
      >
        {currentStep === categories.length - 1 ? 'Complete' : 'Next'}
      </button>
    </div>
  );
}