import React from 'react';
import { Shield, Phone, FileCheck } from 'lucide-react';
import type { ParentVerification } from '../../types/parent';

interface VerificationStepProps {
  onVerify: (type: keyof ParentVerification['documents']) => void;
  verification: ParentVerification;
}

export function ParentVerification({ onVerify, verification }: VerificationStepProps) {
  const steps = [
    {
      id: 'idVerification',
      title: 'ID Verification',
      description: 'Upload a government-issued ID for verification',
      icon: FileCheck,
    },
    {
      id: 'phoneVerification',
      title: 'Phone Verification',
      description: 'Verify your phone number',
      icon: Phone,
    },
    {
      id: 'backgroundCheck',
      title: 'Background Check',
      description: 'Complete a background check for safety',
      icon: Shield,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Verify Your Account</h3>
      
      <div className="space-y-4">
        {steps.map((step) => {
          const Icon = step.icon;
          const isComplete = verification.documents[step.id as keyof ParentVerification['documents']];

          return (
            <div
              key={step.id}
              className={`p-4 rounded-lg border-2 ${
                isComplete ? 'border-green-500 bg-green-50' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center">
                <Icon className={`w-6 h-6 ${isComplete ? 'text-green-500' : 'text-gray-400'} mr-3`} />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900">{step.title}</h4>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
                {!isComplete && (
                  <button
                    className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
                    onClick={() => onVerify(step.id as keyof ParentVerification['documents'])}
                  >
                    Verify
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}