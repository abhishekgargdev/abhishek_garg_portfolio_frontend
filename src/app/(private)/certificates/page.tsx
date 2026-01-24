'use client';
import { useState } from 'react';
import { Plus, Trash2, Eye, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { FileUpload } from '@/components/screen/FileUpload';
import { FormCard } from '@/components/screen/FormCard';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  image: File | null;
  credentialId: string;
  credentialLink: string;
  description: string;
}
const CertificatesPage = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([
    {
      id: '1',
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      issueDate: '2023-06',
      image: null,
      credentialId: 'AWS-SAA-12345',
      credentialLink: 'https://aws.amazon.com/verification',
      description: 'Professional certification for designing distributed systems on AWS',
    },
  ]);

  const [selectedCert, setSelectedCert] = useState<string | null>(certificates[0]?.id || null);
  const [showPreview, setShowPreview] = useState(false);

  const addCertificate = () => {
    const newCert: Certificate = {
      id: Date.now().toString(),
      title: '',
      issuer: '',
      issueDate: '',
      image: null,
      credentialId: '',
      credentialLink: '',
      description: '',
    };
    setCertificates([...certificates, newCert]);
    setSelectedCert(newCert.id);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateCertificate = (id: string, field: keyof Certificate, value: any) => {
    setCertificates(
      certificates.map((cert) => (cert.id === id ? { ...cert, [field]: value } : cert)),
    );
  };

  const deleteCertificate = (id: string) => {
    setCertificates(certificates.filter((cert) => cert.id !== id));
    if (selectedCert === id) {
      setSelectedCert(certificates[0]?.id || null);
    }
  };

  const currentCert = certificates.find((c) => c.id === selectedCert);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl text-white">Certificates & Credentials</h2>
          <p className="mt-1 text-sm text-slate-400">Manage your professional certifications</p>
        </div>
        <div className="flex gap-3">
          <motion.button
            onClick={() => setShowPreview(!showPreview)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-500/20 px-4 py-2 text-purple-300 transition-colors hover:bg-purple-500/30"
          >
            <Eye className="h-4 w-4" />
            {showPreview ? 'Hide' : 'Show'} Grid
          </motion.button>
          <motion.button
            onClick={addCertificate}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/20 px-4 py-2 text-cyan-300 transition-colors hover:bg-cyan-500/30"
          >
            <Plus className="h-4 w-4" />
            Add Certificate
          </motion.button>
        </div>
      </div>

      {showPreview && (
        <FormCard>
          <h3 className="mb-4 text-lg text-white">Certificate Grid Preview</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert) => (
              <div key={cert.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="mb-3 flex h-40 w-full items-center justify-center rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20">
                  <span className="text-4xl">🏆</span>
                </div>
                <h4 className="mb-1 text-white">{cert.title || 'Certificate Title'}</h4>
                <p className="mb-2 text-sm text-slate-400">{cert.issuer || 'Issuer'}</p>
                <p className="text-xs text-slate-500">{cert.issueDate || 'Date'}</p>
              </div>
            ))}
          </div>
        </FormCard>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* Certificate List */}
        <div className="lg:col-span-1">
          <FormCard>
            <h3 className="mb-4 text-white">Certificates</h3>
            <div className="space-y-2">
              {certificates.map((cert) => (
                <motion.button
                  key={cert.id}
                  onClick={() => setSelectedCert(cert.id)}
                  whileHover={{ x: 4 }}
                  className={`w-full rounded-xl px-4 py-3 text-left transition-all ${
                    selectedCert === cert.id
                      ? 'border border-cyan-500/30 bg-cyan-500/20 text-white'
                      : 'border border-white/10 bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  <p className="truncate text-sm">{cert.title || 'New Certificate'}</p>
                  <p className="truncate text-xs text-slate-500">{cert.issuer}</p>
                </motion.button>
              ))}
            </div>
          </FormCard>
        </div>

        {/* Certificate Form */}
        <div className="lg:col-span-3">
          {currentCert && (
            <FormCard>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl text-white">Edit Certificate</h3>
                <motion.button
                  onClick={() => deleteCertificate(currentCert.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-lg border border-red-500/30 bg-red-500/20 p-2 text-red-400 transition-colors hover:bg-red-500/30"
                >
                  <Trash2 className="h-4 w-4" />
                </motion.button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-slate-400">
                      Certificate Title <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={currentCert.title}
                      onChange={(e) => updateCertificate(currentCert.id, 'title', e.target.value)}
                      placeholder="e.g., AWS Certified Solutions Architect"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-400">
                      Issuer / Organization <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={currentCert.issuer}
                      onChange={(e) => updateCertificate(currentCert.id, 'issuer', e.target.value)}
                      placeholder="e.g., Amazon Web Services"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-400">
                    Issue Date <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="month"
                    value={currentCert.issueDate}
                    onChange={(e) => updateCertificate(currentCert.id, 'issueDate', e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                  />
                </div>

                <FileUpload
                  label="Certificate Image"
                  accept="image/*"
                  onChange={(file) => updateCertificate(currentCert.id, 'image', file)}
                />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-slate-400">Credential ID</label>
                    <input
                      type="text"
                      value={currentCert.credentialId}
                      onChange={(e) =>
                        updateCertificate(currentCert.id, 'credentialId', e.target.value)
                      }
                      placeholder="e.g., AWS-SAA-12345"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-400">Verification Link</label>
                    <div className="relative">
                      <input
                        type="url"
                        value={currentCert.credentialLink}
                        onChange={(e) =>
                          updateCertificate(currentCert.id, 'credentialLink', e.target.value)
                        }
                        placeholder="https://verify.com/..."
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-10 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                      />
                      <ExternalLink className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-slate-500" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-400">Description</label>
                  <textarea
                    value={currentCert.description}
                    onChange={(e) =>
                      updateCertificate(currentCert.id, 'description', e.target.value)
                    }
                    placeholder="Brief description of the certification..."
                    rows={4}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/50 focus:outline-none"
                  />
                </div>
              </div>
            </FormCard>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;
