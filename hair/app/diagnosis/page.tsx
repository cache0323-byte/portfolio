// src/app/diagnosis/page.tsx
import { Layout } from '../../src/components/templates/Layout';
import { DiagnosisTool } from '../../src/components/organisms/DiagnosisTool';

export default function DiagnosisPage() {
  return (
    <Layout>
    
      <div className="min-h-screen bg-[#F9F4F0] pt-32 pb-20 px-4">
        <div className="text-center mb-12">
          <h1 className="font-[var(--font-zen-old-mincho)] text-3xl text-[var(--primary-black)]">
            Hair Diagnosis
          </h1>
          <p className="text-[var(--primary-brown)] mt-2">髪質診断</p>
        </div>
      <DiagnosisTool />
    </div>
    </Layout>
  );
}