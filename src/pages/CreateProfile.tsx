import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AvatarCreator } from '../components/profile/AvatarCreator';
import { InterestQuiz } from '../components/profile/InterestQuiz';
import { ParentVerification } from '../components/safety/ParentVerification';
import type { Avatar, Interest } from '../types/profile';
import type { ParentVerification as ParentVerificationType } from '../types/parent';

export function CreateProfile() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [avatar, setAvatar] = useState<Avatar>();
  const [interests, setInterests] = useState<Interest[]>([]);
  const [verification, setVerification] = useState<ParentVerificationType>({
    id: '1',
    status: 'pending',
    documents: {
      idVerification: false,
      backgroundCheck: false,
      phoneVerification: false,
    },
  });

  const handleAvatarSave = (newAvatar: Avatar) => {
    setAvatar(newAvatar);
    setStep(2);
  };

  const handleInterestComplete = (selectedInterests: Interest[]) => {
    setInterests(selectedInterests);
    setStep(3);
  };

  const handleVerification = (type: keyof ParentVerificationType['documents']) => {
    setVerification((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        [type]: true,
      },
    }));

    // Check if all verifications are complete
    const allComplete = Object.values({
      ...verification.documents,
      [type]: true,
    }).every(Boolean);

    if (allComplete) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="flex justify-center space-x-4">
          {[1, 2, 3].map((number) => (
            <div
              key={number}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= number ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              {number}
            </div>
          ))}
        </div>
      </div>

      {step === 1 && <AvatarCreator onSave={handleAvatarSave} />}
      {step === 2 && <InterestQuiz onComplete={handleInterestComplete} />}
      {step === 3 && (
        <ParentVerification onVerify={handleVerification} verification={verification} />
      )}
    </div>
  );
}