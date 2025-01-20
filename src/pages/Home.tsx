import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Shield, Users } from 'lucide-react';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 bg-white">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Find the Perfect</span>
                <span className="block text-purple-600">PlayMate for Your Child</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                Connect your children with friends who share their interests in a safe, 
                monitored environment designed for modern families.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <button
                    onClick={() => navigate('/signup')}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="flex justify-center">
                  <Sparkles className="h-12 w-12 text-purple-500" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Interest Matching</h3>
                <p className="mt-2 text-base text-gray-500">
                  Connect based on shared hobbies and activities
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <Shield className="h-12 w-12 text-purple-500" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Safe & Secure</h3>
                <p className="mt-2 text-base text-gray-500">
                  Advanced safety features and parental controls
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <Users className="h-12 w-12 text-purple-500" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Global Community</h3>
                <p className="mt-2 text-base text-gray-500">
                  Connect with families worldwide
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}