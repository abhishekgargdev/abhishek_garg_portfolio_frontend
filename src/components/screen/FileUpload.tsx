import { useState } from 'react';
import { Upload, X, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface FileUploadProps {
  label: string;
  accept?: string;
  onChange?: (file: File | null) => void;
  preview?: boolean;
}

export function FileUpload({
  label,
  accept = 'image/*',
  onChange,
  preview = true,
}: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);

    if (selectedFile && preview && selectedFile.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }

    onChange?.(selectedFile);
  };

  const clearFile = () => {
    setFile(null);
    setPreviewUrl(null);
    onChange?.(null);
  };

  return (
    <div className="space-y-3">
      <label className="mb-2 block text-sm text-slate-400">{label}</label>

      {!file ? (
        <label className="block cursor-pointer">
          <input type="file" accept={accept} onChange={handleFileChange} className="hidden" />
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-white/20 bg-white/5 px-6 py-8 transition-all hover:border-cyan-500/50 hover:bg-white/10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20">
              <Upload className="h-6 w-6 text-cyan-400" />
            </div>
            <div className="text-center">
              <p className="text-white">Click to upload</p>
              <p className="mt-1 text-xs text-slate-500">
                {accept.includes('image') ? 'PNG, JPG, GIF up to 10MB' : 'Select a file'}
              </p>
            </div>
          </motion.div>
        </label>
      ) : (
        <div className="relative">
          {previewUrl && (
            <div className="mb-3 overflow-hidden rounded-xl border border-white/10">
              <img src={previewUrl} alt="Preview" className="h-48 w-full object-cover" />
            </div>
          )}
          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/20">
                <Check className="h-4 w-4 text-green-400" />
              </div>
              <div>
                <p className="text-sm text-white">{file.name}</p>
                <p className="text-xs text-slate-500">{(file.size / 1024).toFixed(1)} KB</p>
              </div>
            </div>
            <motion.button
              type="button"
              onClick={clearFile}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/20 transition-colors hover:bg-red-500/30"
            >
              <X className="h-4 w-4 text-red-400" />
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
}
